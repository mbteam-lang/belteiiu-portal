import { useEffect, useState, useCallback, useRef } from 'react';
import { subjectListCatche, courseCatche, lessonCatche, relatedCourseCatche } from '@/utils/cache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { useLanguage } from '@/hooks/useLanguage';
import { endpoints } from '@/services/endpoints';
import { getService, postService } from '@/services/apiService';

const normalizeCourse = (rawData) => {
    if (!rawData) return null;
    return {
        courseTitle: rawData.title || "Untitled Course",
        faculty: rawData.faculty || "",
        department: rawData.major || "N/A",
        description: rawData.description || "",
        thumbnail: rawData.thumbnail,
        weeks: rawData.chapter?.map(ch => ({
            id: ch.chapter_id,
            title: ch.chapter,
            lessons: ch.lesson?.map(les => ({
                id: les.lesson_id,
                title: les.lesson,
                video: les.video_url,
                duration: les.duration,
                created_at: les.created_at,
                display_video: les.display_video
            })) || []
        })) || []
    };
};

export const useElearning = (params = {}) => {
    // Normalize string/number id to { facultyID: id } for seamless backwards compatibility
    const normalizedParams = typeof params === 'string' || typeof params === 'number'
        ? { facultyID: params }
        : (params || {});
    const { facultyID, subjectID, courseID } = normalizedParams;

    const [subjectList, setSubjectList] = useState([]);
    const [course, setCourse] = useState([]);
    const [lesson, setLesson] = useState(null);
    const [relatedCourse, setRelatedCourse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [nodata, setNodata] = useState(false);
    const [error, setError] = useState(null);
    const { lang } = useLanguage();
    const abortRef = useRef(null);

    const fetchSubjectList = useCallback(async (signal = null) => {
        if (!facultyID) return;
        const cacheKey = `${lang}_${facultyID}`;
        if (subjectListCatche[cacheKey]) {
            setSubjectList(subjectListCatche[cacheKey].data || subjectListCatche[cacheKey]);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.subjects, { faculty_id: facultyID }, {}, signal);
            if (res.success && res.code === 200) {
                subjectListCatche[cacheKey] = res;
                setSubjectList(res.data);
                setNodata(false);
            } else if (res.code === 404) {
                setNodata(true);
                setSubjectList([]);
            } else {
                setSubjectList([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(getResponseMessage(err));
                setSubjectList([]);
            }
        } finally {
            setLoading(false);
        }
    }, [lang, facultyID]);

    const fetchCourse = useCallback(async (signal = null) => {
        if (!subjectID) return;
        const cacheKey = `${lang}_${subjectID}`;
        if (courseCatche[cacheKey]) {
            setCourse(courseCatche[cacheKey].data || courseCatche[cacheKey]);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.courses, { subject_id: subjectID }, {}, signal);
            if (res.success && res.code === 200) {
                courseCatche[cacheKey] = res;
                setCourse(res.data);
                setNodata(false);
            } else if (res.code === 404) {
                setNodata(true);
                setCourse([]);
            } else {
                setCourse([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(getResponseMessage(err));
                setCourse([]);
            }
        } finally {
            setLoading(false);
        }
    }, [lang, subjectID]);

    const fetchRelatedCourse = useCallback(async (signal = null) => {
        if (!courseID) return;
        const cacheKey = `${lang}_${courseID}`;
        if (relatedCourseCatche[cacheKey]) {
            setRelatedCourse(relatedCourseCatche[cacheKey].data || relatedCourseCatche[cacheKey]);
            return;
        }
        try {
            const res = await getService(endpoints.relatedCourses, { course_id: courseID }, {}, signal);
            if (res.success && res.code === 200) {
                relatedCourseCatche[cacheKey] = res;
                setRelatedCourse(res.data);
            } else {
                setRelatedCourse([]);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setRelatedCourse([]);
            }
        }
    }, [lang, courseID]);

    const fetchLesson = useCallback(async (signal = null) => {
        if (!courseID) return;
        const cacheKey = `${lang}_${courseID}`;
        if (lessonCatche[cacheKey]) {
            setLesson(lessonCatche[cacheKey]);
            return;
        }
        setLoading(true);
        try {
            const res = await getService(endpoints.lessons, { course_id: courseID }, {}, signal);
            if (res.success && res.code === 200) {
                const normalized = normalizeCourse(res.data);
                lessonCatche[cacheKey] = normalized;
                setLesson(normalized);
                setNodata(false);
            } else if (res.code === 404) {
                setNodata(true);
                setLesson(null);
            } else {
                setLesson(null);
                setError(getResponseMessage({ response: res }));
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                setError(getResponseMessage(err));
                setLesson(null);
            }
        } finally {
            setLoading(false);
        }
    }, [lang, courseID]);

    const countView = async (courseId) => {
        try {
            const res = await postService(endpoints.countView, { course_id: courseId });
            if (res.success && res.code === 200) {
                fetchCourse();
            }
        } catch (err) {
            console.error('Count view error:', err);
        }
    };

    useEffect(() => {
        if (abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        if (facultyID) fetchSubjectList(controller.signal);
        if (subjectID) fetchCourse(controller.signal);
        if (courseID) {
            fetchRelatedCourse(controller.signal);
            fetchLesson(controller.signal);
        }

        return () => controller.abort();
    }, [lang, facultyID, subjectID, courseID, fetchSubjectList, fetchCourse, fetchRelatedCourse, fetchLesson]);

    return {
        subjectList,
        course,
        lesson,
        relatedCourse,
        nodata,
        loading,
        error,
        countView,
        refetch: () => {
            fetchSubjectList();
            fetchCourse();
            fetchRelatedCourse();
            fetchLesson();
        }
    };
};
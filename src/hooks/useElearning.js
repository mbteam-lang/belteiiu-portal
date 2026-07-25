import { useEffect, useState } from 'react';
import { subjectListCatche, courseCatche, lessonCatche, relatedCourseCatche } from '@/utils/apiCache';
import { getResponseMessage } from '@/utils/getResponseMessage';
import { getLanguage } from '@/services/languageService';
import { endpoints } from '@/services/endpoints';
import { getService } from '@/services/apiService';

const normalizeCourse = (rawData) => {
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
    const { facultyID, subjectID, courseID } = params;

    const [subjectList, setSubjectList] = useState([]);
    const [course, setCourse] = useState([]);
    const [lesson, setLesson] = useState(null);
    const [relatedCourse, setRelatedCourse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nodata, setNodata] = useState(false);
    const [error, setError] = useState(null);
    const currentLanguage = getLanguage();

    useEffect(() => {
        fetchSubjectList();
        fetchCourse();
        fetchRelatedCourse();
        fetchLesson();
    }, [currentLanguage, facultyID, subjectID, courseID]);

    const fetchSubjectList = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.subjects, { faculty_id: facultyID });
            if (res.code === 200) {
                subjectListCatche[currentLanguage] = res;
                setSubjectList(res.data);
            }else if (res.code === 404) {
                setNodata(true);
            } else {
                setSubjectList([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setSubjectList([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchCourse = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.courses, { subject_id: subjectID });
            console.log("Res data", res.data)
            if (res.code === 200) {
                courseCatche[currentLanguage] = res;
                setCourse(res.data);
            } else if (res.code === 404) {
                setNodata(true);
            } else {
                setCourse([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setCourse([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchRelatedCourse = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.relatedCourses, { course_id: courseID });
            if (res.code === 200) {
                relatedCourseCatche[currentLanguage] = res;
                setRelatedCourse(res.data);
            } else if (res.code === 404) {
                setRelatedCourse([]);
            } else {
                setRelatedCourse([]);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setRelatedCourse([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchLesson = async () => {
        setLoading(true);
        try {
            const res = await getService(endpoints.lessons, { 
                course_id: courseID 
            });
            if (res.code === 200) {
                const normalized = normalizeCourse(res.data);
                lessonCatche[currentLanguage] = normalized;
                setLesson(normalized);
            } else if (res.code === 404) {
                setNodata(true);
            } else {
                setLesson(null);
                setError(getResponseMessage({ response: res }));
            }
        } catch (error) {
            setError(getResponseMessage(error));
            setLesson(null);
        } finally {
            setLoading(false);
        }
    };

    const countView = async (courseId) => {
        try {
            const res = await getService(endpoints.countView, { 
                course_id: courseId 
            });
            if (res.code === 200) {
                fetchCourse();
            } else {
                console.error('Count view failed:', res.message);
            }
        } catch (error) {
            setError(getResponseMessage(error));
        }
    };

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
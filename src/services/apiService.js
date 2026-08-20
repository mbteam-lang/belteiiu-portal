// src/services/apiService.js

import apiClient from './apiClient';
import endpoints from './apiEndpoints';
import appCache from '@/utils/cache';
import { getLanguage } from './languageService';

export const getService = async (endpoint, params = {}, customHeaders = {}, signal = null) => {
    return await apiClient.get(endpoint, params, customHeaders, signal);
};

export const postService = async (endpoint, body = {}, customHeaders = {}, signal = null) => {
    return await apiClient.post(endpoint, body, customHeaders, signal);
};

// Domain-specific service functions with caching
export const portalService = {
    async getCached(endpoint, params = {}, ttl = 5 * 60 * 1000, signal = null) {
        const lang = getLanguage() || 'en';
        const cacheKey = `${lang}:${endpoint}:${JSON.stringify(params)}`;
        const cached = appCache.get(cacheKey);
        if (cached) return cached;

        const res = await getService(endpoint, params, {}, signal);
        if (res.success && res.code === 200) {
            appCache.set(cacheKey, res, ttl);
        }
        return res;
    },

    getFaculties(degreesId, signal = null) {
        return this.getCached(endpoints.faculty, { degrees_id: degreesId }, 5 * 60 * 1000, signal);
    },

    getCountAll(signal = null) {
        return this.getCached(endpoints.countAll, {}, 10 * 60 * 1000, signal);
    },

    getAboutList(typeId = null, signal = null) {
        return this.getCached(endpoints.about_list, typeId ? { type_id: typeId } : {}, 5 * 60 * 1000, signal);
    },

    getCollaboration(typeId = null, signal = null) {
        return this.getCached(endpoints.collaboration, typeId ? { type_id: typeId } : {}, 5 * 60 * 1000, signal);
    },

    getDegrees(signal = null) {
        return this.getCached(endpoints.degrees, {}, 10 * 60 * 1000, signal);
    },

    getSubjects(facultyId, signal = null) {
        return this.getCached(endpoints.subjects, { faculty_id: facultyId }, 5 * 60 * 1000, signal);
    },

    getCourses(subjectId, signal = null) {
        return this.getCached(endpoints.courses, { subject_id: subjectId }, 5 * 60 * 1000, signal);
    },

    getLessons(courseId, signal = null) {
        return this.getCached(endpoints.lessons, { course_id: courseId }, 5 * 60 * 1000, signal);
    },

    countView(courseId) {
        return postService(endpoints.countView, { course_id: courseId });
    }
};

export default {
    getService,
    postService,
    portalService,
};

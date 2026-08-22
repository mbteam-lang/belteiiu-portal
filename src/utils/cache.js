// src/utils/cache.js

class MemoryCache {
    constructor(defaultTTL = 5 * 60 * 1000, maxEntries = 200) {
        this.store = new Map();
        this.defaultTTL = defaultTTL;
        this.maxEntries = maxEntries;
    }

    set(key, value, ttl = this.defaultTTL) {
        if (this.store.size >= this.maxEntries) {
            const firstKey = this.store.keys().next().value;
            this.store.delete(firstKey);
        }
        const expiresAt = Date.now() + ttl;
        this.store.set(key, { value, expiresAt });
    }

    get(key) {
        const item = this.store.get(key);
        if (!item) return null;
        if (Date.now() > item.expiresAt) {
            this.store.delete(key);
            return null;
        }
        return item.value;
    }

    has(key) {
        return this.get(key) !== null;
    }

    delete(key) {
        return this.store.delete(key);
    }

    clear() {
        this.store.clear();
    }
}

export const appCache = new MemoryCache();

// Helper to create a namespaced cache store with transparent object-like fallback
function createCacheNamespace(namespace) {
    return new Proxy({}, {
        get(_, prop) {
            return appCache.get(`${namespace}:${String(prop)}`);
        },
        set(_, prop, value) {
            appCache.set(`${namespace}:${String(prop)}`, value);
            return true;
        },
        deleteProperty(_, prop) {
            return appCache.delete(`${namespace}:${String(prop)}`);
        }
    });
}

// Backward-compatible named caches for smooth hook interop
export const facultyCache = createCacheNamespace('faculty');
export const newsCache = createCacheNamespace('news');
export const countCache = createCacheNamespace('count');
export const intensiveCache = createCacheNamespace('intensive');
export const historyAndLocationCache = createCacheNamespace('historyAndLocation');
export const headquarterCache = createCacheNamespace('headquarter');
export const belteiHistoryCache = createCacheNamespace('belteiHistory');
export const campus1Cache = createCacheNamespace('campus1');
export const campus2Cache = createCacheNamespace('campus2');
export const worldWideElibraryCache = createCacheNamespace('worldWideElibrary');
export const collaborationTypeCache = createCacheNamespace('collaborationType');
export const collaborationCache = createCacheNamespace('collaboration');
export const degreeCache = createCacheNamespace('degree');
export const admissionCache = createCacheNamespace('admission');
export const majorCache = createCacheNamespace('major');
export const mainDegreeCache = createCacheNamespace('mainDegree');
export const majorDetailCache = createCacheNamespace('majorDetail');
export const extraProgramCache = createCacheNamespace('extraProgram');
export const extraListCache = createCacheNamespace('extraList');
export const academicCategoriesCache = createCacheNamespace('academicCategories');
export const academicFacultyCache = createCacheNamespace('academicFaculty');
export const academicResearchCache = createCacheNamespace('academicResearch');
export const academicFilterCache = createCacheNamespace('academicFilter');
export const extraDetailCache = createCacheNamespace('extraDetail');
export const extraViewCache = createCacheNamespace('extraView');
export const extraViewDetailCache = createCacheNamespace('extraViewDetail');
export const subjectListCatche = createCacheNamespace('subjectList');
export const courseCatche = createCacheNamespace('course');
export const lessonCatche = createCacheNamespace('lesson');
export const relatedCourseCatche = createCacheNamespace('relatedCourse');
export const newsDetailCache = createCacheNamespace('newsDetail');
export const categoryCache = createCacheNamespace('category');
export const aboutCache = createCacheNamespace('about');
export const detailCache = createCacheNamespace('detail');
export const awardCache = createCacheNamespace('award');
export const searchCache = createCacheNamespace('search');

export default appCache;

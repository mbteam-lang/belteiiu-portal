import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout.jsx';
import ScrollToTop from '@/components/layout/ScrollToTop.jsx';
import ErrorBoundary from '@/components/common/ErrorBoundary.jsx';
import { Loading } from '@/components/common/Loading.jsx';
import Nodata from '@/components/common/Nodata.jsx';

// Lazy load all page routes for fast initial load & automatic code-splitting
const Home = lazy(() => import('@/pages/home/Home.jsx'));
const List_Intensive = lazy(() => import('@/pages/intensive/List_Intensive.jsx'));
const English_Intensive = lazy(() => import('@/pages/intensive/English_Intensive.jsx'));
const Day_And_Time = lazy(() => import('@/pages/intensive/Day_and_time.jsx'));
const Pedalogy = lazy(() => import('@/pages/intensive/Pedalogy.jsx'));
const Computer_Intensive = lazy(() => import('@/pages/intensive/Computer_Intensive.jsx'));
const Tuition_Fees = lazy(() => import('@/pages/intensive/Tuition_Fees.jsx'));
const Chinese_Intensive = lazy(() => import('@/pages/intensive/Chinese_Intensive.jsx'));

const Index_History = lazy(() => import('@/pages/about/His_And_Loc.jsx'));
const Headquarters = lazy(() => import('@/pages/about/Headquarters.jsx'));
const About = lazy(() => import('@/pages/about/About.jsx'));
const Campus_1 = lazy(() => import('@/pages/about/Campus_1.jsx'));
const Campus_2 = lazy(() => import('@/pages/about/Campus_2.jsx'));
const Dormitory = lazy(() => import('@/pages/about/Dormitory.jsx'));
const List_WorldWideElibrary = lazy(() => import('@/pages/about/Elibrary.jsx'));
const Other_Library = lazy(() => import('@/pages/about/Other_Library.jsx'));
const Award = lazy(() => import('@/pages/about/Award.jsx'));
const HistoryDetails = lazy(() => import('@/pages/about/History_Details.jsx'));

const Term_Condition = lazy(() => import('@/pages/more/Term_Condition.jsx'));

const List_Collaboration = lazy(() => import('@/pages/collaboration/List_Collaboration.jsx'));
const International_Collaboration = lazy(() => import('@/pages/collaboration/International_Collaboration.jsx'));
const National_Collaboration = lazy(() => import('@/pages/collaboration/National_Collaboration.jsx'));
const Scholarship = lazy(() => import('@/pages/collaboration/Scholarship.jsx'));

const Degree = lazy(() => import('@/pages/main_degree/Degree.jsx'));
const Admission = lazy(() => import('@/pages/main_degree/Admission.jsx'));
const Faculty = lazy(() => import('@/pages/main_degree/Faculty.jsx'));
const Majors = lazy(() => import('@/pages/main_degree/Major.jsx'));
const List_Main = lazy(() => import('@/pages/main_degree/List_Main.jsx'));
const Single_Major = lazy(() => import('@/pages/main_degree/Single_mayjor.jsx'));
const ExtraProgram = lazy(() => import('@/pages/main_degree/Extra_program/Extra_Program.jsx'));
const ExtraList = lazy(() => import('@/pages/main_degree/Extra_program/Extra_list.jsx'));
const ExtraDetail = lazy(() => import('@/pages/main_degree/Extra_program/Extra_Detail.jsx'));
const ViewExtraDetail = lazy(() => import('@/pages/main_degree/Extra_program/View_Extra_Detail.jsx'));
const E_Learning = lazy(() => import('@/pages/main_degree/E_Learning.jsx'));

const Academic_Categories = lazy(() => import('@/pages/research/Academic_Categories.jsx'));
const Academic_Faculty = lazy(() => import('@/pages/research/Academic_Faculty.jsx'));
const Academic_Research = lazy(() => import('@/pages/research/Academic_Research.jsx'));

const Subject_list = lazy(() => import('@/pages/e_learning/Subject_list.jsx'));
const Course = lazy(() => import('@/pages/e_learning/Course.jsx'));
const LessonScreen = lazy(() => import('@/pages/e_learning/Lesson.jsx'));

export default function AppRouter() {
    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <ScrollToTop />
            <ErrorBoundary>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="list_intensive" element={<List_Intensive />} />
                            <Route path="english_intensive" element={<English_Intensive />} />
                            <Route path="day_time" element={<Day_And_Time />} />
                            <Route path="pedalogy" element={<Pedalogy />} />
                            <Route path="computer_intensive" element={<Computer_Intensive />} />
                            <Route path="tuition_fees_intensive" element={<Tuition_Fees />} />

                            <Route path="chinese_intensive" element={<Chinese_Intensive />} />
                            <Route path="history" element={<Index_History />} />
                            <Route path="headquarters" element={<Headquarters />} />
                            <Route path="about" element={<About />} />
                            <Route path="campus_1" element={<Campus_1 />} />
                            <Route path="campus_2" element={<Campus_2 />} />
                            <Route path="dormitory" element={<Dormitory />} />
                            <Route path="worldwide_elibrary" element={<List_WorldWideElibrary />} />
                            <Route path="term_condition" element={<Term_Condition />} />
                            <Route path="list_collaboration" element={<List_Collaboration />} />
                            <Route path="international_collaboration" element={<International_Collaboration />} />
                            <Route path="national_collaboration" element={<National_Collaboration />} />
                            <Route path="scholarships" element={<Scholarship />} />
                            <Route path="degree" element={<Degree />} />
                            <Route path="admission" element={<Admission />} />
                            <Route path="faculty/:degreesId" element={<Faculty />} />
                            <Route path="major/:facultiesId" element={<Majors />} />
                            <Route path="list_main" element={<List_Main />} />
                            <Route path="single-major/:majorId" element={<Single_Major />} />
                            <Route path="extra_program" element={<ExtraProgram />} />
                            <Route path="extra-list/:id" element={<ExtraList />} />
                            <Route path="academic_categories" element={<Academic_Categories />} />
                            <Route path="academic_faculties/:id" element={<Academic_Faculty />} />
                            <Route path="academic_researches/:id" element={<Academic_Research />} />
                            <Route path="extras-detail/:id" element={<ExtraDetail />} />
                            <Route path="view-extra-detail/:id" element={<ViewExtraDetail />} />
                            <Route path="e-learning" element={<E_Learning />} />
                            <Route path="e-faculty/:id" element={<Subject_list />} />
                            <Route path="courses/:id" element={<Course />} />
                            <Route path="lessons/:id" element={<LessonScreen />} />
                            <Route path="history_detail/:id" element={<HistoryDetails />} />
                            <Route path="other_library" element={<Other_Library />} />
                            <Route path="award/:id" element={<Award />} />
                        </Route>
                        <Route path="*" element={<Nodata />} />
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </Router>
    );
}

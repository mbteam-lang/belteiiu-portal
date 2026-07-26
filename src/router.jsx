import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout.jsx';
import Nodata from '@/components/common/Nodata.jsx';
import Home from '@/pages/home/Home.jsx';
import Dormitory from '@/pages/about/Dormitory.jsx';
import Pedalogy from '@/pages/intensive/Pedalogy.jsx';
import English_Intensive from '@/pages/intensive/English_Intensive.jsx';
import Computer_Intensive from '@/pages/intensive/Computer_Intensive.jsx';
import Tuition_Fees from '@/pages/intensive/Tuition_Fees.jsx';
import Headquarters from '@/pages/about/Headquarters.jsx';
import Campus_1 from '@/pages/about/Campus_1.jsx';
import Campus_2 from '@/pages/about/Campus_2.jsx';
import National_Collaboration from '@/pages/collaboration/National_Collaboration.jsx';
import International_Collaboration from '@/pages/collaboration/International_Collaboration.jsx';
import About from '@/pages/about/About.jsx';
import Term_Condition from '@/pages/more/Term_Condition.jsx';
import Degree from '@/pages/main_degree/Degree.jsx';
import Majors from '@/pages/main_degree/Major.jsx';
import Single_Major from '@/pages/main_degree/Single_mayjor.jsx';
import Faculty from '@/pages/main_degree/Faculty.jsx';
import Admission from '@/pages/main_degree/Admission.jsx';
import Day_And_Time from '@/pages/intensive/Day_and_time.jsx';
import Chinese_Intensive from '@/pages/intensive/Chinese_Intensive.jsx';
import List_Intensive from '@/pages/intensive/List_Intensive.jsx';
import List_Main from '@/pages/main_degree/List_Main.jsx';
import Index_History from '@/pages/about/His_And_Loc.jsx';
import Academic_Categories  from '@/pages/research/Academic_Categories.jsx';
import Academic_Faculty from '@/pages/research/Academic_Faculty.jsx';
import Academic_Research from '@/pages/research/Academic_Research.jsx';
import List_Collaboration from '@/pages/collaboration/List_Collaboration.jsx';
import List_WorldWideElibrary from '@/pages/about/elibrary.jsx';
import E_Learning from '@/pages/main_degree/E_Learning.jsx';
import ExtraProgram from '@/pages/main_degree/Extra_program/Extra_Program.jsx';
import ExtraList from '@/pages/main_degree/Extra_program/Extra_list.jsx';
import ExtraDetail from '@/pages/main_degree/Extra_program/Extra_Detail.jsx';
import ViewExtraDetail from '@/pages/main_degree/Extra_program/View_Extra_Detail.jsx';
import Scholarship from '@/pages/collaboration/Scholarship.jsx';
import Subject_list from '@/pages/e_learning/Subject_list.jsx';
import LessonScreen from '@/pages/e_learning/Lesson.jsx';
import Course from '@/pages/e_learning/Course.jsx';
import News from '@/pages/home/News.jsx';
import NewsDetails from '@/pages/home/News_Details.jsx';

import Other_Library from '@/pages/about/Other_Library.jsx';
import Award from '@/pages/about/Award.jsx';
import HistoryDetails from '@/pages/about/History_Details.jsx';
import WatchVideo from '@/components/sections/WatchVideo.jsx';


const AppRouter = () => (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index path="/" element={<Home />} replace/>
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
                <Route path="scholarships" element={<Scholarship/>} />
                <Route path="degree" element={<Degree />} />
                <Route path="admission" element={<Admission />} />
                <Route path="faculty/:degreesId" element={<Faculty />} />
                <Route path="major/:facultiesId" element={<Majors />} />
                <Route path="list_main" element={<List_Main />} />
                <Route path="single-major/:majorId" element={<Single_Major />} />
                <Route path="extra_program" element={<ExtraProgram />} />
                <Route path="extra-list/:id" element={<ExtraList/>} />
                <Route path="academic_categories" element={<Academic_Categories />} />
                <Route path="academic_faculties/:id" element={<Academic_Faculty />} />
                <Route path="academic_researches/:id" element={<Academic_Research />} />
                <Route path="extras-detail/:id" element={<ExtraDetail/>} />
                <Route path="view-extra-detail/:id" element={<ViewExtraDetail/>} />
                <Route path="e-learning" element={<E_Learning />} />
                <Route path="e-faculty/:id" element={<Subject_list />} />
                <Route path="courses/:id" element={<Course />} /> 
                <Route path="lessons/:id" element={<LessonScreen />} />
                <Route path="news" element={<News />} />
                <Route path="news/detail/:id" element={<NewsDetails />} />
                <Route path="history_detail/:id" element={<HistoryDetails />} />
                <Route path="other_library" element={<Other_Library />} />
                <Route path="award/:id" element={<Award />} />
                <Route path="watch/:id" element={<WatchVideo />} />
            </Route>
            <Route path="*" element={<Nodata />} />
        </Routes>
    </Router>
);

export default AppRouter;

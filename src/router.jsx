import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from '@/App.jsx';
import MainLayout from '@/components/layout/MainLayout.jsx';
import NotFound from '@/components/sections/NotFound.jsx';

import BELTEIIS from "@/components/layout/bis/BELTEIIS";
import BELTEIIU from "@/components/layout/biu/BELTEIIU";

import BIUHome from '@/views/biu/home/Home.jsx';
import BISHome from '@/views/bis/home/Home.jsx';

// BELTEI IU
import Dormitory from './views/biu/about/Dormitory.jsx';
import Pedalogy from './views/biu/intensive/Pedalogy.jsx';
import English_Intensive from './views/biu/intensive/English_Intensive.jsx';
import Computer_Intensive from './views/biu/intensive/Computer_Intensive.jsx';
import Tuition_Fees from './views/biu/intensive/Tuition_Fees.jsx';
import Headquarters from './views/biu/about/Headquarters.jsx';
import Campus_1 from './views/biu/about/Campus_1.jsx';
import Campus_2 from './views/biu/about/Campus_2.jsx';
import National_Collaboration from './views/biu/collaboration/National_Collaboration.jsx';
import International_Collaboration from './views/biu/collaboration/International_Collaboration.jsx';
import About from './views/biu/about/About.jsx';
import Term_Condition from './views/biu/more/Term_Condition.jsx';
import Degree from './views/biu/main_degree/Degree.jsx';
import Majors from './views/biu/main_degree/Major.jsx';
import Single_Major from './views/biu/main_degree/Single_mayjor.jsx';
import Faculty from './views/biu/main_degree/Faculty.jsx';
import Admission from './views/biu/main_degree/Admission.jsx';
import Day_And_Time from './views/biu/intensive/Day_and_time.jsx';
import Chinese_Intensive from './views/biu/intensive/Chinese_Intensive.jsx';
import List_Intensive from './views/biu/intensive/List_Intensive.jsx';
import List_Main from './views/biu/main_degree/List_Main.jsx';
import Index_History from './views/biu/about/His_And_Loc.jsx';
import Academic_Categories  from './views/biu/research/Academic_Categories.jsx';
import Academic_Faculty from './views/biu/research/Academic_Faculty.jsx';
import Academic_Research from './views/biu/research/Academic_Research.jsx';
import List_Collaboration from './views/biu/collaboration/List_Collaboration.jsx';
import List_WorldWideElibrary from './views/biu/about/WWE.jsx';
import E_Learning from './views/biu/main_degree/E_Learning.jsx';
import ExtraProgram from './views/biu/main_degree/Extra_program/Extra_Program.jsx';
import ExtraList from './views/biu/main_degree/Extra_program/Extra_list.jsx';
import ExtraDetail from './views/biu/main_degree/Extra_program/Extra_Detail.jsx';
import ViewExtraDetail from './views/biu/main_degree/Extra_program/View_Extra_Detail.jsx';
import Scholarship from './views/biu/collaboration/Scholarship.jsx';
import Subject_list from './views/biu/e_learning/Subject_list.jsx';
import LessonScreen from './views/biu/e_learning/Lesson.jsx';
import Course from './views/biu/e_learning/Course.jsx';
import News from './views/biu/home/News.jsx';
import NewsDetails from './views/biu/home/News_Details.jsx';

import Other_Library from './views/biu/about/Other_Library.jsx';
import Award from './views/biu/about/Award.jsx';
import HistoryDetails from './views/biu/about/History_Details.jsx';
import WatchVideo from './components/sections/BIU/WatchVideo.jsx';

// BELTEI IS
import Ged from '@/views/bis/main_program/ged/Ged.jsx';
import GedDetail from '@/views/bis/main_program/ged/GedDetail.jsx';
import GedTuition from '@/views/bis/main_program/ged/GedTuition.jsx';
import Esl from '@/views/bis/main_program/esl/Esl.jsx';
import EslDetail from '@/views/bis/main_program/esl/EslDetail.jsx';
import EslTuition from '@/views/bis/main_program/esl/EslTuition.jsx';
import Csl from '@/views/bis/main_program/csl/Csl.jsx';
import CslDetail from '@/views/bis/main_program/csl/CslDetail.jsx';
import CslTuition from '@/views/bis/main_program/csl/CslTuition.jsx';
import Ima from '@/views/bis/main_program/ima/ima.jsx';
import ImaTuition from '@/views/bis/main_program/ima/imaTuition.jsx';
import Itpc from '@/views/bis/main_program/itpc/itpc.jsx';
import ItpcTuition from '@/views/bis/main_program/itpc/itpcTuition.jsx';
import Condition from '@/views/bis/condition.jsx';

const AppRouter = () => (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
            {/* Redirect root */}
            <Route path="/" element={<Navigate to="/" replace />} />

            <Route element={<MainLayout />}>
                <Route path="/" element={<App />} />
            </Route>
          
            <Route path="/biu" element={<BELTEIIU />}>
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home" element={<BIUHome />} />
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

            {/* ========================= */}
            {/* BELTEI International School */}
            {/* ========================= */}

            <Route path="/bis" element={<BELTEIIS />}>
                <Route index element={<Navigate to="home" replace />}/>
                <Route path="home" element={<BISHome />}/>
                <Route path="ged" element={<Ged />} />
                <Route path="ged-details/:id" element={<GedDetail />}/>
                <Route path="ged-tuition" element={<GedTuition />} />
                <Route path="esl" element={<Esl />} />
                <Route path="esl-details/:id" element={<EslDetail />} />
                <Route path="esl-tuition" element={<EslTuition />} />
                <Route path="csl" element={<Csl />} />
                <Route path="csl-details/:id" element={<CslDetail />} />
                <Route path="csl-tuition" element={<CslTuition />} />           
                <Route path="ima" element={<Ima />} />
                <Route path="ima-tuition" element={<ImaTuition />} />
                <Route path="itpc" element={<Itpc />} />
                <Route path="itpc-tuition" element={<ItpcTuition />} />
                <Route path="term_bis" element={<Condition />} />
            </Route>



            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default AppRouter;

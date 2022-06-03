import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GroupSession from "./Curriculum/GroupSessions";
import GroupSessionTwo from "./Curriculum/CurriculumtabsTwo";
import CurriculumTabs from "./Curriculum/CurriculumTabs";
import CurriculumTabsTwo from "./Curriculum/CurriculumTabsTwo";
import ColumnOne from "./Curriculum/ColumnOne";
import ColumnTwo from "./Curriculum/ColumnTwo";
import ColumnThree from "./Curriculum/ColumnThree";
import AboutHero from "./About/About_Hero";
import AboutService from "./About/About_Service";
import AboutJoin from "./About/About_join";
import Course from "./Course-Page/Course_about";
import CourseLearning from "./Course-Page/Course_learning";
import CoursePrecent from "./Course-Page/Course_precent";
import CourseService from "./Course-Page/Course_Service";
// import FreeTrail from "../Docs/Popup/FreeTrail";
// import Signup from "../Docs/admin/Signup";
import TeachersTeam from "./Teachers/TeachersTeam";
import TeacherHero from "./Teachers/TeachersHero";
import TeacherCount from "./Teachers/TeachersCount";
import TeacherTestmonial from "./Teachers/TeachersTestmonial";
import Footer from "../components/Footer";

function Index() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/curriculum">
            <GroupSession />
            <CurriculumTabs />
            <CurriculumTabsTwo />
            <GroupSessionTwo />
            <ColumnOne />
            <ColumnTwo />
            <ColumnThree />
          </Route>
          <Route path="/about">
            <AboutHero />
            <AboutService />
            <AboutJoin />
          </Route>
          <Route path="/course-page">
            <Course />
            <CourseLearning />
            <CoursePrecent />
            <CourseService />
          </Route>
          <Route path="/our-teachers">
            <TeacherHero />
            <TeachersTeam />
            <TeacherCount />
            <TeacherTestmonial />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* <div className="popup">
        <FreeTrail />
        <Signup />
      </div> */}
      <div className="teacher"></div>
    </>
  );
}

export default Index;

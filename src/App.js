import React from "react";
import "./App.css";
import { AddCourse, CourseList, Login, EditCourse,TypeList } from "./pages";
import courseList from "./Fixtures/courseList.json";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Constants from "./constants/Route";

const { ROUTES } = Constants;

const ProtectedCourses = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} replace={true} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [courses, setCourses] = React.useState(courseList.data);
  console.log(courses);

  return (
    <div className="App">
      <Routes>
        <Route
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
          path={ROUTES.LOGIN}
        />
        <Route element={<ProtectedCourses isLoggedIn={isLoggedIn} />}>
          <Route
            element={<AddCourse setCourses={setCourses} />}
            path={ROUTES.ADD_COURSE}
          />
          <Route
            element={<CourseList courses={courses} />}
            path={"/"}
          />
          <Route element={<EditCourse/>} path={ROUTES.EDIT_COURSE}/>
          <Route element={<TypeList/>} path={ROUTES.TYPE_LIST}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

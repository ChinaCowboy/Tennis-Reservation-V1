import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Ball } from "../Ball";
import CalendarPage from "../calendar/CalendarPage";

// const CalendarPage = lazy(() =>
//   import("../calendar/CalendarPage").then((m) => ({ default: m.CalendarPage }))
// );

const MyRouterSwitch = () => {
  return (
    <Suspense fallback={<Ball visible large centered spin />}>
      <Routes>
        <Route path="/" element={<CalendarPage />}></Route>
      </Routes>
    </Suspense>
  );
};

export default MyRouterSwitch;

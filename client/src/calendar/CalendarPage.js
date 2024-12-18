import React, { useState } from "react";
import styles from "./CalendarPage.module.css";
import DatePicker from "./DatePicker";
import WeekPicker from "./WeekPicker";
const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const today = new Date();
  return (
    <div className={styles.wrapper}>
      <WeekPicker
        date={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      {/* <ReservationCalendar selectedDate={selectedDate || today} /> */}
    </div>
  );
};

export default CalendarPage;

import React, { useState } from "react";
import styles from "./WeekPicker.module.css";
import { DatePicker } from "./DatePicker";
import { Button } from "antd";

const WeekPicker = ({ date, onChange }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleThisWeekButtonClick = () => {};
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const handleChange = (date) => {
    onChange(date);
    setOpen(false);
  };
  return (
    <div ckassName={styles.wrapper}>
      <div className={styles.middlePicker}>
        <DatePicker
          className={styles.picker}
          picker="week"
          open={open}
          inputReadOnly
          allowClear={false}
          bordered={true}
          onClick={handleClick}
          onOpenChange={handleOpenChange}
          onChange={handleChange}
          format={"[Week] w (YYYY)"}
          renderExtraFooter={() => (
            <Button onClick={handleThisWeekButtonClick} type="link">
              Click this
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export default WeekPicker;

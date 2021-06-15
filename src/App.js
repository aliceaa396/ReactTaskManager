import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

const App = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shop",
      day: "Feb 8th at 2:30pm",
      reminder: true,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      {/* Prop is title */}
      <Header title="Hello" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;

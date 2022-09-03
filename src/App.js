import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AdTask";
import InfoBox from "./components/InfoBox";
import Fotter from "./components/Fotter";
import About from "./components/About";
function App() {
  const [showForm, setshowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor Appointment",
      day: "5th/feb/2021",
      reminder: true,
    },
    {
      id: 2,
      text: "lawer Appointment",
      day: "5th/feb/2021",
      reminder: true,
    },
    {
      id: 3,
      text: "PSPK BIRTHDAY",
      day: "2th/sep/2022",
      reminder: false,
    },
    {
      id: 4,
      text: "Doctor Appointment",
      day: "5th/feb/2021",
      reminder: false,
    },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((value) => value.id !== id));
  };

  const toogleReminder = (id) => {
    setTasks(
      tasks.map((value) =>
        value.id === id ? { ...value, reminder: !value.reminder } : value
      )
    );
  };

  const onAdd = (value) => {
    const id = Math.floor(Math.random() * 10000 + 1);

    const newTask = { id, ...value };
    setTasks([newTask, ...tasks]);
  };

  return (
    <Router>
      <div className="container">
        <Header handleShow={() => setshowForm(!showForm)} changes={showForm} />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showForm ? <AddTask onAdd={onAdd} /> : ""}
              <InfoBox tasks={tasks} />
              {tasks.length > 0 ? (
                <Tasks
                  handleDelete={handleDelete}
                  tasks={tasks}
                  toogleReminder={toogleReminder}
                />
              ) : (
                <h1
                  style={{
                    margin: "30px",
                    fontSize: "50px",
                  }}
                >
                  {" "}
                  NO Tasks To DO......!
                </h1>
              )}
            </>
          )}
        />

        <Route path="/about" component={About} />
        <Fotter />
      </div>
    </Router>
  );
}

export default App;

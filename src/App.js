import React, { useEffect, useReducer, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { TaskContext } from "./components/Context";

function App() {
  const [newTask, addNewTask] = useState(false);

  useEffect(() => {
    document.title = "The Face React Task App";
  });

  const reducer = (state, action) => {
    if (action.type === "EMPTY") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Task cannot be empty",
      };
    }

    if (action.type === "ADDED") {
      console.log(state);
      const tasksUpdate = [...state.taskslog, action.payload];
      return {
        //  [...state, action.payload],
        // ...state,
        taskslog: tasksUpdate,
        isModalOpen: true,
        modalContent: "Task added",
      };
    }

    if (action.type === "CLOSE") {
      return {
        ...state,
        isModalOpen: false,
      };
    }

    if (action.type === "REMOVE") {
      // const newTasks = action.payload;
      return {
        ...state,

        taskslog: state.taskslog.filter((task) => task.id !== action.payload),
      };
    }
  };

  const initialstate = {
    newtask: "",
    taskslog: [],
    // taskslist: taskslist,
    isModalOpen: false,
  };

  return (
    <TaskContext.Provider value={useReducer(reducer, initialstate)}>
      <div className="w-11/12 sm:w-4/5 lg:w-3/5  rounded border-2 border-black p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-bold text-blue-600">To-do App</h2>
          <button
            onClick={() => addNewTask(!newTask)}
            className="text-white bg-green-500 px-4 py-2 rounded"
          >
            {newTask ? "Close" : "Add To-do"}
          </button>
        </div>
        {newTask && <AddTask />}
        <div className="border-2 rounded border-black p-4 mt-6">
          <Tasks />
        </div>{" "}
        <p className="text-sm text-center text-gray-400 mt-4 italic">
          &copy; 2022, All rights reserved. The Face To-do App
        </p>
      </div>
    </TaskContext.Provider>
  );
}

export default App;

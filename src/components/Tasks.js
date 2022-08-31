import React, { useContext } from "react";

import { TaskContext } from "./Context";

function Tasks() {
  const [state, dispatch] = useContext(TaskContext);
  const { taskslog } = state;

  const removeTask = (e) => {
    const newTaskID = e.target.id;

    dispatch({ type: "REMOVE", payload: newTaskID });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">
        {state.taskslog.length > 0
          ? `My To-dos (${taskslog.length})`
          : "No to-dos yet"}
      </h2>{" "}
      {taskslog.map((item, index) => (
        <div
          key={index}
          className="bg-black flex justify-between items-center p-2 my-2"
        >
          <div className="flex items-center">
            {" "}
            <div className="bg-white text-2xl p-2 w-16 text-center">
              {index + 1}
            </div>
            <div className="px-4">
              <h3 className="text-white text-bold text-xl"> {item.title}</h3>
              <p className="italic text-gray-400 text-sm">
                Added : {item.date}
              </p>
            </div>
          </div>{" "}
          <button
            id={item.id}
            onClick={removeTask}
            className="text-white bg-red-600 p-2"
          >
            Delete
          </button>
        </div>
      ))}{" "}
    </div>
  );
}

export default Tasks;

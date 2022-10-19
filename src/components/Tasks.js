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
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        {state.taskslog.length > 0
          ? `My To-dos (${taskslog.length})`
          : "No to-dos yet"}
      </h2>{" "}
      {taskslog.map((item, index) => (
        <div
          key={index}
          className="bg-black w-full flex justify-between rounded items-center p-2 my-2"
        >
          <div className="flex items-center">
            {" "}
            <div className="sm:text-xl bg-white rounded text-base text-bold p-2 w-12 text-center">
              {index + 1}
            </div>
            <div className="px-2">
              <h3 className="text-base md:text-lg lg:text-xl text-white text-bold">
                {" "}
                {item.title}
              </h3>
              <p className="text-xs italic text-gray-400 sm:text-md">
                Added : {item.date}
              </p>
            </div>
          </div>{" "}
          <button
            id={item.id}
            onClick={removeTask}
            className="text-white text-sm rounded bg-red-600 p-2"
          >
            Delete
          </button>
        </div>
      ))}{" "}
    </div>
  );
}

export default Tasks;

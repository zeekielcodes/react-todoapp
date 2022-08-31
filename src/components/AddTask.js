import React, { useContext, useEffect, useState } from "react";

import { TaskContext } from "./Context";

export default function AddTask() {
  const [newtask, addnew] = useState("");
  const [state, dispatch] = useContext(TaskContext);

  const Modal = () => {
    useEffect(() => {
      setTimeout(() => {
        closeModal();
      }, 2000);
    });
    return (
      <span className="bg-blue-600 text-white px-4 py-2">
        {state.modalContent}
      </span>
    );
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE" });
  };

  const processTask = (e) => {
    e.preventDefault();
    if (!newtask) {
      dispatch({ type: "EMPTY" });
    } else {
      const updatedTask = {
        id: new Date().getTime().toString(),
        title: newtask,
        date: new Date().toDateString(),
      };
      dispatch({ type: "ADDED", payload: updatedTask });
      addnew("");
    }
  };

  return (
    <form
      onSubmit={processTask}
      className="border-black border-2 p-4 text-center mt-4"
    >
      {state.isModalOpen && <Modal />}
      <br />
      <input
        type="text"
        value={newtask}
        placeholder="Enter new to-do..."
        onChange={(e) => addnew(e.target.value)}
        className=" border-black pl-2 border-2 mb-2 mt-4 w-3/5 h-10"
      />
      <br />
      <button className="px-6 py-2 bg-blue-500 rounded hover:bg-blue-400 text-white">
        Add
      </button>
    </form>
  );
}

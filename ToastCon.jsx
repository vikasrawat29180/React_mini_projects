import React, { useState } from "react";
import "./ToastCon.css";
const ToastCon = () => {
  const [Toast, setToast] = useState([]);
  const handleClose = (id) => {
    setToast((PrevToast) => {
      const filteredArr = PrevToast.filter((toast) => {
        return toast.id !== id;
      });

      return filteredArr;
    });
  };
  const handleAdd = (message, type) => {
    const id = new Date().getTime();
    const newToasts = [...Toast, { id, message, type }];
    setToast(newToasts);

    setTimeout(() => {
      handleClose(id);
    }, 5000);
  };
  return (
    <div className="Container">
      <div className="Toast-Container">
        {Toast.map(({ id, message, type }) => {
          return (
            <div key={id} className={`toast ${type}`}>
              {message}
              <span
                onClick={() => {
                  handleClose(id);
                }}
              >
                X
              </span>
            </div>
          );
        })}
      </div>

      <div className="Btn-Container">
        <button onClick={() => handleAdd("Success", "success")}>
          Success Toast
        </button>
        <button onClick={() => handleAdd("Info", "info")}>Info Toast</button>
        <button onClick={() => handleAdd("Warning", "warning")}>
          {" "}
          Warning Toast
        </button>
        <button onClick={() => handleAdd("Error", "error")}>Error Toast</button>
      </div>
    </div>
  );
};

export default ToastCon;

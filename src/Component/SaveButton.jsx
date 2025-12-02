// SaveButton.jsx
import React from "react";

const SaveButton = ({ title = "Save", onClick, disabled = false }) => {
  return (
    <>
      <style>{`
        .save-btn {
          width: 300px;
          height: 120px;
          background-color: ${disabled ? '#CCCCCC' : '#FED354'};
          border: 5px solid ${disabled ? '#999' : '#444'};
          border-radius: 10px;
          color: ${disabled ? '#666' : '#fff'};
          font-size: 40px;
          font-weight: 500;
          font-family: 'Kanit', sans-serif;
          cursor: ${disabled ? 'not-allowed' : 'pointer'};
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 120px;
          opacity: ${disabled ? 0.7 : 1};
        }

        .save-btn:hover:not(:disabled) {
          transform: ${disabled ? 'none' : 'scale(1.05)'};
        }

        /* 📱 Tablets */
        @media (max-width: 900px) {
          .save-btn {
            width: 260px;
            height: 100px;
            font-size: 34px;
            border-width: 5px;
          }
        }

        /* 📱 Celulares medianos */
        @media (max-width: 600px) {
          .save-btn {
            width: 220px;
            height: 85px;
            font-size: 28px;
            border-width: 5px;
          }
        }

        /* 📱 Celulares pequeños */
        @media (max-width: 400px) {
          .save-btn {
            width: 180px;
            height: 70px;
            font-size: 24px;
            border-width: 4px;
          }
        }
      `}</style>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button 
          className="save-btn" 
          onClick={onClick}
          disabled={disabled}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default SaveButton;
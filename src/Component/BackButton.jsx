import React from "react";

const BackButton = ({ title = "Back", onClick }) => {
  return (
    <>
      <style>{`
        .back-btn {
          width: 300px;     
          height: 60px;     
          background-color: #9b5c03ff;
          border: 6px solid #d78005ff;  
          border-radius: 10px;
          color: #fff;
          font-size: 24px;   
          font-weight: 500;
          font-family: 'Kanit', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .back-btn:hover {
          transform: scale(1.05);
        }

        /* 📱 Tablets */
        @media (max-width: 900px) {
          .back-btn {
            width: 130px;
            height: 52px;
            font-size: 22px;
            border-width: 5px;
          }
        }

        /* 📱 Celulares medianos */
        @media (max-width: 600px) {
          .back-btn {
            width: 110px;
            height: 45px;
            font-size: 19px;
            border-width: 5px;
          }
        }

        /* 📱 Celulares pequeños */
        @media (max-width: 400px) {
          .back-btn {
            width: 90px;
            height: 38px;
            font-size: 16px;
            border-width: 4px;
          }
        }
      `}</style>

      <button className="back-btn" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default BackButton;

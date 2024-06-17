import React from "react";
import style from "./RecentTransactions.module.css";
import { PiPizza, PiGift } from "react-icons/pi";
import { BsSuitcase2 } from "react-icons/bs";

const RecentTransactions = ({ expenseDetailList, setExpenseDetailList }) => {
  console.log(expenseDetailList);
  return (
    <div className={style.mainContainer}>
      <h1>Recent Transactions</h1>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.subContainer}>
            <div className={style.leftSubContainer}>
              <div>
                {expenseDetailList && expenseDetailList.category === "food" ? (
                  <PiPizza />
                ) : expenseDetailList &&
                  expenseDetailList.category === "entertainment" ? (
                  <PiGift />
                ) : (
                  <BsSuitcase2 />
                )}
              </div>
              <div>
                <p>{expenseDetailList && expenseDetailList.title}</p>
                <p>{expenseDetailList && expenseDetailList.date}</p>
              </div>
            </div>
            <div className={style.rightSubContainer}>
              <div>
                <p>{expenseDetailList && expenseDetailList.addExpense}</p>
              </div>
              <div>
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
          </div>
          <div className={style.line}></div>
        </div>
        <div className={style.buttons}>
          <button>left</button>
          <button>1</button>
          <button>right</button>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;

import React from "react";
import style from "./BottomContainer.module.css";
import RecentTransactions from "./recentTransactions/RecentTransactions";
import TopExpenses from "./topExpenses/TopExpenses";

const BottomContainer = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.leftContainer}>
          <p>Recent Transactions</p>
          <div>
            <RecentTransactions />
          </div>
        </div>
        <div className={style.rightContainer}>
          <p>Top Expenses</p>
          <div>
            <TopExpenses />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;

import React from "react";
import style from "./BottomContainer.module.css";
import RecentTransactions from "./recentTransactions/RecentTransactions";
import TopExpenses from "./topExpenses/TopExpenses";

const BottomContainer = ({expenseDetailList, setExpenseDetailList}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.leftContainer}>
          <RecentTransactions expenseDetailList={expenseDetailList} setExpenseDetailList={setExpenseDetailList} />
        </div>
        <div className={style.rightContainer}>
          <TopExpenses />
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;

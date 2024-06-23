import React from "react";
import style from "./BottomContainer.module.css";
import RecentTransactions from "./recentTransactions/RecentTransactions";
import TopExpenses from "./topExpenses/TopExpenses";

const BottomContainer = ({
  handleOpenEditExpenseModal,
  handleDeleteExpense,
  expenseDetailList,
  data,
}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.leftContainer}>
          <RecentTransactions
            handleOpenEditExpenseModal={handleOpenEditExpenseModal}
            handleDeleteExpense={handleDeleteExpense}
            expenseDetailList={expenseDetailList}
          />
        </div>
        <div className={style.rightContainer}>
          <TopExpenses data={data} />
        </div>
      </div>
    </div>
  );
};

export default BottomContainer;

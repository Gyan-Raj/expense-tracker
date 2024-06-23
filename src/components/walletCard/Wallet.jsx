import React from "react";
import Button from "../button/Button";
import style from "./Wallet.module.css";

const Wallet = ({
  walletBalance,
  totalExpense,
  balance,
  handleOpenAddBalanceModal,
  handleOpenAddExpenseModal,
}) => {
  return (
    <div className={style.container}>
      <h1 className={style.walletText}>
        {balance ? (
          <>
            Wallet Balance:{" "}
            <span className={style.totalBalance}>₹{walletBalance}</span>
          </>
        ) : (
          <>
            Expenses:{" "}
            <span className={style.totalExpense}>₹{totalExpense}</span>
          </>
        )}
      </h1>
      {balance ? (
        <Button
          onClick={() => handleOpenAddBalanceModal()}
          children="+ Add Income"
          style="addBalanceGreen"
          balance={true}
        />
      ) : (
        <Button
          onClick={() => handleOpenAddExpenseModal()}
          children="+ Add Expense"
          style="addExpenseOrange"
          balance={false}
        />
      )}
    </div>
  );
};

export default Wallet;

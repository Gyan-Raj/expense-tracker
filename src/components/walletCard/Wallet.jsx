import React from "react";
import Button from "../button/Button";
import style from "./Wallet.module.css";

const Wallet = ({
  amount,
  balance,
  handleOpenBalanceModal,
  handleOpenExpenseModal,
}) => {
  console.log(amount);
  console.log(balance);
  return (
    <div className={style.container}>
      <h1 className={style.walletText}>
        {balance ? "Wallet Balance: " : "Expenses: "}
        <span className={balance ? style.totalBalance : style.totalExpense}>
          ₹{amount}
        </span>
      </h1>
      {balance ? (
        <Button
          onClick={handleOpenBalanceModal}
          // handleCloseBalanceModal={handleCloseBalanceModal}
          children="+ Add Income"
          style="addBalanceGreen"
          balance
        />
      ) : (
        <Button
          onClick={handleOpenExpenseModal}
          children="+ Add Expense"
          style="addExpenseOrange"
          balance
        />
      )}
    </div>
  );
};

export default Wallet;

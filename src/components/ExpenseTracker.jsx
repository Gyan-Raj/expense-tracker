import React, { useState } from "react";
import Modal from "./modal/Modal.jsx";
import Wallet from "./walletCard/Wallet.jsx";
import style from "./ExpenseTracker.module.css";
import TopContainer from "./topContainer/TopContainer.jsx";
import BottomContainer from "./bottomContainer/BottomContainer.jsx";
import AddBalanceCard from "./modalCards/balanceCard/AddBalanceCard.jsx";
import ExpenseCard from "./modalCards/expenseCard/ExpenseCard.jsx";

const ExpenseTracker = () => {
  let [isBalanceOpen, setIsBalanceOpen] = useState(false);
  let [isExpenseOpen, setIsExpenseOpen] = useState(false);
  let [isAddExpenseCard, setIsAddExpenseCard] = useState(true);
  const [walletBalance, setWalletBalance] = useState(5000);
  const [totalExpense, setTotalExpense] = useState(0);

  let handleOpenBalanceModal = () => {
    setIsBalanceOpen(true);
  };
  let handleCloseBalanceModal = () => {
    setIsBalanceOpen(false);
  };
  let handleOpenExpenseModal = () => {
    setIsExpenseOpen(true);
  };
  let handleCloseExpenseModal = () => {
    setIsExpenseOpen(false);
  };
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Expense Tracker</h1>
      </div>
      <div>
        <TopContainer
          handleOpenBalanceModal={handleOpenBalanceModal}
          handleCloseBalanceModal={handleCloseBalanceModal}
          handleOpenExpenseModal={handleOpenExpenseModal}
          handleCloseExpenseModal={handleCloseExpenseModal}
          walletBalance={walletBalance}
          totalExpense={totalExpense}
        />
      </div>
      <div>
        <BottomContainer />
      </div>
      <Modal isOpen={isBalanceOpen} setIsOpen={setIsBalanceOpen}>
        <AddBalanceCard
          handleCloseBalanceModal={handleCloseBalanceModal}
          setIsBalanceOpen
        />
      </Modal>
      <Modal isOpen={isExpenseOpen} setIsOpen={setIsExpenseOpen}>
        <ExpenseCard
          handleCloseExpenseModal={handleCloseExpenseModal}
          text={isAddExpenseCard ? "Add Expenses" : "Edit Expenses"}
        />
      </Modal>
    </div>
  );
};

export default ExpenseTracker;
/**
 * 
      /* <button onClick={() => setIsOpen(true)}>click</button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        Hi
        <button onClick={() => setIsOpen(false)}>click</button>
      </Modal>
      <h1>Helo</h1> 
 */

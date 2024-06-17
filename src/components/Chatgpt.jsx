import React, { useState } from "react";
import Modal from "./modal/Modal.jsx";
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
  const [addBalance, setAddBalance] = useState("");
  const [expenseDetail, setExpenseDetail] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const handleOpenBalanceModal = () => {
    setIsBalanceOpen(true);
  };

  const handleCloseBalanceModal = () => {
    setIsBalanceOpen(false);
  };

  const handleOpenExpenseModal = () => {
    setIsExpenseOpen(true);
  };

  const handleCloseExpenseModal = () => {
    setIsExpenseOpen(false);
  };

  const handleAddBalance = (e) => {
    e.preventDefault();
    setWalletBalance(Number(walletBalance) + Number(addBalance));
    setAddBalance(""); // Clear the input field after adding the balance
  };

  const handleAddExpense = () => {
    const expenseAmount = Number(expenseDetail.price);

    if (walletBalance >= expenseAmount) {
      setWalletBalance(walletBalance - expenseAmount);
      setTotalExpense(totalExpense + expenseAmount);
      setExpenseDetail({
        title: "",
        price: "",
        category: "",
        date: "",
      }); // Clear the input fields after adding the expense
      setIsExpenseOpen(false); // Close the modal after adding the expense
    } else {
      alert("Insufficient balance");
    }
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
          addBalance={addBalance}
          handleAddBalance={handleAddBalance}
          setAddBalance={setAddBalance}
        />
      </Modal>
      <Modal isOpen={isExpenseOpen} setIsOpen={setIsExpenseOpen}>
        <ExpenseCard
          handleCloseExpenseModal={handleCloseExpenseModal}
          text={isAddExpenseCard ? "Add Expenses" : "Edit Expenses"}
          expenseDetail={expenseDetail}
          setExpenseDetail={setExpenseDetail}
          handleAddExpense={handleAddExpense}
        />
      </Modal>
    </div>
  );
};

export default ExpenseTracker;

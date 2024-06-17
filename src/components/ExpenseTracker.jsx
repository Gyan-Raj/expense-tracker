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
    addExpense: "",
    category: "",
    date: "",
  });
  const [expenseDetailList, setExpenseDetailList] = useState([]);

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
  let handleAddBalance = (e) => {
    e.preventDefault();
    setWalletBalance(Number(walletBalance) + Number(addBalance));
  };
  let handleAddExpense = () => {
    // let { name, value } = e.target;
    let amount = Number(expenseDetail.addExpense);
    if (walletBalance >= amount) {
      setWalletBalance(walletBalance - amount);
      setTotalExpense(totalExpense + amount);

      // setExpenseDetailList(expenseDetail);
      setExpenseDetail({
        title: "",
        addExpense: "",
        category: "",
        date: "",
      });
      console.log(expenseDetail);
      setExpenseDetailList([...expenseDetailList, { expenseDetail }]);
      // console.log(expenseDetailList);
      setIsExpenseOpen(false);
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
        <BottomContainer
          expenseDetailList={expenseDetailList}
          setExpenseDetailList={setExpenseDetailList}
        />
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
          // addExpense={addExpense}
          handleAddExpense={handleAddExpense}
          // title={title}
          // price={addExpense}
          // category={category}
          // date={date}
          expenseDetail={expenseDetail}
          setExpenseDetail={setExpenseDetail}
        />
      </Modal>
    </div>
  );
};

export default ExpenseTracker;

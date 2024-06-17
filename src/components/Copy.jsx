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
  // const [expenseDetailList, setExpenseDetailList] = useState([]);

  // let { title, addExpense, category, date } = expenseDetail;

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
  /**
   * e is removed
   */
  let handleAddExpense = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    // if (Number(walletBalance) >= Number(addExpense)) {
    setWalletBalance(Number(walletBalance) - Number(addExpense));
    setTotalExpense(Number(totalExpense) + Number(addExpense));
    // setExpenseDetail(expenseDetail, { [name]: value });
    setExpenseDetailList(expenseDetail);
    setExpenseDetail({
      title: "",
      price: "",
      category: "",
      date: "",
    });
    console.log(expenseDetail);
    console.log(expenseDetailList);
    setIsExpenseOpen(false);
    // } else {
    //   alert("Insufficient balance");
    // }
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

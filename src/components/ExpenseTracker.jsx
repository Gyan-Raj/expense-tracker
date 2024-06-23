import React, { useEffect, useState } from "react";
import Modal from "./modal/Modal.jsx";
import style from "./ExpenseTracker.module.css";
import TopContainer from "./topContainer/TopContainer.jsx";
import BottomContainer from "./bottomContainer/BottomContainer.jsx";
import AddBalanceCard from "./modalCards/balanceCard/AddBalanceCard.jsx";
import ExpenseCard from "./modalCards/expenseCard/ExpenseCard.jsx";
import { v4 as uuidv4 } from "uuid";
import { enqueueSnackbar } from "notistack";

const ExpenseTracker = () => {
  const [isAddBalanceModalOpen, setIsAddBalanceModalOpen] = useState(false);
  const [isAddExpenseModalOpen, setIsAddExpenseModalOpen] = useState(false);
  const [isEditExpenseModalOpen, setIsEditExpenseModalOpen] = useState(false);

  const [walletBalance, setWalletBalance] = useState("");
  const [totalExpense, setTotalExpense] = useState("");

  const [addBalance, setAddBalance] = useState("");

  const [title, setTitle] = useState("");
  const [addExpense, setAddExpense] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [expenseDetailList, setExpenseDetailList] = useState([]);

  const [editId, setEditId] = useState("");

  const handleOpenAddBalanceModal = () => {
    setIsAddBalanceModalOpen(true);
  };
  const handleCloseAddBalanceModal = () => {
    setIsAddBalanceModalOpen(false);
  };
  const handleOpenAddExpenseModal = () => {
    setIsAddExpenseModalOpen(true);
  };
  const handleCloseAddExpenseModal = () => {
    setIsAddExpenseModalOpen(false);
  };
  const handleOpenEditExpenseModal = (id) => {
    setIsEditExpenseModalOpen(true);
    let selectedEntry = expenseDetailList.find((item) => item.id === id);
    setEditId(id);
    setTitle(selectedEntry.title);
    setAddExpense(selectedEntry.addExpense);
    setCategory(selectedEntry.category);
    setDate(selectedEntry.date);
  };
  const handleCloseEditExpenseModal = () => {
    setIsEditExpenseModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "income":
        setAddBalance(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "addExpense":
        setAddExpense(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        break;
    }
  };

  const handleAddBalance = (e) => {
    e.preventDefault();
    if (addBalance !== null) {
      setWalletBalance(Number(walletBalance) + Number(addBalance));
      setIsAddBalanceModalOpen(false);
    }
  };

  // let handleAddExpense = (e) => {
  //   e.preventDefault();
  //   if (
  //     title &&
  //     addExpense &&
  //     category &&
  //     date &&
  //     addExpense >= walletBalance
  //   ) {
  //     setExpenseDetailList((prevList) => [
  //       ...prevList,
  //       {
  //         title: title,
  //         addExpense: addExpense,
  //         category: category,
  //         date: date,
  //         id: uuidv4(),
  //       },
  //     ]);
  //     setTotalExpense((prevTotal) => prevTotal + Number(addExpense));
  //     setWalletBalance((prevBalance) => prevBalance - addExpense);
  //     setIsAddExpenseModalOpen(false);
  //     setTitle("");
  //     setAddExpense("");
  //     setCategory("");
  //     setDate("");
  //   }
  //   console.log(expenseDetailList);
  // };

  let handleAddExpense = (e) => {
    e.preventDefault();
    if (Number(addExpense) <= walletBalance) {
      setExpenseDetailList((prevList) => [
        ...prevList,
        {
          title: title,
          addExpense: addExpense,
          category: category,
          date: date,
          id: uuidv4(),
        },
      ]);
      setTotalExpense((prevTotal) => prevTotal + Number(addExpense));
      setWalletBalance((prevBalance) => prevBalance - Number(addExpense));
      setIsAddExpenseModalOpen(false);
      setTitle("");
      setAddExpense("");
      setCategory("");
      setDate("");
    } else {
      enqueueSnackbar("Cannot spend more than the available wallet balance");
    }
    console.log(expenseDetailList);
  };

  const handleDeleteExpense = (id) => {
    const itemToDelete = expenseDetailList.find((item) => item.id === id);
    setWalletBalance(walletBalance + Number(itemToDelete.addExpense));
    setTotalExpense(totalExpense - Number(itemToDelete.addExpense));
    setExpenseDetailList(expenseDetailList.filter((item) => item.id !== id));
  };

  // const handleEditExpense = async () => {
  //   try {
  //     const itemToBeEdited = expenseDetailList.find(
  //       (item) => item.id === editId
  //     );
  //     setTitle(itemToBeEdited.title);
  //     setAddExpense(itemToBeEdited.addExpense);
  //     setCategory(itemToBeEdited.category);
  //     setDate(itemToBeEdited.date);

  //     setWalletBalance(
  //       (prevBalance) => prevBalance + Number(itemToBeEdited.addExpense)
  //     );

  //     setTotalExpense(
  //       (prevBalance) => prevBalance - Number(itemToBeEdited.addExpense)
  //     );

  //     setExpenseDetailList(
  //       expenseDetailList.filter((item) => item.id !== editId)
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleEditExpense = async (e) => {
    e.preventDefault();

    const itemToBeEdited = expenseDetailList.find((item) => item.id === editId);
    const newExpenseAmount = Number(addExpense);
    const oldExpenseAmount = Number(itemToBeEdited.addExpense);
    const difference = newExpenseAmount - oldExpenseAmount;

    if (walletBalance >= difference) {
      const updatedItem = {
        ...itemToBeEdited,
        title,
        addExpense,
        category,
        date,
      };

      setExpenseDetailList((prevList) =>
        prevList.map((item) => (item.id === editId ? updatedItem : item))
      );

      setWalletBalance((prevBalance) => prevBalance - difference);
      setTotalExpense((prevTotal) => prevTotal + difference);

      setIsEditExpenseModalOpen(false);
      setTitle("");
      setAddExpense("");
      setCategory("");
      setDate("");
    } else {
      enqueueSnackbar("Cannot spend more than the available wallet balance");
    }
  };

  useEffect(() => {
    const localBalance = localStorage.getItem("balance");

    if (localBalance) {
      setWalletBalance(Number(localBalance));
    } else {
      setWalletBalance(5000);
      localStorage.setItem("balance", 5000);
    }
    const items = JSON.parse(localStorage.getItem("expenseList"));

    setExpenseDetailList(items || []);
  }, []);

  const [categorySpends, setCategorySpends] = useState({
    food: 0,
    entertainment: 0,
    travel: 0,
  });

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(expenseDetailList));

    if (expenseDetailList.length > 0) {
      setTotalExpense(
        expenseDetailList.reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.addExpense),
          0
        )
      );
    } else {
      setTotalExpense(0);
    }

    let foodSpends = 0;
    let entertainmentSpends = 0;
    let travelSpends = 0;

    expenseDetailList.forEach((item) => {
      if (item.category === "food") {
        foodSpends += Number(item.addExpense);
      } else if (item.category === "entertainment") {
        entertainmentSpends += Number(item.addExpense);
      } else if (item.category === "travel") {
        travelSpends += Number(item.addExpense);
      }
    });

    setCategorySpends({
      food: foodSpends,
      travel: travelSpends,
      entertainment: entertainmentSpends,
    });
  }, [expenseDetailList]);

  useEffect(() => {
    localStorage.setItem("balance", walletBalance);
  }, [walletBalance]);

  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>Expense Tracker</h1>
      </div>
      <div className={style.topContainer}>
        <TopContainer
          walletBalance={walletBalance}
          totalExpense={totalExpense}
          handleOpenAddBalanceModal={handleOpenAddBalanceModal}
          handleOpenAddExpenseModal={handleOpenAddExpenseModal}
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>
      <div className={style.bottomContainer}>
        <BottomContainer
          handleOpenEditExpenseModal={handleOpenEditExpenseModal}
          handleDeleteExpense={handleDeleteExpense}
          expenseDetailList={expenseDetailList}
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>
      <Modal
        isOpen={isAddBalanceModalOpen}
        setIsOpen={setIsAddBalanceModalOpen}
      >
        <AddBalanceCard
          handleChange={handleChange}
          handleCloseAddBalanceModal={handleCloseAddBalanceModal}
          handleAddBalance={handleAddBalance}
          addBalance={addBalance}
        />
      </Modal>
      <Modal
        isOpen={isAddExpenseModalOpen}
        setIsOpen={setIsAddExpenseModalOpen}
      >
        <ExpenseCard
          isAddExpenseModalOpen={true}
          handleCloseAddExpenseModal={handleCloseAddExpenseModal}
          handleAddExpense={handleAddExpense}
          handleChange={handleChange}
          title={title}
          addExpense={addExpense}
          category={category}
          date={date}
          setExpenseDetailList={setExpenseDetailList}
        />
      </Modal>
      <Modal
        isOpen={isEditExpenseModalOpen}
        setIsOpen={setIsEditExpenseModalOpen}
      >
        <ExpenseCard
          isEditExpenseModalOpen={true}
          handleCloseEditExpenseModal={handleCloseEditExpenseModal}
          handleEditExpense={handleEditExpense}
          handleChange={handleChange}
          title={title}
          addExpense={addExpense}
          category={category}
          date={date}
        />
      </Modal>
    </div>
  );
};

export default ExpenseTracker;

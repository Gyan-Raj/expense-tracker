import React, { useContext, useState } from "react";
import style from "./ExpenseCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";

const ExpenseCard = ({ handleCloseExpenseModal, text }) => {
  let [addExpense, setAddExpense] = useState({
    title: "",
    category: "",
    price: 0,
    date: "",
  });
  let { title, category, price, date } = addExpense;
  // console.log(funcAddExpense);
  // console.log(state);
  // console.log(state.addExpense);
  // console.log(state.addExpense.title);
  // console.log(state.addExpense.category);
  // console.log(state.addExpense.price);
  // console.log(state.addExpense.date);
  let handleChange = (e) => {
    let { name, value } = e.target;
    setAddExpense((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    // console.log(addExpense);
  };
  //   let handleSubmit = (e) => {
  //     e.preventDefault();
  //     // console.log(addExpense);
  //     funcAddExpense(addExpense);
  //     setAddExpense({ title: "", category: "", price: "", date: "" });
  //     console.log(state);
  //   };
  //handleCancel by CG
  //   let handleCancel = (e) => {
  //     setAddExpense({ title: "", category: "", price: "", date: "" });
  //   };

  let handleSubmit = () => {};
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form action="" className={style.form} onSubmit={handleSubmit}>
          <div className={style.topContainer}>
            <h1>{text}</h1>
          </div>
          <div className={style.bottomContainer}>
            <table className={style.table}>
              <tbody>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <Input
                      type="text"
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={style.td}>
                    <Input
                      type="text"
                      placeholder="Price"
                      name="price"
                      value={price}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <select
                      name="category"
                      id="category"
                      className={style.select}
                      value={category}
                      onChange={handleChange}
                      required
                    >
                      <option value=""></option>
                      <option value="food">Food</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="travel">Travel</option>
                    </select>
                  </td>
                  <td className={style.td}>
                    <Input
                      type="date"
                      placeholder="dd/mm/yyyy"
                      name="date"
                      value={date}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <Button
                      type="button"
                      //   onClick={handleOpenModal}
                      children="Add Expense"
                      style="addButtonYellow"
                    />
                  </td>
                  <td className={style.td}>
                    <Button
                      type="button"
                      onClick={handleCloseExpenseModal}
                      children="Cancel"
                      style="cancelButton"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseCard;

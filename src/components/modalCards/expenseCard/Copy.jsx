import React, { useContext, useState } from "react";
import style from "./ExpenseCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";

const ExpenseCard = ({
  handleCloseExpenseModal,
  text,
  handleAddExpense,
  // title,
  // price,
  // category,
  // date,
  expenseDetail,
  setExpenseDetail,
}) => {
  let handleChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);
    setExpenseDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };
  /**
   * here, e is required
   * let handleSubmit = (e) => {
    e.preventDefault();
    handleAddExpense();
  };
   */
  let handleSubmit = () => {
    // e.preventDefault();
    handleAddExpense();
  };
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
                      value={expenseDetail.title}
                      onChange={handleChange}
                    />
                  </td>
                  <td className={style.td}>
                    {/**
                     * name and value should be same, i.e.,
                    either:
                        <Input
                        type="text"
                        placeholder="Price"
                        name="addExpense"
                        value={expenseDetail.addExpense}
                        onChange={handleAddExpense}

                      or:
                        we should have "price" attribute (instead of "addExpense") in expenseDetail list which is passed from parent (ExpenseTracker.jsx), and then we can use
                        <Input
                        type="text"
                        placeholder="Price"
                        name="price"
                        value={expenseDetail.price}
                        onChange={handleAddExpense}
                    />
                    />
                     */}
                    <Input
                      type="text"
                      placeholder="Price"
                      name="price"
                      value={expenseDetail.price}
                      onChange={handleAddExpense}
                    />
                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <select
                      name="category"
                      id="category"
                      className={style.select}
                      value={expenseDetail.category}
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
                      value={expenseDetail.date}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <Button
                      type="button"
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

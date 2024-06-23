import React from "react";
import style from "./ExpenseCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";

const ExpenseCard = ({
  isAddExpenseModalOpen,
  handleCloseAddExpenseModal,
  handleCloseEditExpenseModal,
  handleAddExpense,
  handleEditExpense,
  handleChange,
  title,
  addExpense,
  category,
  date,
}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form
          action=""
          className={style.form}
          onSubmit={
            isAddExpenseModalOpen ? handleAddExpense : handleEditExpense
          }
        >
          <div className={style.topContainer}>
            <h1>{isAddExpenseModalOpen ? "Add Expenses" : "Edit Expenses"}</h1>
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
                      styles="input"
                    />
                  </td>
                  <td className={style.td}>
                    <Input
                      type="text"
                      placeholder="Price"
                      name="addExpense"
                      value={addExpense}
                      onChange={handleChange}
                      styles="input"
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
                      styles="input"
                    />
                  </td>
                </tr>
                <tr className={style.tr}>
                  <td className={style.td}>
                    <Button
                      type="submit"
                      children="Add Expenses"
                      style="addButtonYellow"
                    />
                  </td>
                  <td className={style.td}>
                    <Button
                      type="button"
                      onClick={() =>
                        isAddExpenseModalOpen
                          ? handleCloseAddExpenseModal()
                          : handleCloseEditExpenseModal()
                      }
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

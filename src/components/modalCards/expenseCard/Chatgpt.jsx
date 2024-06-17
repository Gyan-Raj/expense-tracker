import React from "react";
import style from "./ExpenseCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";

const ExpenseCard = ({
  handleCloseExpenseModal,
  text,
  handleAddExpense,
  expenseDetail,
  setExpenseDetail,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseDetail((prevDetail) => ({
      ...prevDetail,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddExpense();
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form className={style.form} onSubmit={handleSubmit}>
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
                    <Input
                      type="text"
                      placeholder="Price"
                      name="price"
                      value={expenseDetail.price}
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
                      type="submit"
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

import React, { useContext, useState } from "react";
import style from "./AddBalanceCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";
// import Balance from "./../balance/Balance";
// import { expenseTrackerContextProvider } from "../context/ContextProvider";
// import Button from "../buttons/Button";

const AddBalanceCard = ({
  handleCloseBalanceModal,
  addBalance,
  handleAddBalance,
  setAddBalance,
}) => {
  // let [income, setIncome] = useState("");

  const handleChange = (e) => {
    let { value } = e.target;
    setAddBalance(value);
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form action="" onSubmit={handleAddBalance}>
          <div className={style.topContainer}>
            <h1>Add Balance</h1>
          </div>
          <div className={style.bottomContainer}>
            <div className={style.bottomSubContainer}>
              <div className={style.inputDiv}>
                <Input
                  type="text"
                  placeholder="Income Amount"
                  name="income"
                  value={addBalance}
                  onChange={handleChange}
                />
              </div>
              <div className={style.addButtonDiv}>
                <Button
                  type="submit"
                  // onClick={handleSubmit}
                  children="Add Balance"
                  style="addButtonYellow"
                />
              </div>
              <div className={style.cancelButtonDiv}>
                <Button
                  type="button"
                  onClick={handleCloseBalanceModal}
                  children="Cancel"
                  style="cancelButton"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBalanceCard;

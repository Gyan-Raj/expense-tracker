import React, { useContext, useState } from "react";
import style from "./AddBalanceCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";
// import Balance from "./../balance/Balance";
// import { expenseTrackerContextProvider } from "../context/ContextProvider";
// import Button from "../buttons/Button";

const AddBalanceCard = ({ handleCloseBalanceModal }) => {
  //   let { state, funcAddBalance } = useContext(expenseTrackerContextProvider);
  let [addBalance, setAddBalance] = useState({
    income: 0,
  });
  let { income } = addBalance;
  //   let handleChange = (e) => {
  //     let { name, value } = e.target;
  //     setAddBalance((prevState) => {
  //       return { ...prevState, [name]: value };
  //     });
  //   };

  //   let handleSubmit = (e) => {
  //     e.preventDefault();
  //     funcAddBalance(addBalance.income);
  //     setAddBalance({ income: 0 });
  //     // console.log(addBalance);
  //     // console.log(state);
  //   };
  //   let handleCancel = (e) => {
  //     setAddBalance({ income: 0 });
  //   };

  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <form action="" onSubmit={handleSubmit}>
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
                  value={income}
                  onChange={handleChange}
                />
              </div>
              <div className={style.addButtonDiv}>
                <Button
                  type="button"
                  onClick={handleSubmit}
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

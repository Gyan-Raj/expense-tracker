import React from "react";
import style from "./AddBalanceCard.module.css";
import Button from "../../button/Button";
import Input from "../../input/Input";

const AddBalanceCard = ({
  handleChange,
  handleCloseAddBalanceModal,
  addBalance,
  handleAddBalance,
}) => {
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
                  styles="input"
                />
              </div>
              <div className={style.addButtonDiv}>
                <Button
                  type="submit"
                  children="Add Balance"
                  style="addButtonYellow"
                />
              </div>
              <div className={style.cancelButtonDiv}>
                <Button
                  type="button"
                  onClick={() => handleCloseAddBalanceModal()}
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

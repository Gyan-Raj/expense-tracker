import React from "react";
import style from "./TopContainer.module.css";
import Wallet from "../walletCard/Wallet";
import Example from "../pieChart/PieChart";

const TopContainer = ({
  walletBalance,
  totalExpense,
  handleOpenAddBalanceModal,
  handleOpenAddExpenseModal,
  data,
}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.leftCard}>
          <Wallet
            walletBalance={walletBalance}
            balance={true}
            handleOpenAddBalanceModal={handleOpenAddBalanceModal}
          />
        </div>
        <div className={style.rightCard}>
          <Wallet
            totalExpense={totalExpense}
            balance={false}
            handleOpenAddExpenseModal={handleOpenAddExpenseModal}
          />
        </div>
        <div className={style.pieChart}>
          <Example data={data} />
        </div>
      </div>
    </div>
  );
};

export default TopContainer;

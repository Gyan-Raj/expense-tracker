import React from "react";
import style from "./TopContainer.module.css";
import Wallet from "../walletCard/Wallet";
import PieChart from "../pieChart/PieChart";

const TopContainer = ({
  handleOpenBalanceModal,
  handleCloseBalanceModal,
  handleOpenExpenseModal,
  handleCloseExpenseModal,
  walletBalance,
  totalExpense,
}) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Wallet
          amount={walletBalance}
          balance={true}
          handleOpenBalanceModal={handleOpenBalanceModal}
          handleCloseBalanceModal={handleCloseBalanceModal}
        />
        <Wallet
          amount={totalExpense}
          balance={false}
          handleOpenExpenseModal={handleOpenExpenseModal}
          handleCloseExpenseModal={handleCloseExpenseModal}
        />
        <PieChart />
      </div>
    </div>
  );
};

export default TopContainer;

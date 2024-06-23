import React, { useState } from "react";
import style from "./RecentTransactions.module.css";
import { PiPizza, PiGift } from "react-icons/pi";
import { BsSuitcase2 } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Input from "../../input/Input";
import Button from "../../button/Button";

const RecentTransactions = ({
  handleOpenEditExpenseModal,
  handleDeleteExpense,
  expenseDetailList,
}) => {
  let [pageNo, setPageNo] = useState(1);
  let itemsPerPage = 3;

  let pagination = (list) => {
    let startIndex = (pageNo - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.title}>
        <h1>Recent Transactions</h1>
      </div>
      <div className={style.container}>
        {expenseDetailList.length > 0 &&
          pagination(expenseDetailList).map((list) => (
            <React.Fragment key={list.id}>
              <div className={style.subContainer}>
                <div className={style.leftSubContainer}>
                  {list.category === "food" ? (
                    <div>
                      <PiPizza />
                    </div>
                  ) : list.category === "entertainment" ? (
                    <div>
                      <PiGift />
                    </div>
                  ) : (
                    <div>
                      <BsSuitcase2 />
                    </div>
                  )}
                </div>
                <div className={style.details}>
                  <p>{list.title}</p>
                  <p>{list.date}</p>
                </div>
                <div className={style.rightSubContainer}>
                  <p>₹ {list.addExpense}</p>
                  <button onClick={() => handleDeleteExpense(list.id)}>
                    <TiDeleteOutline />
                  </button>
                  <button onClick={() => handleOpenEditExpenseModal(list.id)}>
                    <CiEdit />
                  </button>
                </div>
              </div>
              <hr />
            </React.Fragment>
          ))}
        <div className={style.buttons}>
          {expenseDetailList.length > itemsPerPage && (
            <>
              <Button
                onClick={() => setPageNo(Math.max(pageNo - 1, 1))}
                disabled={pageNo === 1}
                children={<GoArrowLeft />}
                style="pagination"
              />
              <Input type="text" name="pageNo" value={pageNo} styles="pageNo" />
              <Button
                onClick={() =>
                  setPageNo(
                    Math.min(
                      pageNo + 1,
                      Math.ceil(expenseDetailList.length / itemsPerPage)
                    )
                  )
                }
                disabled={
                  pageNo === Math.ceil(expenseDetailList.length / itemsPerPage)
                }
                children={<GoArrowRight />}
                style="pagination"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;

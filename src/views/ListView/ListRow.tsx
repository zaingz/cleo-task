import React, { useState } from "react";
import { updateMerchantBill } from "../../redux/merchantsSlice";
import { useDispatch } from "react-redux";
import {
  PrimaryList,
  PrimaryListHeader,
  SecondaryList,
} from "./ListContainers";
import { Merchant, Transaction } from "../../types";

const TransactionsList: React.FC<{ list: Transaction[] }> = ({ list }) => {
  const transactionsList = list.map((transaction, index) => (
    <li key={index}>
      <h6>ID: {transaction.id}</h6>
      <p>Ammount: {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
    </li>
  ));
  return <ul>{transactionsList}</ul>;
};

const MerchantRow: React.FC<{ merchant: Merchant }> = ({ merchant }) => {
  const [hideContent, setHideContent] = useState(true);
  const dispatch = useDispatch();
  
  const buttonCopy = !merchant.isBill ? "Add as bill" : "Remove bill";

  const billUpdateHandler = (id: string, isBill: boolean) => {
    dispatch(updateMerchantBill({ id, isBill }));
  };
  return (
    <PrimaryList>
      <PrimaryListHeader>
        <h2>{merchant.name}</h2>
        <button
          onClick={() => billUpdateHandler(merchant.id, !merchant.isBill)}
        >
          {buttonCopy}
        </button>
      </PrimaryListHeader>
      <span onClick={() => setHideContent(!hideContent)}>
        Total transactions: {merchant.transactions.length}
      </span>

      {!hideContent && (
        <SecondaryList>
          <TransactionsList list={merchant.transactions} />
        </SecondaryList>
      )}
    </PrimaryList>
  );
};

export default MerchantRow;

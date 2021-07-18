import React from "react";
import MerchantRow from "./ListRow";
import { Merchant } from "../../types";

const List: React.FC<{ items: Merchant[] }> = ({ items }) => (
  <ul>
    {items.map((i) => (
      <MerchantRow key={i.id} merchant={i} />
    ))}
  </ul>
);

export default List;

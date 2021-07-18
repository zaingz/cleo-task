export type Merchant = {
  id: string;
  name: string;
  isBill: boolean;
  transactions: Transaction[];
};

export type Transaction = {
  id: string;
  amount: string;
  date: Date;
};

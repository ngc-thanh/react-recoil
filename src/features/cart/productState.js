import { atom } from "recoil";

export const productListState = atom({
  key: 'productList',
  default: [
    { id: 1, price: 1500, title: 'Ticket' },
    { id: 2, price: 2500, title: 'Book' },
    { id: 3, price: 3000, title: 'Glass' },
  ],
});

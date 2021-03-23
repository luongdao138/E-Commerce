import { commerce } from '../lib/commerce';

export const getAllProducts = () => {
  console.log(commerce);
  return commerce.products.list().then((res) => res.data);
};

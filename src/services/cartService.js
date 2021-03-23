import { commerce } from '../lib/commerce';

export const getCart = () => {
  return commerce.cart.retrieve();
};

export const addToCart = (productId, quantity) => {
  return commerce.cart.add(productId, quantity).then((res) => res.cart);
};

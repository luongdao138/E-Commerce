import { commerce } from '../lib/commerce';

export const getCart = () => {
  return commerce.cart.retrieve();
};

export const addToCart = (productId, quantity) => {
  return commerce.cart.add(productId, quantity).then((res) => res.cart);
};

export const updateCartQuantity = (productId, quantity) => {
  return commerce.cart.update(productId, { quantity }).then((res) => res.cart);
};

export const removeFromCart = (productId) => {
  return commerce.cart.remove(productId).then((res) => res.cart);
};

export const emptyCart = () => {
  return commerce.cart.empty().then((res) => {
    console.log(res);
    return res.cart;
  });
};

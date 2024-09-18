import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, fetchCartItems } from "../../store/slices/cartSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CartItem } from "../../store/types";
import styled from "styled-components";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );
  const cartStatus = useSelector((state: RootState) => state.cart.status);

  useEffect(() => {
    if (cartStatus === "idle") {
      dispatch(fetchCartItems());
    }
  }, [cartStatus, dispatch]);

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.toString().replace(/\s+/g, ""));
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <CartStyle>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ItemList>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img className="product" src={item.imgURL} alt={item.title} />
                {item.title}
                <button onClick={() => handleRemove(item.id)}>
                  <img className="trash" src="/public/icons/trash.svg" alt="" />
                </button>
              </li>
            ))}
          </ItemList>
          <TotalPrice>Итого: {totalPrice} </TotalPrice>
        </>
      )}
    </CartStyle>
  );
};

const CartStyle = styled.div``;

const ItemList = styled.ul`
  max-height: 300px;
  overflow-y: auto;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 30px;
    font-family: Intro Book;
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
  }

  .product {
    width: 100px;
    height: auto;
  }

  button {
    background-color: white;
    border: none;
  }
`;

const TotalPrice = styled.p`
  font-size: 20px;
  margin-top: 20px;
  font-family: Intro Book;
  max-width: 100px;
`;

export default Cart;

import { useEffect, useState } from "react";
import Cart from "../components/Basket/Basket";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import { AppDispatch, RootState } from "../store/store";
import { CartItem } from "../store/types";
import { Link } from "react-router-dom";

export const TotalPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cartItems = useSelector<RootState, CartItem[]>(
    (state) => state.cart.items
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const isFormValid = () => {
    return name && phone && email && cartItems.length > 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Заказ оформлен:", { name, phone, email });

    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Overlay to={"/"}></Overlay>
      <OrderContainer>
        <div className="name__title">
          <h1 className="title__order">Оформление заказа</h1>
          <p className="order__num">Заказ 3456 67</p>
        </div>

        <div className="cart__block">
          <p className="title__products">Товаров в заказе: {}</p>
          <p className="title__sum">Общая сумма заказа: {}</p>
          <ToggleCartButton onClick={() => setIsCartVisible(!isCartVisible)}>
            Состав заказа {isCartVisible ? "↑" : "↓"}
          </ToggleCartButton>

          {isCartVisible && <Cart />}
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit" disabled={!isFormValid()}>
            Оформить заказ
          </SubmitButton>
        </form>
      </OrderContainer>
    </>
  );
};

const Overlay = styled(Link)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(49, 49, 49, 0.436);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 3px 0px;
  background-color: #f6f6f6;
  border: none;
  font-family: Intro Book;
  font-size: 16px;
  color: #b2b5bb;
  border-radius: 4px;
  height: 50px;
`;

const OrderContainer = styled.div`
  background-color: white;
  padding: 20px;
  width: auto;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  form {
    max-width: 550px;
  }

  .title__order {
    font-family: Intro Bold;
    font-size: 20px;
    color: var(--grey);
  }
  .title__products,
  .title__sum,
  .order__num {
    font-size: 14px;
    font-family: Intro Book;
    color: #b2b5bb;
    padding: 10px;
  }

  .name__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cart__block {
    background-color: none;
    border-radius: 1px;
    border: 1px solid #d9d9d9;
    padding: 30px;
    margin-bottom: 30px;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const SubmitButton = styled.button`
  padding: 20px 30px;
  background-color: var(--btn-lgt);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: Intro Regular;
  font-size: 16px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ToggleCartButton = styled.button`
  background-color: white;
  color: white;
  border: none;

  font-size: 14px;
  font-family: Intro Book;
  color: #b2b5bb;
  padding: 10px;
`;

export default TotalPage;

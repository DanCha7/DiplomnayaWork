import Logo from "../Logo";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Modal from "../Basket/ModalBasket";
import BtnHeader from "../Basket/HeaderBasket";
import Cart from "../Basket/Basket";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <HeaderStyle>
      <header className="header">
        <div className="container header__content">
          <Logo />
          <nav>
            <div className="burger" onClick={toggleMenu}>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
            </div>
            <ul className={`list__header ${isMenuOpen ? "open" : ""}`}>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#catalog">Каталог</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#aboutus">О нас</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#podbor__sec">Подбор товара</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#team">Наша команда</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#delivery">Доставка и оплата</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <a href="#contacts">Контакты</a>
              </li>
              <li className="list__item" onClick={handleMenuItemClick}>
                <BtnHeader onOpenModal={handleOpenModal} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <Cart />
      </Modal>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.section`
  header {
    position: absolute;
    width: 100%;
  }
  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid white;
  }

  .list__header {
    display: flex;
    gap: 30px;
  }

  a {
    color: white;
    font-family: "Intro Book";
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
  }

  .burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }

  .line {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: 0.3s;
  }

  @media (max-width: 960px) {
    .list__header {
      display: flex;
      flex-direction: column;
      position: fixed;
      right: 0;
      background-color: var(--purple);
      width: 300px;
      height: 100%;
      padding: 30px 20px;
      opacity: 0;
      transform: translateX(100%);
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 1000;
    }

    .list__header.open {
      display: flex;
      opacity: 1;
      transform: translateX(0);
    }

    .burger {
      display: flex;
    }
  }
`;

export default Header;

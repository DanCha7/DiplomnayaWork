import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import PriceFilter from "../Filters/PriceFilter";
import styled from "styled-components";

const FormFilters: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedGender, setSelectedGender] = useState<string>("Мужской");
  const [startPrice, setStartPrice] = useState<number>(0);
  const [endPrice, setEndPrice] = useState<number>(99999);

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      fetchProducts({
        gender: selectedGender,
        sizes: selectedSize ? [selectedSize] : [],
        startPrice,
        endPrice,
      })
    );
  };

  return (
    <FormFiltersStyle>
      <>
        <form onSubmit={handleSubmit}>
          <h4>Подбор по параметрам</h4>
          <div>
            <p className="title__price__pagin">Цена, руб</p>
            <div id="slider" className="slider">
              <PriceFilter
                startPrice={startPrice}
                setStartPrice={setStartPrice}
                endPrice={endPrice}
                setEndPrice={setEndPrice}
              />
            </div>
          </div>
          <div>
            <h5>Пол :</h5>
            <div className="gender-options">
              {["Мужской", "Женский"].map((gender) => (
                <label key={gender} className="gender-label">
                  <input
                    type="checkbox"
                    checked={selectedGender === gender}
                    onChange={() => handleGenderChange(gender)}
                  />
                  <span className="custom-checkbox"></span>
                  <p className="title__gender">{gender}</p>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h5>Размер</h5>
            <div className="size-options">
              {[35, 36, 37, 38, 39, 40, 41, 42, 43].map((size) => (
                <label key={size} className="size-label">
                  <input
                    type="radio"
                    checked={selectedSize === size}
                    onChange={() => handleSizeChange(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>
          <button type="submit">Применить фильтры</button>
        </form>
      </>
    </FormFiltersStyle>
  );
};

const FormFiltersStyle = styled.section`
  .title__price__pagin {
    font-family: Intro Book;
    font-size: 16px;
    color: var(--grey);
    margin-bottom: 20px;
  }
  h4 {
    font-family: Intro Book;
    font-size: 24px;
    color: var(--grey);
    max-width: 240px;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 10px;
    border-radius: 5px;
    max-height: 597px;
    width: 260px;
  }
  h5 {
    font-family: Intro Book;
    font-size: 16px;
    color: var(--grey);
    margin-bottom: 10px;
  }
  .gender-options {
    display: flex;
    gap: 60px;
    margin-bottom: 30px;
  }

  .gender-label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  input[type="checkbox"] {
    display: none;
  }

  .custom-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #dbbba9;
    border-radius: 3px;
    position: relative;
    margin-right: 5px;
    transition: background-color 0.3s;
    background-color: white;
  }

  .custom-checkbox::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 3px;
    width: 10px;
    height: 10px;
    border: solid white;
    border-width: 0px 1px 1px 0px;
    transform: rotate(45deg);
  }

  input[type="checkbox"]:checked + .custom-checkbox {
    background-color: var(--bej);
  }

  input[type="checkbox"]:checked + .custom-checkbox::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
  }

  .size-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .size-label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #dbbba9;
    padding: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-family: Intro Book;

    input[type="radio"] {
      display: none;
    }

    &:hover {
      background-color: var(--btn-bor);
    }

    &.checked {
      background-color: #dbbba9;
    }
  }
  .title__gender {
    font-family: Intro Book;
    font-size: 16px;
    color: var(--grey);
  }
  button {
    margin-top: 10px;
    padding: 22px 40px;
    background-color: var(--grey);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Intro Regular;
    font-size: 16px;
    color: white;

    &:hover {
      background-color: var(--grey);
    }
  }
  @media (max-width: 1000px) {
    form {
      //   max-width: 500px;
      height: auto;
      width: auto;
    }
  }
  @media (max-width: 630px) {
  }
`;

export default FormFilters;

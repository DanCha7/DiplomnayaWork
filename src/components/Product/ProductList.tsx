import styled from "styled-components";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/productSlice";
import ProductItem from "./ProductItem";
import { AppDispatch, RootState } from "../../store/store";
import FormFilters from "../Filters/FilterForm";

const ProductList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, status } = useSelector(
    (state: RootState) => state.products
  );
  const [visibleProducts, setVisibleProducts] = useState<number>(6);

  useEffect(() => {
    dispatch(
      fetchProducts({
        gender: "Мужской",
        sizes: [],
        startPrice: 0,
        endPrice: 99999,
      })
    );
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 6);
  };

  return (
    <CatalogStyle id="catalog">
      <div className="container">
        <h2>Каталог</h2>
        <div className="catalog__content">
          <FormFilters />
          <div className="product__list">
            {status === "pending" ? (
              <p className="found__status__title">Loading...</p>
            ) : status === "rejected" ? (
              <p className="found__status__title">Error</p>
            ) : products.length === 0 ? (
              <p className="found__status__title">Товар не найден</p>
            ) : (
              <>
                <ul>
                  {products.slice(0, visibleProducts).map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </ul>
                <div className="btn__products__List">
                  {visibleProducts < products.length && (
                    <button
                      className="btn__product__pagination"
                      onClick={handleLoadMore}
                    >
                      Добавить еще
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </CatalogStyle>
  );
};

const CatalogStyle = styled.section`
  margin-bottom: 50px;

  h2 {
    font-family: Intro Bold;
    font-size: 30px;
    color: var(--grey);
    margin-bottom: 60px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  h3,
  p {
    color: black;
  }

  img {
    max-width: 280px;
  }

  li {
    max-width: 310px;
    position: relative;
  }

  .product-image {
    position: relative;
  }

  .product-actions {
    position: absolute;
    top: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 0 10px;

    .view-product,
    .add-to-cart {
      background-color: var(--gray);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  .catalog__content {
    display: flex;
  }

  .btn__products__List {
    display: flex;
    justify-content: center;
  }

  .btn__product__pagination {
    background-color: var(--red);
    padding: 22px 40px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Intro Regular;
    font-size: 16px;
  }

  .product__list {
    width: 100%;
    text-align: center;
    margin: auto;
  }

  .found__status__title {
    position: right;
    font-family: Intro Regular;
    font-size: 16px;
  }

  @media (max-width: 1000px) {
    .catalog__content {
      flex-direction: column;
    }
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
    .found__status__title {
      padding-top: 50px;
    }
  }

  @media (max-width: 630px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ProductList;

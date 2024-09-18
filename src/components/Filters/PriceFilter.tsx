import Nouislider from "nouislider-react";
import styled from "styled-components";
import "nouislider/distribute/nouislider.css";
import { Dispatch, SetStateAction } from "react";

interface IPrcieFilterPrice {
  startPrice: number;
  endPrice: number;
  setStartPrice: Dispatch<SetStateAction<number>>;
  setEndPrice: Dispatch<SetStateAction<number>>;
}

const PriceFilter = (props: IPrcieFilterPrice) => {
  const { startPrice, endPrice, setStartPrice, setEndPrice } = props;

  return (
    <PriceFilterStyle>
      <div className="filter">
        <input
          type="number"
          min={0}
          max={99999}
          value={startPrice}
          onChange={(e) => setStartPrice(Number(e.target.value))}
        />
        <input
          type="number"
          min={0}
          max={99999}
          value={endPrice}
          onChange={(e) => setEndPrice(Number(e.target.value))}
        />
        <Nouislider
          range={{ min: 0, max: 99999 }}
          start={[startPrice, endPrice]}
          orientation="horizontal"
          connect
          step={1}
          onChange={([start, end]) => {
            setStartPrice(Math.round(start));
            setEndPrice(Math.round(end));
          }}
        />
      </div>
    </PriceFilterStyle>
  );
};

const PriceFilterStyle = styled.div`
  color: var(--red);
  font-size: 16px;
  margin-bottom: 29px;

  .filter {
    border: 1px solid#B2B5BB;
    border-radius: 4px;
    padding: 17px 0;
    position: relative;
    display: flex;
    justify-content: space-around;
    font-family: Intro Book;
    font-size: 16px;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 34px;
      background-color: #b2b5bb;
    }

    input {
      text-align: center;
      border: none;
      background: none;
    }
  }

  .noUi {
    &-target {
      width: 100%;
      position: absolute;
      bottom: 0;
      transform: translateY(50%);
      background: none;
      border: none;
    }

    &-horizontal {
      height: 4px;
    }

    &-connect {
      background: #444b58;
    }

    &-handle {
      width: 6px;
      height: 20px;
      background-color: #444b58;
      box-shadow: none;
      border: none;
      top: -8px;
      right: -3px;

      &::before {
        content: none;
      }
      &::after {
        content: none;
      }
    }
  }
`;

export default PriceFilter;

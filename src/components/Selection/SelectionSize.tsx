import { useState } from "react";
import styled from "styled-components";

interface SizeOption {
  id: string;
  label: string;
  isChecked: boolean;
}

const SelectionSize = () => {
  const [sizeOptions, setSizeOptions] = useState<SizeOption[]>([
    { id: "less-36", label: "Менеe 36", isChecked: false },
    { id: "36-38", label: "36-38", isChecked: false },
    { id: "39-41", label: "39-41", isChecked: false },
    { id: "42-44", label: "42-44", isChecked: false },
    { id: "45-plus", label: "45 и больше", isChecked: false },
  ]);

  const handleSizeChange = (id: string) => {
    setSizeOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, isChecked: !option.isChecked } : option
      )
    );
  };

  return (
    <SelectionSizeStyle>
      <h2 className="title">Какой размер вам подойдет?</h2>
      <div className="size-options">
        {sizeOptions.map((option) => (
          <SizeOptionLabel key={option.id}>
            <HiddenCheckbox
              type="checkbox"
              checked={option.isChecked}
              onChange={() => handleSizeChange(option.id)}
            />
            <CustomCheckbox checked={option.isChecked} />
            {option.label}
          </SizeOptionLabel>
        ))}
      </div>
      <div className="under__img__selection">
        <img
          className="sneakersPh"
          src="/src/assets/images/SneakersPh.png"
          alt="Shoe"
        />
      </div>
    </SelectionSizeStyle>
  );
};

const SelectionSizeStyle = styled.section`
  .size-options {
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-weight: 400;
    font-size: 24px;
    line-height: 24px;
    font-family: Intro Book;
    color: var(--grey);
    margin-bottom: 70px;
  }
`;

const SizeOptionLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  font-family: Intro Book;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  color: black;
  margin-bottom: 10px;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border: 1px solid #dbbba9;
  background-color: white;
  display: inline-block;
  margin-right: 10px;
  position: relative;
  border-radius: 4px;

  ${({ checked }) =>
    checked &&
    `
    background-color: #dbbba9; 
    
    &:after {
      content: '';
      position: absolute;
      left: 5px; 
      top: 3px; 
      width: 5px; 
      height: 10px; 
      border: solid white; 
      border-width: 0 2px 2px 0; 
      transform: rotate(45deg); 
    }
  `}
`;

export default SelectionSize;

import React, { useState } from "react";
import styled from "styled-components";

interface CheckboxItem {
  id: string;
  label: string;
  imageUrl: string;
}

const SelectionFr = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const checkboxItems: CheckboxItem[] = [
    {
      id: "1",
      label: "Кеды",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
    {
      id: "2",
      label: "Туфли",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
    {
      id: "3",
      label: "Кроссовки",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
    {
      id: "4",
      label: "Что-то",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
    {
      id: "5",
      label: "Что-то",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
    {
      id: "6",
      label: "Что-то",
      imageUrl: "/src/assets/images/sneakersimg.png",
    },
  ];

  const handleCheckboxChange = (id: string) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <>
      <Title>Какой тип кроссовок рассматриваете?</Title>
      <CheckboxList>
        {checkboxItems.map((item) => (
          <CheckboxItemStyled key={item.id}>
            <Image src={item.imageUrl} alt={item.label} />
            <Label>
              <HiddenCheckbox
                type="checkbox"
                checked={selectedId === item.id}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <CustomCheckbox checked={selectedId === item.id} />
              {item.label}
            </Label>
          </CheckboxItemStyled>
        ))}
      </CheckboxList>
    </>
  );
};

const Title = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  font-family: Intro Book;
  color: var(--grey);
  margin-bottom: 70px;
`;

const CheckboxList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  border-bottom: 1px solid black;
`;

const CheckboxItemStyled = styled.li`
  position: relative;
  margin: 10px;
`;

const Image = styled.img`
  height: auto;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  padding-left: 25px;
  cursor: pointer;
  font-family: Intro Book;
  font-size: 16px;
  color: black;
`;

const HiddenCheckbox = styled.input`
  display: none;
`;

const CustomCheckbox = styled.span<{ checked: boolean }>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: 1px solid #dbbba9;
  background-color: white;
  border-radius: 5px;

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

export default SelectionFr;

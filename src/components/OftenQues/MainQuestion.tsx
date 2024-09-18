import styled from "styled-components";
import Content from "./TextContent";

const Chasto = () => {
  return (
    <ChastoStyle className="container">
      <>
        <div className="container que__content">
          <h2 className="title__sect">Часто задаваемые вопросы</h2>
          <Content />
        </div>
      </>
    </ChastoStyle>
  );
};
const ChastoStyle = styled.section`
  title {
    font-family: Intro Regular;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    color: #242424;
  }
  p {
    font-family: Intro Book;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
    color: #24242480;
  }
  .title__sect {
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
    font-family: Intro Bold;
    color: var(--btn-l-grey);
    margin-bottom: 30px;
  }
  .que__content {
    padding: 70px 0px;
  }
`;

export default Chasto;

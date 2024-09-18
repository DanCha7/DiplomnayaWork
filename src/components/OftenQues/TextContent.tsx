import Accordion from "./Accordion";
import styled from "styled-components";

const App: React.FC = () => {
  return (
    <AppStyle>
      <div className="content__accordion">
        <Accordion
          title="Вопрос 1"
          content={
            <div>
              <p>
                А это ответ 1: в комплексе функционируют 6 детских садов с
                площадками, воспитателями и всякими другими людьми
              </p>
            </div>
          }
        />
        <Accordion
          title="Вопрос 2"
          content={
            <div>
              <p>
                А это ответ 1: в комплексе функционируют 6 детских садов с
                площадками, воспитателями и всякими другими людьми
              </p>
            </div>
          }
        />
      </div>
    </AppStyle>
  );
};

const AppStyle = styled.div`
  .content__accordion {
    max-width: 1000px;
    margin: auto;
    border-top: 1px solid black;
  }

  .accordion {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--grey);
  }
`;

export default App;

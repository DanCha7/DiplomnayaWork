import Gallery from "../Gallery";
import styled from "styled-components";

const Questions = () => {
  return (
    <QuestionsStyle id="delivery">
      <div className="container questions__content">
        <div className="left__content">
          <div className="form__subm">
            <h2 className="quest__title">Есть вопросы?</h2>
            <p className="under__tit">
              Заполните форму и наш менеджер свяжется с вами
            </p>
            <form className="form__otpr" action="">
              <input type="text" placeholder="Ваше имя" />
              <input type="phone" placeholder="Номер телефона" />
              <button className="sbm__tp" type="submit">
                Отправить
              </button>
            </form>
          </div>
        </div>
        <div className="right__content">
          <Gallery />
        </div>
      </div>
    </QuestionsStyle>
  );
};

const QuestionsStyle = styled.section`
  .form__subm {
    width: 380px;
    height: 402px;
    background-color: var(--purple);
    border-radius: 4px;
    text-align: center;
    color: white;
  }

  .questions__content {
    gap: 40px;
    padding: 90px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .quest__title {
    padding-top: 50px;
    font-weight: 700;
    font-family: Intro Bold;
    line-height: 30px;
    font-size: 30px;
  }

  .under__tit {
    max-width: 250px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    font-family: Intro Book;
    margin: auto;
    margin-bottom: 20px;
  }

  .form__otpr {
    display: flex;
    flex-direction: column;
    width: 340px;
    margin: auto;
  }

  input {
    padding: 20px 0px;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
    font-family: Intro Book;
    margin-bottom: 10px;
    border-radius: 4px;
    border: none;
  }

  .sbm__tp {
    background-color: var(--red);
    padding: 22px 44px;
    font-family: Intro Regular;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    border-radius: 4px;
    border: none;
  }

  @media (max-width: 1080px) {
    .questions__content {
      flex-direction: column;
    }
  }
`;

export default Questions;

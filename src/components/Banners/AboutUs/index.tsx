import styled from "styled-components";

const AboutUs = () => {
  return (
    <AboutUsStyle id="aboutus">
      <section className="img__content">
        <div className="container content__banner_img">
          <div className="title__block">
            <h2 className="title__imgbn">Пара слов о нас</h2>
            <p className="under__imgbn">
              Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через
              спорт мы можем менять жизни. В том числе с помощью воодушевляющих
              историй спортсменов. Чтобы помочь тебе подняться и двигаться
              вперед.{" "}
            </p>
          </div>
          <img
            className="img-responsive"
            src="/src/assets/images/NewPhoto.png"
            alt="sneakers"
          />
        </div>
      </section>
    </AboutUsStyle>
  );
};

const AboutUsStyle = styled.div`
  .img__content {
    background-color: var(--purple);
    background-image: url("/src/assets/images/figure.png");
    background-repeat: no-repeat;
  }

  .content__banner_img {
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
  }

  .img-responsive {
    max-width: 600px;
  }

  .title__imgbn {
    position: relative;
    font-size: 30px;
    font-family: Intro Bold;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 25px;
  }

  .title__imgbn::before {
    position: absolute;
    content: "SneakMax";
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
    font-family: Intro Bold;
    top: 199px;
    left: 338px;
  }

  .under__imgbn {
    position: relative;
    max-width: 380px;
    font-family: Intro Book;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
  }

  .under__imgbn::before {
    position: absolute;
    content: "";
    width: 30px;
    height: 2px;
    background-color: white;
    top: 153px;
    left: 290px;
  }

  @media (max-width: 1280px) {
    .img-responsive {
      max-width: 400px;
    }
  }
  @media (max-width: 830px) {
    .title__imgbn::before {
      background-color: var(--purple);
    }
    .img-responsive {
      max-width: 400px;
      display: none;
    }
    .img__content {
      background-size: 400px;
    }
    .content__banner_img {
      flex-direction: column;
      padding: 80px;
    }
    .title__imgbn::before {
      left: 170px;
    }
    .under__imgbn::before {
      left: 120px;
    }
  }
`;

export default AboutUs;

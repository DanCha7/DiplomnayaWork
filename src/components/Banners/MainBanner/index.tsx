import styled from "styled-components";

const MainBanner = () => {
  return (
    <MainBannerStyle>
      <section className="banner">
        <div className="container banner__content">
          <h1 className="f__title">
            Кроссовки известных брендов с доставкой по России и СНГ
          </h1>
          <p className="title__under">
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и
            многие другие по низким ценам
          </p>
          <a className="btn__banner" href="#catalog">
            Перейти к покупкам
          </a>
        </div>
      </section>
    </MainBannerStyle>
  );
};

const MainBannerStyle = styled.div`
  .banner {
    background-color: var(--purple);
  }

  .banner__content {
    padding: 150px 20px;
    margin-bottom: 70px;
  }

  .f__title {
    font-family: "Intro Regular";
    font-size: 36px;
    line-height: 50.4px;
    font-weight: 400;
    max-width: 550px;
    color: white;
    position: relative;
    margin-bottom: 40px;
  }

  .f__title::before {
    z-index: 0;
    position: absolute;
    content: "SneakMax";
    font-family: Intro Bold;
    font-size: 200px;
    line-height: 200px;
    font-weight: 700;
    opacity: 20%;
    top: 80px;
    left: 210px;
  }

  .title__under {
    font-family: Intro Book;
    font-size: 16px;
    line-height: 22.4px;
    font-weight: 400;
    max-width: 470px;
    color: white;
    margin-bottom: 50px;
  }

  .btn__banner {
    color: white;
    font-family: Intro Regular;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    padding: 20px 30px;
    background-color: var(--btn-lgt);
    border-radius: 5px;
  }

  @media (max-width: 1280px) {
    .f__title::before {
      font-size: 100px;
      top: 70px;
      left: 330px;
    }
  }
  @media (max-width: 830px) {
    .f__title::before {
      font-size: 70px;
      top: 30px;
      left: 100px;
    }
  }
  @media (max-width: 500px) {
    .f__title::before {
      font-size: 50px;
      top: 60px;
      left: 50px;
    }
  }
`;

export default MainBanner;

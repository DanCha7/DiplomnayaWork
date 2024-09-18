import TeamList from "./ListTeam";
import styled from "styled-components";

const Team = () => {
  return (
    <TeamStyle id="team">
      <section className="team">
        <div className="container team__content">
          <h1 className="team__title">Наша команда</h1>
          <TeamList />
        </div>
      </section>
    </TeamStyle>
  );
};
const TeamStyle = styled.section`
  picture {
    width: 340px;
    height: 360px;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .team {
    background-color: var(--purple);
    background-image: url("/src/assets/images/krug.png");
    background-repeat: no-repeat;
    background-position: right top;
    background-size: 541px;
  }

  .team__content {
    color: white;
    padding: 20px 20px;
  }

  .team__title {
    font-size: 30px;
    font-family: Intro Bold;
    line-height: 30px;
    font-weight: 700;
    margin: 30px 0px;
  }

  .list__team {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }

  .img__team {
    width: 100%;
  }

  .name__title {
    font-family: Intro Bold;
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .title__under {
    font-family: Intro Book;

    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
  }

  @media (max-width: 1280px) {
    .team {
      background-size: 350px;
    }
    .list__team {
      gap: 60px;
    }
  }
  @media (max-width: 830px) {
    .team {
      background-size: 350px;
    }
  }
`;

export default Team;

import React from "react";
import styled from "styled-components";

const Gallery: React.FC = () => {
  return (
    <GalleryStyle>
      <div className="gallery">
        <img src="/src/assets/images/Insta.png" alt="instagramm" />
        <div className="gallery-grid">
          <div>
            <img
              src="/src/assets/images/Rectangle 37.png"
              alt=""
              className="gallery-item "
            />
            <img
              src="/src/assets/images/Rectangle 39.png"
              alt=""
              className="gallery-item "
            />
          </div>
          <img
            src="/src/assets/images/img1.png"
            className="gallery-item-central"
          />
          <div>
            <img
              src="/src/assets/images/Rectangle 40.jpg"
              alt=""
              className="gallery-item "
            />
            <img
              src="/src/assets/images/Rectangle 41.jpg"
              alt=""
              className="gallery-item "
            />
          </div>
        </div>
      </div>
    </GalleryStyle>
  );
};

const GalleryStyle = styled.section`
  .gallery {
    text-align: center;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery-item {
    width: auto;
    border-radius: 4px;
  }

  .gallery-item-central {
    width: auto;
  }

  @media (max-width: 830px) {
    .gallery-grid {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default Gallery;

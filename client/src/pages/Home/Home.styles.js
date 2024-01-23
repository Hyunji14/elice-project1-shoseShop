import styled from 'styled-components';
import Slider from 'react-slick';

export const Container = styled.div`
  width: 100%;

  ul {
    width: 100%;

    & li img {
      width: 100%;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ContextContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const BestItemsDiv = styled.div`
  width: 100%;
  height: 1000px;

  h2 {
    font-size: 30px;
    margin: 100px 0 50px;
    text-align: center;
  }
`;

export const SlideWrap = styled.div`
  width: 100%;
  height: 40vw;
  /* max-height: 456px; */
  overflow: hidden;
`;

export const StyledSlide = styled(Slider)`
  width: 100%;
  max-width: 100%;
  position: relative;

  .slick-list {
    position: absolute;
    overflow: hidden;
  }

  .slick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    height: 100%;
  }

  .slick-dots {
    position: absolute;
    top: 50vh;
  }

  img {
    width: 100vw;
    max-width: 100%;
    height: 100%;
  }
`;

export const ButtonWrap = styled.div`
  top: 25%;
  display: flex;
  justify-content: space-between;
  margin-top: 12%;
`;

export const TrendItemsDiv = styled.div`
  width: 100%;
  height: 1000px;
  text-align: center;

  h2 {
    margin: 80px 0 50px;
    font-size: 30px;
  }

  img {
    width: 1800px;
  }

  button {
    display: block;
    padding: 15px 40px;
    border: 1px solid;
    color: var(--white-color);
    background: var(--black-color);
    border-radius: 5px;
    margin: 0 auto;
  }

  button:hover {
    color: var(--black-color);
    background: var(--white-color);
  }
`;

export const TrendItemsP = styled.p`
  margin-top: 60px;
`;

export const TrendItemsTitleP = styled.p`
  font-weight: 800;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 70px;
`;

export const NewItemsDiv = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: 300px;

  h2 {
    margin: 80px 0 50px;
    font-size: 30px;
    text-align: center;
  }
`;

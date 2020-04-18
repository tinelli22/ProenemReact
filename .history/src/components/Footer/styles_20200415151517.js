import styled from 'styled-components';
//import arrowIcon from '../../../assets/icons/arrow-icon.svg';
const arrowIcon = require('../../../assets/icons/arrow-icon.svg')
export const Container = styled.footer`
  position: relative;
  padding: 50px 10px 0;
  background-color: #fafafc;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .goTopButton {
    position: absolute;
    top: 0;
    right: 10px;
    border: 0;
    display: block;
    width: 40px;
    height: 40px;
    padding: 5px;
    border-radius: 50%;
    background: #df1d3d;
    background-image: url(${arrowIcon});
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-50%);
    text-indent: -9999px;
  }
  .accordion {
    font-size: 0.8em;
    margin: 5px auto;
    background-color: #fafafc;

    .card {
      border: 0;
      border-bottom: 1px solid #d4d4d4;
      background-color: #fafafc;

      .card-header {
        border: 0;
        background-color: #fafafc;
      }

      .collapse,
      .collapsing {
        max-width: 170px;
        background-color: #fafafc;
        margin: auto;

        .card-body {
          border: 0;
          padding: 5px 10px;
        }
      }
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const List = styled.ul`
  legend {
    font-size: 0.9em;
    margin: 0;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ced0dd;
  }

  li {
    font-size: 0.75em;
    list-style: none;
    color: #54595f;

    a {
      color: inherit;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LeadCatcher = styled.div`
  p {
    text-align: center;
    margin: auto;
    color: #666b7b;
  }

  form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px 0;
    background-color: #fafafc;

    input {
      border-radius: 4px;
      border: 1px solid #ced0dd;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      padding: 10px;
      font-size: 0.8em;
    }

    button,
    .loading-ac {
      color: #fff;
      min-width: 100px;
      height: 40px;
      margin-left: 5px;
      border: 0;
      border-radius: 4px;
      background-color: #4b1451;
      display: inline-block;

      svg {
        width: 80px;
        height: 40px;
      }
    }
  }
  small {
    text-align: center;
    display: block;
    color: green;
  }
`;

export const OtherLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  padding: 10px;

  li {
    margin: 5px 0;

    a {
      font-size: 0.8em;
      color: #54595f;
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    width: 100%;
    max-width: 1000px;
    flex-direction: row;
    justify-content: flex-start;
    margin: auto;

    li {
      margin: 5px 20px;
    }
  }
  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

import styled from 'styled-components';

export default styled.header`
  display: flex;
  min-height: 80px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);

  .navbar {
    background: #fff;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    .navbar {
      align-items: flex-end;
      justify-content: end;
    }
  }

  .navbar a {
    font-size: 14px;
    color: #3a3e47;
    font-family: 'Nunito Sans', Sans-serif;
  }

  @media (min-width: 768px) {
    .navbar a {
      margin-right: 30px;
    }
  }

  .navbar-light .navbar-nav a.nav-link:hover {
    color: #cc595c;
  }
`;

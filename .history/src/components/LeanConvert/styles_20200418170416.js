import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    background: #571D5D;
    border-radius: 4px;
    font-family: Nunito;

    .row {
        margin-left: 3%;
        margin-right: 3%;
    }

    h2 {
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 44px;

        display: flex;
        align-items: center;
        letter-spacing: -0.01em;
        color: #FEB647;
        
    }

    span {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #FAFAFC;
        
    }
`
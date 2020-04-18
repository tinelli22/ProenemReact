import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: stretch;
    background: #571D5D;
    border-radius: 4px;
    font-family: Nunito;
    margin-top: 8%;
    padding: 5%;

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

    #form {
        display: flex;
        flex-direction: row;
        
    }

    @media (max-width: 400px) {
        #form {
            flex-direction: column;
            align-items: stretch;
        }
    }
`

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #CED0DD;
    box-sizing: border-box;
    border-radius: 4px;
    width: 40%;
    margin-right: 8px;
    padding: 1%;
`

export const Button = styled.button`
    background: #FEB647;
    border-radius: 4px;
    border: none;
    width: 20%;
    span {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.005em;
        color: #965307;
    }
`
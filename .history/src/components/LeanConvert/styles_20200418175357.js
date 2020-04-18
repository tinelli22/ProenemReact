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
        margin-left: 0%;
    }

    span {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        display: flex;
        align-items: center;
        color: #FAFAFC;
        margin-bottom: 1%;
    }

    #form {
        display: flex;
        flex-direction: row;
        
    }

    @media (max-width: 400px) {
        #form {
            flex-direction: column;
            align-items: stretch;
            margin: 4%;
        }
        span {
            margin-left: 8%;
            margin-right: 8%;
            font-weight: 300;
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

    @media (max-width: 400px) {
        flex-direction: column;
        align-items: stretch;
        width: 100%;
        margin-right: 4px;
        padding: 4%;
        margin-bottom: 4px;
    }
`

export const Button = styled.button`

    background: #FEB647;
    border-radius: 4px;
    border: none;
    width: 18%;

    span {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        letter-spacing: 0.005em;
        color: #965307;
    }

    @media (max-width: 400px) {
       width: 100%;
       padding: 2%;
    }
`
import styled from 'styled-components';


export const Container = styled.div`
    margin-left: 5em;
`

export const Button = styled.button`
    background: #DF1D3D;
    border-radius: 40px;
    color: #fff;
    
    label {
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        /* or 133% */
        display: flex;
        align-items: center;
        text-align: center;

        margin: 4px;
        color: #FFFFFF;
    }

    @media (max-width: 400px) {
        display: none; 
    }
`
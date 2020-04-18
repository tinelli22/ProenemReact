import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #EDF5FF;
    border-radius: 8px;
    margin-left: 10em;
    margin-right: 10em;
    margin-top: 2em;
    margin-bottom: 2em;

    .row {
        margin: 2px;
    }

    h5 {
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        /* or 137% */

        display: flex;
        align-items: center;

        color: #3A3E47;
    }
    

    @media (max-width: 400px) {
       
    }
`
export const Title = styled.div`
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height, or 150% */

    display: flex;
    align-items: center;
    text-align: center;

    /* Info-600 */

    color: #3A80CF;
`
import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: #EDF5FF;
    border-radius: 8px;
    margin-left: 5em;
    margin-right: 5em;
    margin-top: 2em;
    margin-bottom: 2em;

    .row {
        margin: 1em;
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
    margin-top: 1em;
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
export const Banner = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1em;
    background: #FAFAFC;
    box-shadow: 0px 10px 24px rgba(87, 29, 93, 0.25);
    border-radius: 4px;
    height: 100%;

    #top-back-one {
        position: absolute;
        height: 4%;
        background: #571D5D;
        transform: matrix(0.96, -0.27, -0.29, -0.96, 0, 0);
        text-align: center;
    }

    #top-back-two {
        position: absolute;
        height: 4%;
        background: #794A7D;
        transform: matrix(0.96, -0.27, -0.29, -0.96, 0, 0);
    }

    h2 {
       
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #FAFAFC;
    }

    #cont {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;

        color: #25272D;
    }

    #subcont {
        display: flex;
        flex-direction: row;
    }

    #desc {
        color: #979899;
        padding-left: 6px;
    }

    #line {
        height: 1px;
        width: 100%;
        border: 0.5px solid #F0F1F7;
    }

`
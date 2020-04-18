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
        margin-left: 1em;
        margin-right: 1em;
    }
`
export const Title = styled.div`
    padding: 20px;
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

    @media (max-width: 400px) {
        
    }
`
export const Banner = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    background: #FAFAFC;
    box-shadow: 0px 10px 24px rgba(87, 29, 93, 0.25);
    border-radius: 4px;
    height: 100%;
    width: 30em;

    #top-back-one {
        
        width: 100%;
        
    
    }

    #top-back-two {
        width: 100%;
    }

    h2 {
        position: absolute;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        color: #FAFAFC;
        margin: 1.5em;
    }

    #cont_class {
        margin-top: 15px;
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
        margin-left: 10px;
        color: #25272D;
    }

    #cont_price {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        font-family: Nunito;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        margin-left: 20px;
        margin-top: 30px;
        margin-bottom: 20px;
        color: #25272D;
    }

    #subcont {
        display: flex;
        flex-direction: row;
        align-items: center;
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

    #price {
        font-weight: bold;
        font-size: 36px;
        line-height: 28px;
        
        display: flex;
        align-items: center;
        color: #571D5D;
        margin-right: 10px;
    }

    #old_price {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.01em;
        text-decoration-line: line-through;
        color: #CED0DD;
    }

    @media (max-width: 400px) {
       padding-bottom: 20px;
    }

`

export const Button = styled.button`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    
    border: none;
    background: #28B583;
    border-radius: 4px;
    width: 100%;
    
    
    label {
        color: #fff;
        font-weight: bold;
    }

    @media (max-width: 400px) {
        margin-top: 1em;
        margin-left: 1em;
        margin-right: 1em;
    }
`
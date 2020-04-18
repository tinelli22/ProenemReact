import styled from 'styled-components';


export const Container = styled.div`

    padding-top: 8px;
    
    h2 {
        font-family: Nunito;
        margin-left: 5px;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        /* or 150% */
        /* Gray-900 */

        color: #25272D;
    }

    p {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #25272D;
    }

    p h4 {
        padding-top: 20px;
        font-family: Nunito;
    }

    #divider {
        border: 0.2px solid #9C9FB0;
        height: 1px;
        width: 100%;
    }

    @media (max-width: 400px) {
        p {
            margin: 4px;
        }
    }
`
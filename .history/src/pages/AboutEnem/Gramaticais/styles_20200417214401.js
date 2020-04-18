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

    p label {
        padding-top: 20px;
        font-family: Nunito;
        font-weight: bold;
    }

    #divider {
        border: 0.2px solid #9C9FB0;
        height: 1px;
        width: 100%;
    }

    #cont {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
    }

    #type {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #3A3E47;
    }

    #text {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 22px;
        color: #3A3E47;
    }

    @media (max-width: 400px) {
        p {
            margin-left: 15px;
            margin-right: 15px;
        }

        h2 {
            margin-left: 15px;
        }

        #conj {
            margin-left: 3px;
            margin-right: 3px;
        }
    }
`
export const Label = styled.label`
    color: #DF1D3D;
`
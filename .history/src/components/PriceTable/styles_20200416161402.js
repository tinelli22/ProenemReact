import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    #cont {
        background: #EDF5FF;
        border-radius: 8px;
        padding-left: 10em;
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
import styled from 'styled-components';

export const Container = styled.nav`


.breadcrumb {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;

    
    .breadcrumb-item a {
        color: #7C8195;
    }

    .breadcrumb-item a:active {
        color: #25272D;
    }

    
    .breadcrumb-item a:hover {
        text-decoration: none;
    }

    .breadcrumb-item+.breadcrumb-item::before {
        display: inline-block;
        padding-right: .5rem;
        color: #000;
        content: ">";
    }

}  
    @media (max-width: 400px) {
        .breadcrumb { display: none; }
    }
`;
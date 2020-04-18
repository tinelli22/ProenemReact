import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Container } from './styles'

export default function Breadcumbs({ content }) {
    return(
        <Breadcrumb>
        {
            content.map((item, i) => (
                <Container>
                    <BreadcrumbItem key={i} href={item.path}>{item.name}</BreadcrumbItem>
                </Container>
            ))
        }
        </Breadcrumb>
    )
}
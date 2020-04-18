import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Container } from './styles'

export default function Breadcumbs({ content }) {
    return(
        <Container>
            <Breadcrumb>
            {
                content.map((item, i) => (
                    <BreadcrumbItem key={i} href={item.path}>{item.name}</BreadcrumbItem>
                ))
            }
            </Breadcrumb>
        </Container>
    )
}
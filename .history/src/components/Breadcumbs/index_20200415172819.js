import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export default function Breadcumbs({ content }) {
    return(
        <Breadcrumb>
        {
            content.map((item, i) => (
                <Breadcrumb.Item key={i} href={item.path}>{item.name}</Breadcrumb.Item>
            ))
        }
        </Breadcrumb>
    )
}
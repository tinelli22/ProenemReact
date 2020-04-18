import React from 'react'
import Breadcumbs from '../../../components/Breadcumbs'

export default function Home() {

    return(
        <>
            <Breadcumbs content={getOptions} />
        </>
    )
}

const getOptions = [
    { name: 'Home', path: '/sobre/home' },
    { name: 'Classes gramaticais IV - As Conjunções', path: '/sobre/clas_gramaticais' },
]
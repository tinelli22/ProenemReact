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
    { name: 'Tudo sobre o Enem', path: ''},
    { name: 'Língua Portuguesa', path: ''},
    { name: 'Classes gramaticais IV - As Conjunções', path: '/sobre/clas_gramaticais' },
]
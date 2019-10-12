import React, { useEffect, useState } from 'react';
import api from '../apis';
import Banner from '../components/Banner';
import Kategori from '../components/Kategori';
import ProdukPromo from '../components/ProdukPromo';

const Home = () => {

    const [category, setCategory] = useState([])
    const [produkPromo, setProdukPromo] = useState([])

    useEffect(() => {
        api.home.getHomePage().then(response => {
            // console.log(response)
            setCategory(response.length > 0 ? response[0].data.category : [])
            setProdukPromo(response.length > 0 ? response[0].data.productPromo : [])
        }).catch(error => {
            console.log(error)
        })
    })

    return (
        <div>
            <Banner />

            <Kategori kategori={ category }/>

            <ProdukPromo produkPromo={ produkPromo }/>
        </div>
    )
}

export default Home
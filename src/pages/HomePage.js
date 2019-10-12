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
            if(response.length > 0) {
                setCategory(response[0].data.category)
                setProdukPromo(response[0].data.productPromo)
            }
        })
    }, [])

    return (
        <div>
            <Banner />

            <Kategori kategori={ category }/>

            <ProdukPromo produkPromo={ produkPromo }/>
        </div>
    )
}

export default Home
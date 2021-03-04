import React from 'react'

import Banner from '../components/Home/Banner'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'


const Home = () => {
    return (
        <div>
            <Banner />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
        </div>
    )
}


export default Home
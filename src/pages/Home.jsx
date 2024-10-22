import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'
import { motion } from 'framer-motion'
const Home = () => {
    return (
        <div initial={{ opacity: 0 }} animate={{ opacity: 1 }} end={{ opacity: 0 }} >
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsLetter />
        </div>
    )
}

export default Home
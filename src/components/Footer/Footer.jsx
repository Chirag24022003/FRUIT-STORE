import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLeaf, FaYoutube } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className='bg-blue-300  py-4'>
            <div className='container flex justify-between items-center '>
                {/* Logo Section */}
                <div className='text-2xl flex item gap-2 font-bold uppercase'>

                    <p className='text-primary'>FRUIT</p>
                    <p className='text-secondary'>STORE</p>
                    <FaLeaf className='text-green-700 ' />
                </div>
                {/*Socal icon Section */}
                <div className='text-3xl flex items-center gap-4 mt-4 text-black'>
                    <FaYoutube />
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />

                </div>
            </div>
        </footer>
    )
}

export default Footer
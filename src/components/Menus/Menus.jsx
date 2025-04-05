import React from 'react'
import Apple from "../../assets/fruits/apple.png";
import Orange from "../../assets/fruits/orange.png";
import Avocado from "../../assets/fruits/avocado.png";
import Cherries from "../../assets/fruits/cherries.png";
import { delay, motion } from 'framer-motion';
import { FadeLeft } from '../../utility/Animation';

const MenusData = [
    {
        id: 1,
        title: "Feresh Red Apples",
        link: "/",
        price: "$2.00",
        img: Apple,
        delay: 0.3,
    },

    {
        id: 2,
        title: "Fresh Oranges",
        link: "/",
        price: "$2.00",
        img: Orange,
        delay:0.6,
    },
    {
        id: 3,
        title: "Fresh Avocados",
        link: "/",
        price: "$4.00",
        img: Avocado,
        delay:0.9,
    },
    {
        id: 4,
        title: "Fresh Cheries",
        link: "/",
        price: "$4.00",
        img: Cherries,
        delay:1.2,
    },
]

const Menus = () => {
    return (
        <section>
            <div className='container pt-12 pb-20'>
                <motion.h1 
                initial={{opacity:0,x:-200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1, delay:3}}
                className=' text-2xl font-bold text-left pb-10 uppercase'>Our Menus</motion.h1>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {MenusData.map((menu) => (
                        <motion.div
                        variants={FadeLeft(menu.delay)}
                        initial="hidden"
                        whileInView={"visible"}
                        whileHover={{scale:1.1}}
                        className='bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,1.15)] flex flex-row justify-around items-center gap-3'>
                            <img src={menu.img} alt="" className='w-[60px] mb-4 scale-110 transform -translate-y-0' />

                            <div>
                                <h1 className='text-lg font-semibold'>{menu.title}</h1>
                                <p className=' text-lg font-semibold text-secondary'>{menu.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Menus
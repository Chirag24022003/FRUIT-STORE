import React from 'react'
import banner2 from "../../assets/fruits/banner.png";
import { motion, spring } from 'framer-motion';
import { FadeUp } from '../../utility/Animation';

const Banners2 = () => {
    return (
        <section className=' bg-secondary/20 rounded-3xl'>
            <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
                {/* Banner Image */}

                <div className='flex justify-center items-center '>
                    <motion.img

                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                        viewport={{ once: true }}
                        src={banner} alt="" className='w-[500px] md:max-[500px] h-full object-fill' />
                </div>

                {/* Brand Info */}
                <div className='flex flex-col justify-center'>
                    <div

                        className='text-center md:text-left space-y-4 lg:max-[400px]'>
                        <motion.h1
                            variants={FadeUp(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className='text-3xl lg:text-6xl font-bold uppercase'>Brand Info </ motion.h1>


                        <p>
                            {/* variants={FadeUp(0.7)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} */}
                            Total Produce TOP is the brand applied to only the most exceptional fruits by Total Produce, one of the world’s largest fresh produce marketers. The range of fruits  bearing the TOP brand extends from the more familiar to the truly exotic. It includes deciduous fruits like apples, pears and grapes as well as citrus fruits, tropical fruits- such as pineapples and melons, and a comprehensive selection of TOP branded exotic fruits including mangoes, papayas and avocadoes. A similarly diverse selection of salads  complements TOP branded organic produce to complete an extensive TOP range.
                        </p>
                        <p>
                            {/* variants={FadeUp(0.9)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }} */}
                            What is shared by all these products is the uncommon commitment to a superior eating experience. TOP fruits  are specially selected from superior growers, close to home and across the globe to arrive on the supermarket shelf in pristine condition. The result is the ripest, freshest, tastiest, most succulent fruit; a delicious, healthy treat- each & every time!</p>

                        {/* Button  Section  */}
                        <motion.div
                            variants={FadeUp(1.1)}
                            initial="hidden"
                            animate="visible"
                            className='flex justify-center md:justify-start relative'>

                            <button className='primary-btn ' >

                            Downlode App
                            </button>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banners2
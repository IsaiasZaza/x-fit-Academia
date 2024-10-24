"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center text-white">
            {/* Video de Fundo */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <iframe
                    className="absolute inset-0 w-full h-full object-cover"
                    src="https://www.youtube.com/embed/Z3TdDTG97j8?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=Z3TdDTG97j8"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Conteúdo */}
            <Fade duration={3000} triggerOnce>
                <motion.div 
                    initial={{ opacity: 0, y: -50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 2 }} // Animação mais lenta
                    className="relative text-center px-4 md:px-8"
                >
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-orange-100">
                        Bem-vindo à Xfit
                        <br />
                        <span className="text-orange-100 mt-24 lg:text-4xl md:text-3xl text-xl">
                            <Typewriter
                                words={['Treine Forte!', 'Supere Seus Limites!', 'Alcance Seus Objetivos!']}
                                loop={true}
                                cursor
                                cursorStyle=""
                                typeSpeed={70}  // Mais lento
                                deleteSpeed={50}  // Mais lento
                                delaySpeed={3500}  // Mais devagar na troca de frases
                            />
                        </span>
                    </h1>
                    <p className="text-sm md:text-lg lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-orange-100">
                        Estamos aqui para ajudar você a alcançar o corpo dos seus sonhos. Treine conosco e transforme sua vida hoje!
                    </p>
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, backgroundColor: '#D97706' }}
                        className="bg-gradient-to-r font-semibold from-yellow-500 to-yellow-900 text-white px-8 py-3 rounded-full hover:from-orange-700 hover:to-orange-900 transition-all transition-colors text-sm md:text-lg"
                    >
                        Comece Seu Treino Agora!
                    </motion.a>
                </motion.div>
            </Fade>
        </div>
    );
};

export default Banner;

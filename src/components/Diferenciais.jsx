"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Diferenciais = () => {
    // Ref para detectar quando a seção está na visualização
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5, when: "beforeChildren", staggerChildren: 0.3 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="py-16 bg-white lg:px-0 px-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-yellow-500 mb-6 text-center uppercase"
                    variants={cardVariants}
                >
                    Mais do que apenas uma academia
                </motion.h2>
                <motion.p
                    className="text-gray-600 text-lg mb-12 font-semibold lg:w-1/2 w-full text-center mx-auto"
                    variants={cardVariants}
                >
                    Oferecemos equipamentos de classe mundial, treinadores e aulas para ajudá-lo a alcançar seus objetivos de
                    condicionamento físico com facilidade. Nossa missão é cuidar de cada um dos nossos membros.
                </motion.p>
                <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <motion.div
                        className="p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <div className="mb-4">
                            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mx-auto">
                                <img src="/levanta.png" alt="Facilidades de Primeira" className="w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">
                            Instalações de Ponta
                        </h3>
                        <p className="text-gray-700 mb-4 text-center">
                            Oferecemos as melhores instalações para garantir que você tenha uma experiência incrível a cada treino.
                        </p>
                        <div className="text-center">
                            <a href="#" className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
                                Localização
                            </a>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <div className="mb-4">
                            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mx-auto">
                                <img src="/peso.png" alt="Diversas Aulas" className="w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">
                            Centenas de Aulas Diversas
                        </h3>
                        <p className="text-gray-700 mb-4 text-center">
                            Participe de nossas diversas aulas, adequadas para todos os níveis de condicionamento físico.
                        </p>
                        <div className="text-center">
                            <a href="#" className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
                                Localização
                            </a>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        className="p-8 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        variants={cardVariants}
                    >
                        <div className="mb-4">
                            <div className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full mx-auto">
                                <img src="/barra.png" alt="Treinadores" className="w-12 h-12" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-500 mb-4 text-center">
                            Treinadores Experientes
                        </h3>
                        <p className="text-gray-700 mb-4 text-center">
                            Conte com a orientação de nossos treinadores altamente qualificados para alcançar seus objetivos.
                        </p>
                        <div className="text-center">
                            <a href="#" className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50">
                                Localização
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Diferenciais;

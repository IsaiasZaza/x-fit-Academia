"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckIcon } from '@heroicons/react/solid';

const Planos = () => {
    // Ref para detectar quando a seção está na visualização
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, when: "beforeChildren", staggerChildren: 0.3 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="bg-black py-16"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-gray-50 mb-6 text-center"
                    variants={cardVariants}
                >
                    Escolha Seu Plano
                </motion.h2>
                <motion.p
                    className="text-gray-300 mb-12 text-center"
                    variants={cardVariants}
                >
                    Veja nossos planos e escolha aquele que melhor se adequa às suas necessidades.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Plano Black (Destaque) */}
                    <motion.div
                        className="relative p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:mx-0 mx-4"
                        variants={cardVariants}
                    >
                        <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 py-1 px-4 rounded-br-lg font-bold">
                            O mais vantajoso
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">Plano Anual</h3>
                        <p className="text-base mb-6 text-gray-300 text-center">
                            Treine em qualquer academia, no Brasil ou América Latina, com mais de 1.500 unidades disponíveis.
                        </p>
                        <div className="text-gray-50 text-center">
                            <div className="text-4xl font-extrabold mb-2">R$ 0,00*</div>
                            <p className="text-sm mb-4">no 1º mês, depois R$ 139,90/mês</p>
                        </div>
                        <ul className="mb-8 space-y-3 text-gray-300 text-center">
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Leve 5 amigos por mês para treinar
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-red-500 font-bold mr-2">✘</span>
                                Cadeira de massagem
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Área de musculação e aeróbicos
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="flex items-center bg-yellow-400 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                <CheckIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Assinar Plano
                            </button>
                        </div>
                    </motion.div>

                    {/* Plano Fit */}
                    <motion.div
                        className="p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:mx-0 mx-4"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">Plano Trimenstral</h3>
                        <p className="text-base mb-6 text-gray-300 text-center">
                            Nosso plano mais econômico, ideal para quem quer flexibilidade no treino.
                        </p>
                        <div className="text-gray-50 text-center">
                            <div className="text-4xl font-extrabold mb-2">R$ 0,00*</div>
                            <p className="text-sm mb-4">no 1º mês, depois R$ 99,90/mês</p>
                        </div>
                        <ul className="mb-8 space-y-3 text-gray-300 text-center">
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Leve 5 amigos por mês para treinar
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-red-500 font-bold mr-2">✘</span>
                                Cadeira de massagem
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Área de musculação e aeróbicos
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="flex items-center bg-yellow-400 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                <CheckIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                                Assinar Plano
                            </button>
                        </div>
                    </motion.div>

                    {/* Plano Smart */}
                    <motion.div
                        className="p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 lg:mx-0 mx-4"
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-semibold mb-4 text-yellow-400 text-center">Plano Mensal</h3>
                        <p className="text-base mb-6 text-gray-300 text-center">
                            Plano para quem quer treinar em uma academia de alto padrão, sem compromissos longos.
                        </p>
                        <div className="text-gray-50 text-center">
                            <div className="text-4xl font-extrabold mb-2">R$ 90,00*</div>
                            <p className="text-sm mb-4">no 1º mês, depois R$ 99,90/mês</p>
                        </div>
                        <ul className="mb-8 space-y-3 text-gray-300 text-center">
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Leve 5 amigos por mês para treinar
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-red-500 font-bold mr-2">✘</span>
                                Cadeira de massagem
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="text-green-400 font-bold mr-2">✔</span>
                                Área de musculação e aeróbicos
                            </li>
                        </ul>
                        <div className="flex justify-center">
                            <button className="flex items-center bg-yellow-400 text-gray-900 py-3 px-8 rounded-full font-semibold hover:bg-yellow-500 transition duration-300">
                                <CheckIcon className="h-5 w-5 mr-2" aria-hidden="true" /> 
                                Assinar Plano
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Planos;

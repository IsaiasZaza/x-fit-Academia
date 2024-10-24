"use client";

import React from "react";
import { motion } from "framer-motion";

const Localizacao = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                <motion.h2
                    className="text-4xl font-bold text-yellow-500 mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Localização da Academia
                </motion.h2>
                <motion.p
                    className="text-gray-600 text-lg mb-12 font-semibold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Venha nos visitar e conheça nossas instalações!
                </motion.p>
                <div className="relative">
                    {/* Mapa incorporado */}
                    <motion.iframe
                        className="w-full h-96 rounded-lg shadow-lg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27632.29448637226!2d-48.14507630878812!3d-15.890263206975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf2bf3350ac317b9!2sXfit!5e0!3m2!1spt-BR!2sbr!4v1698072270754!5m2!1spt-BR!2sbr"
                        title="Localização da Academia"
                        allowFullScreen
                        loading="lazy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                    <div className="absolute top-0 left-0 bg-yellow-400 text-gray-800 py-2 px-4 rounded-br-lg font-bold">
                        Academia Xfit
                    </div>
                </div>
                <div className="text-center mt-6">
                    <motion.a
                        href="https://www.google.com/maps/place/Xfit/@-15.8902632,-48.1413615,15z/data=!4m2!3m1!1s0x0:0xbf2bf3350ac317b9?sa=X&ved=1t:2428&ictx=111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Ver no Google Maps
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Localizacao;

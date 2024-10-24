"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-16 lg:px-1 px-1">
            <div className="container mx-auto flex flex-col items-center">
                {/* Espaço para o logo */}
                <div className="mb-8">
                    <img 
                        src="/Xfit.png" // Substitua pelo caminho do seu logo
                        alt="Logo da Academia" 
                        className="h-18" 
                    />
                </div>
                <div className="text-center mb-8">
                    <h3 className="text-xl font-bold text-yellow-500">Academia Xfit</h3>
                    <p className="mb-2">Transforme sua vida com saúde e bem-estar.</p>
                    <p>© {new Date().getFullYear()} Academia Xfit. Todos os direitos reservados.</p>
                    <p className="text-sm mt-2">Desenvolvido por Isaias</p> {/* Frase de crédito */}
                </div>
                {/* Redes sociais */}
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FontAwesomeIcon icon={faFacebookF} size="lg" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition duration-300">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

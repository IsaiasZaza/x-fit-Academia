"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from 'react-scroll';
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para detectar rolagem
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Variantes de animação para o menu móvel
    const variants = {
        open: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
        closed: { opacity: 0, height: 0, transition: { duration: 0.5 } }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Image
                        src="/menu2.png"
                        width={230}
                        height={150}
                        alt="Logo da Academia"
                        className={`transition-transform duration-300 ${isScrolled ? 'transform scale-90' : 'transform scale-100'}`}
                    />
                </div>
                <div className="hidden md:flex space-x-4 text-white font-semibold">
                    <ScrollLink to="sobre" smooth={true} duration={500} className="hover:text-orange-100 transition-colors">Sobre Nós</ScrollLink>
                    <ScrollLink to="planos" smooth={true} duration={500} className="hover:text-orange-100 transition-colors">Planos</ScrollLink>
                    <ScrollLink to="localizacao" smooth={true} duration={500} className="hover:text-orange-100 transition-colors">Localização</ScrollLink>
                    <ScrollLink to="contato" smooth={true} duration={500} className="hover:text-orange-100 transition-colors">Contato</ScrollLink>
                </div>
                <div className="md:hidden flex items-center">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-orange-100 transition-transform duration-200 transform hover:scale-110"
                    >
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            <motion.div 
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
                className="md:hidden bg-black text-white overflow-hidden"
                style={{ position: 'absolute', top: '64px', left: 0, right: 0 }}
            >
                <ScrollLink to="sobre" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300 transition-colors">Sobre Nós</ScrollLink>
                <ScrollLink to="planos" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300 transition-colors">Planos</ScrollLink>
                <ScrollLink to="localizacao" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300 transition-colors">Localização</ScrollLink>
                <ScrollLink to="contato" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300 transition-colors">Contato</ScrollLink>
            </motion.div>
        </nav>
    );
};

export default Navbar;

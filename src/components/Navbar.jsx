"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Função para lidar com a rolagem
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black opacity-80" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                    <Image
                        src="/menu.png"
                        width={300}
                        height={150}
                        alt="Logo da Academia"
                        className={`transition-transform duration-300 ${isScrolled ? 'transform scale-90' : 'transform scale-100'}`}
                    />
                </div>
                <div className="hidden md:flex space-x-4 text-white font-semibold">
                    <ScrollLink to="sobre" smooth={true} duration={500} className="hover:text-orange-100">Sobre Nós</ScrollLink>
                    <ScrollLink to="planos" smooth={true} duration={500} className="hover:text-orange-100">Planos</ScrollLink>
                    <ScrollLink to="localizacao" smooth={true} duration={500} className="hover:text-orange-100">Localização</ScrollLink>
                    <ScrollLink to="contato" smooth={true} duration={500} className="hover:text-orange-100">Contato</ScrollLink>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-orange-100">
                        {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black text-white transition-all">
                    <ScrollLink to="sobre" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300">Sobre Nós</ScrollLink>
                    <ScrollLink to="planos" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300">Planos</ScrollLink>
                    <ScrollLink to="localizacao" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300">Localização</ScrollLink>
                    <ScrollLink to="contato" smooth={true} duration={500} className="block px-4 py-2 hover:bg-pink-300">Contato</ScrollLink>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

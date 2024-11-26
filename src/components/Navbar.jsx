"use client"

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-5 py-3 bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        {/* Logo image can go here */}
      </div>
      <Link href="/" className="text-white text-base ml-5 hover:text-yellow-400 transition-colors">Home</Link>
      <Link href="/produtos" className="text-white text-base ml-5 hover:text-yellow-400 transition-colors">Produtos</Link>
      <Link href="/contato" className="text-white text-base ml-5 hover:text-yellow-400 transition-colors">Contato</Link>
      <Link href="/login" className="text-white text-base ml-5 hover:text-yellow-400 transition-colors">Login</Link>
      <Link href="/criar-conta" className="text-white text-base ml-5 hover:text-yellow-400 transition-colors">Criar Conta</Link>
    </nav>
  );
};

export default Navbar;

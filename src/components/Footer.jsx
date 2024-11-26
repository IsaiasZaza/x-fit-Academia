import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 font-roboto">
      <div className="flex flex-col md:flex-row justify-around pb-5 border-b border-gray-700">
        <div className="max-w-xs mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Institucional</h3>
          <ul className="space-y-2">
            <li>Sobre a Ótica Ramiro</li>
          </ul>
        </div>
        <div className="max-w-xs mb-5 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Categorias</h3>
          <ul className="space-y-2">
            <li>Lentes de contato</li>
          </ul>
        </div>
        <div className="max-w-xs">
          <h3 className="text-xl font-bold mb-4">Fale Conosco</h3>
          <ul className="space-y-2">
            <li>Atendimento ao cliente</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pt-5">
        <p className="mb-3 text-center text-sm">© 2024 Ótica Ramiro | Todos os direitos reservados</p>
        <div className="flex space-x-5 text-lg">
          <a href="https://www.instagram.com/oticasramiro" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Instagram</a>
          <a href="https://www.facebook.com/oticasramiro" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Facebook</a>
          <a href="https://www.twitter.com/oticasramiro" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

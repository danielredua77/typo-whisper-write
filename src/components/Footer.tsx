
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-keyboard-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="font-bold text-lg text-white">Keyboard</span>
            </div>
            <p className="text-sm mb-4">
              Teclado Android personalizado com IA para correção gramatical e de estilo em tempo real.
              Um projeto open-source para tornar a comunicação digital mais acessível e precisa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white">Recursos</a></li>
              <li><a href="#tech" className="hover:text-white">Tecnologia</a></li>
              <li><a href="#installation" className="hover:text-white">Instalação</a></li>
              <li><a href="#download" className="hover:text-white">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Documentação</a></li>
              <li><a href="#" className="hover:text-white">API</a></li>
              <li><a href="#" className="hover:text-white">Contribuir</a></li>
              <li><a href="#" className="hover:text-white">Reportar Bugs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Keyboard Project. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

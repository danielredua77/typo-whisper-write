
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-md px-6">
        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🔍</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! Parece que o teclado digitou o endereço errado.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-keyboard-accent hover:bg-blue-700 w-full">
            <Link to="/">
              <ArrowLeft className="mr-2" size={18} />
              Voltar ao Início
            </Link>
          </Button>
          <p className="text-sm text-gray-500">
            Se você estava tentando acessar informações sobre o projeto, tente clicar em 
            <Link to="/project" className="text-keyboard-accent hover:underline mx-1">Projeto</Link> 
            no menu de navegação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;


import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadSection = () => {
  const [showBackendOptions, setShowBackendOptions] = useState(false);

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Download</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Baixe a versão mais recente do AI Keyboard e do código fonte do backend
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Main download card */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-keyboard-accent text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">AI Keyboard</h3>
              <p>Versão 1.0.0</p>
            </div>
            
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <Check className="text-keyboard-accent shrink-0 mt-0.5 mr-2" size={18} />
                  <span>Teclado completo com correção gramatical</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-keyboard-accent shrink-0 mt-0.5 mr-2" size={18} />
                  <span>Integração com backend de IA</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-keyboard-accent shrink-0 mt-0.5 mr-2" size={18} />
                  <span>Método de entrada padrão do Android</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-keyboard-accent shrink-0 mt-0.5 mr-2" size={18} />
                  <span>Funciona em qualquer aplicativo</span>
                </li>
              </ul>
              
              <Button className="w-full py-6 text-lg bg-keyboard-accent hover:bg-blue-700">
                Download APK
              </Button>
              
              <div className="mt-4 text-sm text-center text-gray-500">
                Para Android 8.0 (Oreo) ou superior
              </div>
            </div>
          </div>
        </div>
        
        {/* Source code & backend card */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="bg-gray-800 text-white p-6 text-center">
              <h3 className="text-2xl font-bold mb-1">Código Fonte</h3>
              <p>Aplicativo & Backend</p>
            </div>
            
            <div className="p-6">
              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-2">Repositório Android</h4>
                <div className="flex">
                  <input 
                    type="text" 
                    value="github.com/ai-keyboard/android" 
                    readOnly 
                    className="flex-1 border border-gray-300 rounded-l p-2 bg-gray-50 text-sm"
                  />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Copiar
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Backend</h4>
                <div className="flex">
                  <input 
                    type="text" 
                    value="github.com/ai-keyboard/backend" 
                    readOnly 
                    className="flex-1 border border-gray-300 rounded-l p-2 bg-gray-50 text-sm"
                  />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Copiar
                  </Button>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full mt-4"
                  onClick={() => setShowBackendOptions(!showBackendOptions)}
                >
                  {showBackendOptions ? "Ocultar opções" : "Ver opções de backend"}
                </Button>
                
                {showBackendOptions && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div className="border rounded-md p-3">
                      <h5 className="font-medium mb-2">Python + Flask</h5>
                      <p className="text-sm text-gray-600 mb-2">Versão Python do backend com modelo spaCy</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Download ZIP
                      </Button>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <h5 className="font-medium mb-2">Node.js + Express</h5>
                      <p className="text-sm text-gray-600 mb-2">Versão JavaScript do backend com LanguageTool</p>
                      <Button variant="outline" size="sm" className="w-full">
                        Download ZIP
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Documentação Completa</h3>
        <div className="inline-flex space-x-4">
          <Button variant="outline">
            Guia de Desenvolvimento
          </Button>
          <Button variant="outline">
            API Reference
          </Button>
          <Button variant="outline">
            Troubleshooting
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

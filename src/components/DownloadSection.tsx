
import { useState } from "react";
import { Check, Download, Copy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DownloadSection = () => {
  const [showBackendOptions, setShowBackendOptions] = useState(false);
  const { toast } = useToast();

  const handleCopyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast({
          title: "Copiado!",
          description: `${label} foi copiado para a área de transferência.`,
        });
      },
      (err) => {
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar o texto.",
          variant: "destructive",
        });
        console.error("Erro ao copiar: ", err);
      }
    );
  };

  const handleDownloadAPK = () => {
    // Simulação de download - em um ambiente real, este seria o link para o arquivo APK
    toast({
      title: "Download iniciado",
      description: "O download do APK começará em instantes...",
    });
    
    // Em um cenário real, este seria o link direto para o arquivo APK
    const apkUrl = "/ai-keyboard-v1.0.0.apk";
    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = apkUrl;
      link.download = "ai-keyboard-v1.0.0.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1000);
  };

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
              
              <Button 
                className="w-full py-6 text-lg bg-keyboard-accent hover:bg-blue-700"
                onClick={handleDownloadAPK}
              >
                <Download size={20} />
                Download APK
              </Button>
              
              <div className="mt-4 text-sm text-center text-gray-500">
                Para Android 8.0 (Oreo) ou superior | Compatível com Samsung Galaxy A14
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                <p className="font-medium mb-1">Requisitos do sistema:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Android 8.0 (Oreo) ou superior</li>
                  <li>50MB de espaço de armazenamento</li>
                  <li>Permissão para instalar apps de fontes desconhecidas</li>
                </ul>
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
                  <Button 
                    variant="outline" 
                    className="rounded-l-none border-l-0"
                    onClick={() => handleCopyToClipboard("github.com/ai-keyboard/android", "URL do repositório Android")}
                  >
                    <Copy size={16} />
                    Copiar
                  </Button>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full mt-2 text-sm"
                  onClick={() => window.open("https://github.com/ai-keyboard/android", "_blank")}
                >
                  <ExternalLink size={16} />
                  Visitar Repositório
                </Button>
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
                  <Button 
                    variant="outline" 
                    className="rounded-l-none border-l-0"
                    onClick={() => handleCopyToClipboard("github.com/ai-keyboard/backend", "URL do repositório Backend")}
                  >
                    <Copy size={16} />
                    Copiar
                  </Button>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-2 text-sm"
                  onClick={() => window.open("https://github.com/ai-keyboard/backend", "_blank")}
                >
                  <ExternalLink size={16} />
                  Visitar Repositório
                </Button>
                
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
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open("/backend-python.zip", "_blank")}
                      >
                        <Download size={16} />
                        Download ZIP
                      </Button>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <h5 className="font-medium mb-2">Node.js + Express</h5>
                      <p className="text-sm text-gray-600 mb-2">Versão JavaScript do backend com LanguageTool</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open("/backend-nodejs.zip", "_blank")}
                      >
                        <Download size={16} />
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
        <div className="inline-flex flex-wrap gap-4 justify-center">
          <Button 
            variant="outline" 
            onClick={() => window.open("/docs/development-guide.pdf", "_blank")}
          >
            Guia de Desenvolvimento
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open("/docs/api-reference.pdf", "_blank")}
          >
            API Reference
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open("/docs/troubleshooting.pdf", "_blank")}
          >
            Troubleshooting
          </Button>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Compatibilidade com dispositivos</h3>
        <p className="mb-4">Este teclado foi testado nos seguintes dispositivos:</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-medium">Samsung</p>
            <p className="text-sm text-gray-600">Galaxy A14, S21, S22</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-medium">Xiaomi</p>
            <p className="text-sm text-gray-600">Redmi Note 9, 10, 11</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-medium">Motorola</p>
            <p className="text-sm text-gray-600">Moto G, Moto E</p>
          </div>
          <div className="bg-white p-3 rounded border border-gray-200">
            <p className="font-medium">Outros</p>
            <p className="text-sm text-gray-600">OnePlus, Realme, LG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

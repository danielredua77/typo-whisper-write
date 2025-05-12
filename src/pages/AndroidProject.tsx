
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Code, File, Terminal } from "lucide-react";

const AndroidProject = () => {
  const handleDownload = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-blue-50">
      <Header activeSection="project" setActiveSection={() => {}} />
      
      <main className="flex-grow">
        <section className="container max-w-6xl mx-auto pt-20 pb-16 px-4">
          <h1 className="text-4xl font-bold mb-6">Projeto AI Keyboard</h1>
          <p className="text-xl text-gray-600 mb-8">
            Documentação técnica e código-fonte para desenvolvedores
          </p>

          <Tabs defaultValue="android" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="android">Android</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="architecture">Arquitetura</TabsTrigger>
              <TabsTrigger value="tutorials">Tutoriais</TabsTrigger>
            </TabsList>
            
            <TabsContent value="android" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Projeto Android</h2>
                <p className="mb-4">
                  O teclado Android é implementado usando a API InputMethodService, que permite 
                  criar métodos de entrada personalizados. O código está estruturado da seguinte forma:
                </p>

                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 mb-6 font-mono text-sm overflow-x-auto">
                  <pre>
{`android/
├── app/
│   ├── src/main/
│   │   ├── java/com/aikeyboard/
│   │   │   ├── AIKeyboardService.kt
│   │   │   ├── KeyboardView.kt
│   │   │   ├── ApiClient.kt
│   │   │   └── CorrectionManager.kt
│   │   ├── res/
│   │   │   ├── layout/
│   │   │   ├── values/
│   │   │   └── xml/
│   │   └── AndroidManifest.xml
│   └── build.gradle
└── gradle/`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3">Componentes Principais</h3>
                <ul className="space-y-4 mb-6">
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold">AIKeyboardService.kt</h4>
                    <p>Classe principal que estende InputMethodService e implementa a lógica do teclado.</p>
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold">KeyboardView.kt</h4>
                    <p>Responsável pelo layout visual e pela renderização do teclado na tela.</p>
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold">ApiClient.kt</h4>
                    <p>Gerencia a comunicação com o backend de IA via HTTP.</p>
                  </li>
                  <li className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold">CorrectionManager.kt</h4>
                    <p>Processa e gerencia as sugestões de correção recebidas da IA.</p>
                  </li>
                </ul>

                <Separator className="my-6" />
                
                <h3 className="text-xl font-semibold mb-4">Downloads e Recursos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="p-6 h-auto flex items-start"
                    onClick={() => handleDownload("/downloads/android-source.zip")}
                  >
                    <div className="mr-3 mt-1">
                      <Code size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">Código-fonte completo</h4>
                      <p className="font-normal text-sm text-gray-600">
                        Projeto Android Studio pronto para compilação
                      </p>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="p-6 h-auto flex items-start"
                    onClick={() => handleDownload("/downloads/ai-keyboard.apk")}
                  >
                    <div className="mr-3 mt-1">
                      <Download size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">APK compilado</h4>
                      <p className="font-normal text-sm text-gray-600">
                        Versão 1.0.0, pronta para instalar
                      </p>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="p-6 h-auto flex items-start"
                    onClick={() => handleDownload("/downloads/android-docs.pdf")}
                  >
                    <div className="mr-3 mt-1">
                      <File size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">Documentação técnica</h4>
                      <p className="font-normal text-sm text-gray-600">
                        Guia detalhado da API e arquitetura
                      </p>
                    </div>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="p-6 h-auto flex items-start"
                    onClick={() => handleDownload("/downloads/build-instructions.pdf")}
                  >
                    <div className="mr-3 mt-1">
                      <Terminal size={24} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold">Instruções de compilação</h4>
                      <p className="font-normal text-sm text-gray-600">
                        Como configurar e compilar o projeto
                      </p>
                    </div>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="backend" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Backend com IA</h2>
                <p className="mb-4">
                  O backend pode ser implementado em Python (Flask) ou Node.js (Express), fornecendo uma API REST 
                  para análise e correção de texto em tempo real.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Versão Python (Flask)</h3>
                    <ul className="space-y-2 mb-4">
                      <li><strong>Dependências:</strong> Flask, spaCy, LanguageTool</li>
                      <li><strong>Endpoint principal:</strong> POST /corrigir</li>
                      <li><strong>Modelo de IA:</strong> spaCy para processamento de linguagem natural</li>
                    </ul>
                    <Button 
                      variant="outline"
                      onClick={() => handleDownload("/downloads/backend-python.zip")}
                    >
                      <Download size={18} className="mr-2" />
                      Download do código
                    </Button>
                  </div>

                  <div className="border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Versão Node.js (Express)</h3>
                    <ul className="space-y-2 mb-4">
                      <li><strong>Dependências:</strong> Express, languagetool-api</li>
                      <li><strong>Endpoint principal:</strong> POST /corrigir</li>
                      <li><strong>Modelo de IA:</strong> LanguageTool via API</li>
                    </ul>
                    <Button 
                      variant="outline"
                      onClick={() => handleDownload("/downloads/backend-nodejs.zip")}
                    >
                      <Download size={18} className="mr-2" />
                      Download do código
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-xl font-semibold mb-4">Exemplo de API</h3>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 font-mono text-sm overflow-x-auto mb-6">
                  <p className="text-gray-500 mb-2">// Requisição POST para /corrigir</p>
                  <pre>
{`{
  "texto": "Este é um exenplo de texto com erros ortográficos.",
  "idioma": "pt-BR",
  "estilo": "formal"
}`}
                  </pre>
                  
                  <p className="text-gray-500 mt-4 mb-2">// Resposta do servidor</p>
                  <pre>
{`{
  "correcoes": [
    {
      "original": "exenplo",
      "sugestao": "exemplo",
      "inicio": 12,
      "fim": 19,
      "tipo": "ortografia"
    }
  ],
  "textoCorrigido": "Este é um exemplo de texto com erros ortográficos."
}`}
                  </pre>
                </div>

                <Button 
                  className="w-full bg-keyboard-accent hover:bg-blue-700"
                  onClick={() => handleDownload("/downloads/api-documentation.pdf")}
                >
                  <File size={18} className="mr-2" />
                  Baixar documentação completa da API
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="architecture" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Arquitetura do Sistema</h2>
                <p className="mb-6">
                  O sistema AI Keyboard é composto por dois componentes principais que se comunicam 
                  através de uma API REST: o aplicativo Android e o servidor backend com IA.
                </p>

                <div className="w-full p-6 bg-blue-50 rounded-lg mb-8 overflow-hidden">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 md:w-5/12">
                      <h3 className="text-lg font-bold mb-2">Aplicativo Android</h3>
                      <ul className="space-y-1 text-sm mb-3">
                        <li>• InputMethodService</li>
                        <li>• KeyboardView</li>
                        <li>• Gerenciador de Sugestões</li>
                        <li>• Cliente HTTP</li>
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <div className="bg-blue-100 px-3 py-1 rounded text-center">
                        <p className="font-medium">API REST</p>
                        <p className="text-xs">HTTP/JSON</p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200 md:w-5/12">
                      <h3 className="text-lg font-bold mb-2">Backend com IA</h3>
                      <ul className="space-y-1 text-sm mb-3">
                        <li>• Flask/Express Server</li>
                        <li>• Modelo NLP</li>
                        <li>• Processamento de Texto</li>
                        <li>• JSON API</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">Fluxo de Dados</h3>
                <ol className="space-y-6 mb-6">
                  <li className="flex gap-4">
                    <div className="bg-blue-200 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Digitação e Captura</h4>
                      <p className="text-gray-600">O usuário digita texto usando o teclado AI Keyboard, que captura o texto digitado.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-blue-200 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Envio ao Backend</h4>
                      <p className="text-gray-600">Após o usuário digitar uma palavra/frase e pressionar espaço, o texto é enviado ao backend via API REST.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-blue-200 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Processamento com IA</h4>
                      <p className="text-gray-600">O backend processa o texto usando modelos de IA (spaCy ou LanguageTool) para identificar erros e gerar correções.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-blue-200 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Resposta com Sugestões</h4>
                      <p className="text-gray-600">O backend envia as sugestões de correção em formato JSON de volta ao aplicativo.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-blue-200 rounded-full h-6 w-6 flex-shrink-0 flex items-center justify-center font-bold">5</div>
                    <div>
                      <h4 className="font-semibold">Exibição de Sugestões</h4>
                      <p className="text-gray-600">O teclado exibe as sugestões na barra superior, onde o usuário pode tocar para aplicar as correções.</p>
                    </div>
                  </li>
                </ol>

                <Button 
                  onClick={() => handleDownload("/downloads/technical-architecture.pdf")}
                  className="w-full"
                >
                  Baixar diagrama técnico completo
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tutorials" className="mt-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Tutoriais e Guias</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Para Usuários</h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Como instalar o teclado no Android</h4>
                          <p className="text-sm text-gray-600">Guia passo a passo com imagens</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Configurando o backend local</h4>
                          <p className="text-sm text-gray-600">Instruções para computador e celular na mesma rede</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Usando as sugestões gramaticais</h4>
                          <p className="text-sm text-gray-600">Como aproveitar ao máximo as correções</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Solução de problemas comuns</h4>
                          <p className="text-sm text-gray-600">Respostas para dúvidas frequentes</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-5">
                    <h3 className="text-xl font-semibold mb-3">Para Desenvolvedores</h3>
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Compilando o código-fonte</h4>
                          <p className="text-sm text-gray-600">Setup do ambiente de desenvolvimento</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Implementando novos modelos de IA</h4>
                          <p className="text-sm text-gray-600">Como adicionar modelos personalizados</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Customizando o layout do teclado</h4>
                          <p className="text-sm text-gray-600">Guia para personalização da interface</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block p-3 bg-gray-50 rounded hover:bg-gray-100">
                          <h4 className="font-medium">Contribuindo com o projeto</h4>
                          <p className="text-sm text-gray-600">Como enviar pull requests e melhorias</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <Separator className="my-6" />

                <h3 className="text-xl font-semibold mb-4">Vídeos tutoriais</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-black aspect-video flex items-center justify-center text-white">
                      Vídeo: Instalação
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Instalação e Configuração</h4>
                      <p className="text-sm text-gray-600">5:34 min</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-black aspect-video flex items-center justify-center text-white">
                      Vídeo: Backend
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Configurando o Backend</h4>
                      <p className="text-sm text-gray-600">7:21 min</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-black aspect-video flex items-center justify-center text-white">
                      Vídeo: Uso
                    </div>
                    <div className="p-3">
                      <h4 className="font-medium">Uso no Dia a Dia</h4>
                      <p className="text-sm text-gray-600">4:45 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AndroidProject;

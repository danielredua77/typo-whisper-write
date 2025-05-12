
const TechStack = () => {
  const technologies = [
    {
      category: "Android",
      items: [
        { name: "Kotlin", description: "Linguagem moderna e segura para Android" },
        { name: "InputMethodService", description: "API do Android para métodos de entrada personalizados" },
        { name: "Android SDK", description: "Ferramentas de desenvolvimento para Android" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Python / Flask", description: "Framework web leve para a API de correção" },
        { name: "Node.js / Express", description: "Alternative: Runtime JS para backend rápido" },
        { name: "RESTful API", description: "Comunicação padronizada cliente-servidor" },
      ]
    },
    {
      category: "Inteligência Artificial",
      items: [
        { name: "spaCy / NLTK", description: "Processamento de linguagem natural" },
        { name: "LanguageTool", description: "Verificação gramatical open source" },
        { name: "Transformers leves", description: "Modelos de IA para correção contextual" },
      ]
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tecnologias Utilizadas</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nossa solução combina tecnologias modernas para criar uma experiência de digitação inteligente
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow">
            <div className="bg-blue-600 text-white py-4 px-6">
              <h3 className="text-xl font-semibold">{tech.category}</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {tech.items.map((item, itemIndex) => (
                <li key={itemIndex} className="p-6">
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Arquitetura do Sistema</h3>
        
        <div className="bg-white rounded-lg p-8 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-6">
            {/* Android App */}
            <div className="flex-1 p-4 border border-gray-300 rounded-lg min-w-48">
              <div className="text-center mb-3 font-medium">Teclado Android</div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>- Interface de usuário</p>
                <p>- Detecção de texto</p>
                <p>- Envio à API</p>
                <p>- Exibição de sugestões</p>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
            </div>

            {/* Backend */}
            <div className="flex-1 p-4 border border-gray-300 rounded-lg min-w-48">
              <div className="text-center mb-3 font-medium">API Backend</div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>- Recebe requisições</p>
                <p>- Processa texto</p>
                <p>- Analisa com IA</p>
                <p>- Retorna sugestões</p>
              </div>
            </div>

            {/* Arrows */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
              <div className="w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </div>
            </div>

            {/* AI Model */}
            <div className="flex-1 p-4 border border-gray-300 rounded-lg min-w-48">
              <div className="text-center mb-3 font-medium">Modelo de IA</div>
              <div className="text-sm text-gray-600 space-y-2">
                <p>- Análise gramatical</p>
                <p>- Correção ortográfica</p>
                <p>- Identificação contextual</p>
                <p>- Geração de sugestões</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

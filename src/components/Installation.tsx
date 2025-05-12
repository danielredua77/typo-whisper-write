
const Installation = () => {
  const installSteps = [
    {
      title: "Baixe o APK",
      description: "Faça o download do arquivo de instalação do teclado na seção de download abaixo.",
      icon: "📥",
    },
    {
      title: "Instale o aplicativo",
      description: "Abra o arquivo APK e siga as instruções para instalar o teclado no seu dispositivo Android.",
      icon: "📲",
    },
    {
      title: "Ative o teclado",
      description: "Vá para Configurações > Sistema > Idiomas e entrada > Teclado virtual > Gerenciar teclados.",
      icon: "⚙️",
    },
    {
      title: "Selecione o teclado",
      description: "Ative o 'AI Keyboard' na lista de teclados disponíveis.",
      icon: "✅",
    },
    {
      title: "Configure o backend",
      description: "Abra o aplicativo AI Keyboard e configure o endereço IP e porta do servidor backend.",
      icon: "🔧",
    },
    {
      title: "Comece a usar",
      description: "Selecione o AI Keyboard como seu método de entrada padrão em qualquer aplicativo.",
      icon: "🚀",
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Guia de Instalação</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Siga estas instruções para instalar e configurar o teclado AI em seu dispositivo Android
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {installSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl mr-3">
                {step.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Configuração do Backend</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold mb-4">Opção 1: Backend Local</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Baixe o código fonte do backend</li>
              <li>Instale as dependências necessárias</li>
              <li>Execute o servidor na sua máquina local</li>
              <li>Configure o teclado para se conectar ao IP da sua máquina</li>
              <li>Certifique-se de que o celular e o computador estejam na mesma rede Wi-Fi</li>
            </ol>

            <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200 font-mono text-sm overflow-x-auto">
              <pre>$ cd backend
$ pip install -r requirements.txt
$ python app.py</pre>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="text-lg font-semibold mb-4">Opção 2: Backend em Nuvem</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Faça o deploy do backend em um serviço de hospedagem</li>
              <li>Recomendamos: Render, Railway ou Vercel</li>
              <li>Configure suas variáveis de ambiente</li>
              <li>Use a URL fornecida pelo serviço no app de teclado</li>
              <li>Certifique-se de usar HTTPS para conexões seguras</li>
            </ol>

            <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200 font-mono text-sm overflow-x-auto">
              <pre>$ git push render main
# Ou qualquer outro serviço de hospedagem</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;

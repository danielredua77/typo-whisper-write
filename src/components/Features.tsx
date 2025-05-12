
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Correção Gramatical",
      description: "Identifica e corrige automaticamente erros gramaticais em tempo real enquanto você digita.",
      icon: "📝",
    },
    {
      title: "Correção Ortográfica",
      description: "Detecta palavras com erros de ortografia e sugere as correções apropriadas.",
      icon: "✓",
    },
    {
      title: "Sugestões de Estilo",
      description: "Melhora a clareza e a elegância do seu texto com sugestões estilísticas contextuais.",
      icon: "💡",
    },
    {
      title: "Integração com IA",
      description: "Utiliza modelos avançados de inteligência artificial para compreender o contexto das suas mensagens.",
      icon: "🧠",
    },
    {
      title: "Funciona em Todo Sistema",
      description: "Utilize em qualquer aplicativo Android como método de entrada padrão do sistema.",
      icon: "📱",
    },
    {
      title: "Interface Intuitiva",
      description: "Design simples e funcional que não interfere na sua experiência de digitação.",
      icon: "👆",
    },
  ];

  return (
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Recursos Principais</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Nosso teclado inteligente foi projetado para ajudar você a se comunicar com mais clareza e confiança
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-xl">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 bg-blue-50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Benefícios para todos os usuários</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Ideal para pessoas com autismo, TDAH ou dificuldades cognitivas</p>
            </div>
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Ajuda estudantes e profissionais a escreverem com maior precisão</p>
            </div>
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Perfeito para não-nativos aprendendo português</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Correção contextual inteligente, não apenas ortográfica</p>
            </div>
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Melhora a comunicação escrita em mensagens, emails e redes sociais</p>
            </div>
            <div className="flex items-start">
              <Check className="text-keyboard-accent mt-1 mr-3 shrink-0" />
              <p>Aumenta a confiança ao escrever textos importantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

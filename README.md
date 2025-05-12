
# AI Keyboard - Teclado Android com correção gramatical por IA

Este projeto consiste em um teclado Android personalizado com integração de inteligência artificial para correção gramatical e de estilo em tempo real. O sistema é dividido em duas partes principais: o aplicativo Android (teclado) e o backend com IA para processamento de texto.

## Estrutura do projeto

```
project/
├── android/              # Código fonte do aplicativo Android (teclado)
│   ├── app/             # Módulo principal do aplicativo
│   │   ├── src/main/    
│   │   │   ├── java/    # Código Kotlin/Java
│   │   │   ├── res/     # Recursos (layouts, strings, etc)
│   │   │   └── AndroidManifest.xml
│   └── build.gradle     # Configuração de build
└── backend/             # Servidor com IA para correção de texto
    ├── app.py           # Aplicação Flask (versão Python)
    ├── server.js        # Aplicação Express (versão Node.js)
    ├── requirements.txt # Dependências Python
    └── package.json     # Dependências Node.js
```

## Aplicativo Android (Teclado)

O teclado Android é implementado usando a API `InputMethodService` do Android, que permite criar métodos de entrada personalizados. O aplicativo captura o texto digitado pelo usuário, envia para análise no backend e exibe sugestões de correção.

### Principais componentes:

1. `AIKeyboardService.kt`: Implementação do serviço de teclado
2. `KeyboardView.kt`: Layout e renderização do teclado
3. `ApiClient.kt`: Cliente para comunicação com o backend
4. `CorrectionManager.kt`: Gerenciamento de sugestões e correções

### Características do teclado:

- Layout padrão com teclas QWERTY
- Barra de sugestões para exibir correções
- Configuração do servidor (endereço IP e porta)
- Suporte a diferentes tipos de entrada de texto
- Detecção de espaço para análise de frases

## Backend com IA

O backend pode ser implementado em Python (Flask) ou Node.js (Express), fornecendo uma API REST para análise e correção de texto. O sistema usa modelos de linguagem para identificar e corrigir erros gramaticais, ortográficos e de estilo.

### Versão Python (Flask):

- **Dependências**: Flask, spaCy, LanguageTool
- **Endpoint principal**: `POST /corrigir`
- **Modelo de IA**: spaCy para processamento de linguagem natural

### Versão Node.js (Express):

- **Dependências**: Express, languagetool-api
- **Endpoint principal**: `POST /corrigir`
- **Modelo de IA**: LanguageTool via API para verificação gramatical

## Instruções de instalação

### Compilação e instalação do teclado

1. **Configurar o ambiente de desenvolvimento Android:**
   - Instale o Android Studio
   - Configure o SDK Android

2. **Compilar o aplicativo:**
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

3. **Instalar o APK:**
   - Transfira o arquivo APK gerado para o dispositivo Android
   - Instale o APK (permita a instalação de fontes desconhecidas nas configurações)

4. **Ativar o teclado:**
   - Vá para Configurações > Sistema > Idiomas e entrada > Teclado virtual
   - Selecione "Gerenciar teclados"
   - Ative "AI Keyboard"
   - Selecione o AI Keyboard como método de entrada padrão

### Configuração do backend

1. **Versão Python:**
   ```bash
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

2. **Versão Node.js:**
   ```bash
   cd backend
   npm install
   node server.js
   ```

3. **Configurar o teclado para acessar o backend:**
   - Abra o aplicativo AI Keyboard
   - Acesse as configurações
   - Insira o endereço IP e porta do servidor backend
   - Teste a conexão

## Uso

1. Ative o teclado AI Keyboard em qualquer aplicativo de texto
2. Digite normalmente
3. Quando pressionar espaço após uma palavra ou frase, o teclado analisará o texto
4. Se houver sugestões de correção, elas aparecerão na barra superior do teclado
5. Toque na sugestão para aplicar a correção

## Recursos adicionais

- [APK pré-compilado para download direto](https://github.com/ai-keyboard/releases)
- [Documentação detalhada da API](https://github.com/ai-keyboard/docs)
- [Guia para desenvolvedores](https://github.com/ai-keyboard/contributors)

## Contribuindo

Contribuições são bem-vindas! Por favor, consulte o guia para desenvolvedores para mais informações sobre como contribuir para o projeto.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

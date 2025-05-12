
import { useState, useEffect } from "react";

const KeyboardPreview = () => {
  const [typedText, setTypedText] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Sample keyboard rows
  const keyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["⇧", "z", "x", "c", "v", "b", "n", "m", "⌫"],
    ["123", ",", " ", ".", "↵"],
  ];

  // Simulation of typing and getting suggestions
  useEffect(() => {
    if (typedText === "Eu fuiz ao") {
      setTimeout(() => {
        setSuggestion("Eu fui ao");
        setShowSuggestion(true);
      }, 800);
    } else if (typedText === "Nós vamos fazer uma reuniao") {
      setTimeout(() => {
        setSuggestion("Nós vamos fazer uma reunião");
        setShowSuggestion(true);
      }, 800);
    } else {
      setShowSuggestion(false);
    }
  }, [typedText]);

  // Animation for automated typing demonstration
  useEffect(() => {
    const texts = [
      "Eu fuiz ao",
      "Eu fui ao mercado",
      "",
      "Nós vamos fazer uma reuniao",
      "Nós vamos fazer uma reunião hoje",
      "",
    ];
    
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    const typeText = () => {
      if (currentTextIndex >= texts.length) {
        currentTextIndex = 0;
      }
      
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setTypedText(currentFullText.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        typingSpeed = 50;
        
        if (currentCharIndex <= 0) {
          isDeleting = false;
          currentTextIndex++;
          typingSpeed = 1000; // Pause before typing next text
        }
      } else {
        setTypedText(currentFullText.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingSpeed = 150;
        
        if (currentCharIndex >= currentFullText.length) {
          isDeleting = true;
          typingSpeed = 2000; // Pause before deleting
        }
      }
    };
    
    setIsTyping(true);
    const typingInterval = setInterval(typeText, typingSpeed);
    
    return () => {
      clearInterval(typingInterval);
      setIsTyping(false);
    };
  }, []);

  const handleApplySuggestion = () => {
    setTypedText(suggestion);
    setShowSuggestion(false);
  };

  return (
    <div className="relative max-w-md mx-auto">
      {/* Phone frame */}
      <div className="border-8 border-gray-800 rounded-3xl overflow-hidden shadow-xl">
        {/* App preview */}
        <div className="bg-gray-100 h-80">
          {/* App statusbar */}
          <div className="bg-gray-800 text-white text-xs px-4 py-1 flex justify-between">
            <span>9:41</span>
            <div className="flex space-x-1">
              <span>📶</span>
              <span>🔋</span>
            </div>
          </div>
          
          {/* Text editor area */}
          <div className="bg-white h-full p-3 text-base">
            <div className={`min-h-[6rem] ${isTyping ? 'cursor-pulse' : ''}`}>
              {typedText}
              {isTyping && <span className="inline-block w-0.5 h-4 bg-black animate-pulse ml-0.5"></span>}
            </div>
          </div>
        </div>
        
        {/* Keyboard */}
        <div className="bg-keyboard text-keyboard-text">
          {/* Suggestion bar */}
          <div className="h-12 border-t border-gray-300 bg-white flex items-center px-2">
            {showSuggestion ? (
              <div className="flex-1 px-2">
                <button 
                  onClick={handleApplySuggestion}
                  className="py-1.5 px-3 bg-keyboard-suggestion text-keyboard-accent rounded-full text-sm font-medium animate-fade-in"
                >
                  {suggestion}
                </button>
              </div>
            ) : (
              <div className="flex-1 px-2 text-sm text-gray-500">
                Sugestões aparecerão aqui
              </div>
            )}
          </div>
          
          {/* Keyboard rows */}
          {keyboardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center">
              {row.map((key, keyIndex) => (
                <div 
                  key={keyIndex} 
                  className={`
                    m-1 rounded-md flex items-center justify-center bg-keyboard-key shadow-sm
                    ${key === " " ? "w-32" : "w-8"} 
                    ${key === "⇧" || key === "⌫" || key === "123" || key === "↵" ? "w-12" : ""}
                    h-10 text-sm font-medium
                  `}
                >
                  {key}
                </div>
              ))}
            </div>
          ))}
          
          {/* Home indicator */}
          <div className="h-6 flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardPreview;

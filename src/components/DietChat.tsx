import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Clock, Utensils, Sparkles } from "lucide-react";
import { diseases, Disease } from "@/data/diseases";

interface Message {
  id: string;
  type: "user" | "bot";
  content: string;
  disease?: Disease;
  timestamp: Date;
}

interface DietChatProps {
  onViewFullPlan: (disease: Disease) => void;
}

const DietChat = ({ onViewFullPlan }: DietChatProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content: "Hello! 👋 I'm your diet assistant. Tell me about your health condition and I'll recommend a personalized diet plan with meal timings. Try asking about: Diabetes, Heart Disease, Hypertension, PCOS, Anemia, or any other condition!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findDisease = (query: string): Disease | null => {
    const lowerQuery = query.toLowerCase();
    return diseases.find(
      (d) =>
        d.name.toLowerCase().includes(lowerQuery) ||
        d.id.toLowerCase().includes(lowerQuery) ||
        lowerQuery.includes(d.name.toLowerCase()) ||
        lowerQuery.includes(d.id.toLowerCase())
    ) || null;
  };

  const generateResponse = (disease: Disease): string => {
    return `Great! I found the diet plan for **${disease.name}** ${disease.icon}

${disease.description}

**🍽️ Here's your personalized meal schedule:**

${disease.mealPlan.map((meal) => `⏰ **${meal.time} - ${meal.meal}**
   ${meal.foods.join(", ")}
   _${meal.notes}_`).join("\n\n")}

**✅ Quick Tips:**
${disease.tips.slice(0, 2).map((tip) => `• ${tip}`).join("\n")}

Would you like to see the full diet plan with all foods to eat and avoid?`;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundDisease = findDisease(input);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: "bot",
      content: foundDisease
        ? generateResponse(foundDisease)
        : `I couldn't find a specific diet plan for "${input}". 

Here are the conditions I can help with:
${diseases.map((d) => `• ${d.icon} ${d.name}`).join("\n")}

Please try again with one of these conditions, or describe your symptoms!`,
      disease: foundDisease || undefined,
      timestamp: new Date(),
    };

    setIsTyping(false);
    setMessages((prev) => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickSuggestions = ["Diabetes", "Heart Disease", "PCOS", "Anemia"];

  return (
    <div className="flex flex-col h-[600px] bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-primary/10 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Diet Assistant</h3>
            <p className="text-sm text-muted-foreground">Ask me about any health condition</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                message.type === "user" ? "bg-primary" : "bg-secondary"
              }`}
            >
              {message.type === "user" ? (
                <User className="h-4 w-4 text-primary-foreground" />
              ) : (
                <Bot className="h-4 w-4 text-secondary-foreground" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.type === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              <div className="whitespace-pre-wrap text-sm">
                {message.content.split(/(\*\*.*?\*\*|_.*?_)/g).map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                  }
                  if (part.startsWith("_") && part.endsWith("_")) {
                    return <em key={i} className="text-muted-foreground">{part.slice(1, -1)}</em>;
                  }
                  return part;
                })}
              </div>
              {message.disease && (
                <button
                  onClick={() => onViewFullPlan(message.disease!)}
                  className="mt-3 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Utensils className="h-4 w-4" />
                  View Full Diet Plan
                </button>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
              <Bot className="h-4 w-4 text-secondary-foreground" />
            </div>
            <div className="bg-secondary rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick suggestions */}
      <div className="px-4 py-2 border-t border-border">
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setInput(suggestion)}
              className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a health condition..."
            className="flex-1 bg-secondary rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietChat;

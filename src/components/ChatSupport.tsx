'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Phone, X, Send, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from './ui/badge';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: "How do I book a photographer?",
    answer: "You can book a photographer directly from our homepage! Select whether it's for personal or business use, choose a category, describe the vibe, and click 'Find Photographers Now' to see available professionals."
  },
  {
    question: "What is the 10-minute session?",
    answer: "Our signature 10-minute session is a quick, on-demand photo shoot. A professional photographer comes to your location for a fast, high-quality session, perfect for capturing moments on the fly."
  },
  {
    question: "Can I cancel a booking?",
    answer: "Yes, you can cancel a booking from the confirmation page before you initiate the session. If the photographer is already on their way, please contact customer support immediately."
  },
  {
    question: "How do I pay?",
    answer: "Payment is handled securely through the app after your session is complete. We accept all major credit cards and digital wallets."
  }
];

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today? You can ask me a question or select one of the FAQs below.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleFaqClick = (question: string, answer: string) => {
    setMessages(prev => [
      ...prev,
      { id: Date.now(), text: question, sender: 'user' }
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: answer, sender: 'bot' }
      ]);
    }, 1500);
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
        setIsTyping(false);
        const botResponse = { id: Date.now() + 1, text: "Thanks for your message. A support agent will be with you shortly to assist with your query.", sender: 'bot' as const };
        setMessages(prev => [...prev, botResponse]);
    }, 2000);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-[calc(100vw-2rem)] max-w-sm"
            >
              <Card className="flex flex-col h-[60vh] shadow-2xl border-primary/20 bg-card/80 backdrop-blur-lg">
                <CardHeader className="flex flex-row items-center justify-between bg-primary/10 p-4">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-primary rounded-full text-primary-foreground">
                        <Bot className="w-6 h-6" />
                     </div>
                    <div>
                      <CardTitle className="text-lg font-headline">Zypix Support</CardTitle>
                      <p className="text-xs text-muted-foreground">We're here to help</p>
                    </div>
                  </div>
                   <div className="flex items-center gap-2">
                     <Button variant="ghost" size="icon" className="h-8 w-8">
                       <Phone className="w-4 h-4"/>
                       <span className="sr-only">Call support</span>
                     </Button>
                     <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsOpen(false)}>
                       <X className="w-4 h-4"/>
                       <span className="sr-only">Close chat</span>
                     </Button>
                   </div>
                </CardHeader>
                <CardContent className="flex-grow p-4 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={cn("flex items-end gap-2", msg.sender === 'user' ? 'justify-end' : 'justify-start')}>
                      {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Bot className="w-5 h-5 text-primary"/></div>}
                      <div className={cn(
                        "max-w-[80%] rounded-lg px-4 py-2 text-sm",
                        msg.sender === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-br-none' 
                          : 'bg-secondary text-secondary-foreground rounded-bl-none'
                      )}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                      <div className="flex items-end gap-2 justify-start">
                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0"><Bot className="w-5 h-5 text-primary"/></div>
                         <div className="bg-secondary rounded-lg px-4 py-3 rounded-bl-none">
                            <div className="flex items-center gap-1">
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-muted-foreground rounded-full animate-bounce"></span>
                            </div>
                         </div>
                      </div>
                  )}
                  <div ref={chatEndRef} />
                </CardContent>
                <CardFooter className="p-2 border-t flex-col items-start gap-2">
                   <div className="flex flex-wrap gap-2 px-2">
                       {faqs.map((faq) => (
                         <Badge
                           key={faq.question}
                           variant="outline"
                           className="cursor-pointer hover:bg-accent"
                           onClick={() => handleFaqClick(faq.question, faq.answer)}
                         >
                           {faq.question}
                         </Badge>
                       ))}
                   </div>
                   <form onSubmit={handleSendMessage} className="w-full flex gap-2 pt-2">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="bg-background"
                      />
                      <Button type="submit" size="icon" className="bg-accent text-accent-foreground shrink-0">
                        <Send className="w-4 h-4"/>
                      </Button>
                   </form>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        >
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90 shadow-lg"
            >
                {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
            </Button>
        </motion.div>
      </div>
    </>
  );
}

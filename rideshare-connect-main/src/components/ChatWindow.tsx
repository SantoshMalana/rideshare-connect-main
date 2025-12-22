'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, User, Clock, Loader2 } from 'lucide-react';
import { sendMessage, getChatHistory } from '@/actions/chat';
import Pusher from 'pusher-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
    id?: string;
    senderEmail: string;
    content: string;
    timestamp: Date;
}

interface ChatWindowProps {
    currentUserEmail: string;
    otherUserEmail: string;
    otherUserName: string;
    rideId?: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatWindow({
    currentUserEmail,
    otherUserEmail,
    otherUserName,
    rideId,
    isOpen,
    onClose
}: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Fetch initial chat history
    useEffect(() => {
        if (isOpen) {
            const loadHistory = async () => {
                setIsLoading(true);
                const history = await getChatHistory(otherUserEmail, rideId);
                setMessages(history);
                setIsLoading(false);
            };
            loadHistory();
        }
    }, [isOpen, otherUserEmail, rideId]);

    // Setup Pusher for real-time updates
    useEffect(() => {
        if (!isOpen) return;

        const pusherKey = process.env.NEXT_PUBLIC_PUSHER_KEY;
        const pusherCluster = process.env.NEXT_PUBLIC_PUSHER_CLUSTER;

        if (!pusherKey || !pusherCluster) {
            console.warn('Pusher keys missing. Real-time chat will not work.');
            return;
        }

        const pusher = new Pusher(pusherKey, {
            cluster: pusherCluster,
        });

        const channelName = [currentUserEmail, otherUserEmail].sort().join('-').replace(/[@.]/g, '_');
        const channel = pusher.subscribe(channelName);

        channel.bind('new-message', (data: any) => {
            // Only add if it's not from the current sender (to avoid duplicates if we add optimistically)
            if (data.senderEmail !== currentUserEmail) {
                setMessages((prev) => [...prev, {
                    senderEmail: data.senderEmail,
                    content: data.content,
                    timestamp: new Date(data.timestamp),
                }]);
            }
        });

        return () => {
            pusher.unsubscribe(channelName);
            pusher.disconnect();
        };
    }, [isOpen, currentUserEmail, otherUserEmail]);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMessage.trim() || isSending) return;

        const msgContent = newMessage.trim();
        setNewMessage('');
        setIsSending(true);

        // Optimistic update
        const tempMsg: Message = {
            senderEmail: currentUserEmail,
            content: msgContent,
            timestamp: new Date(),
        };
        setMessages((prev) => [...prev, tempMsg]);

        const result = await sendMessage(otherUserEmail, msgContent, rideId);

        if (!result.success) {
            // Rollback optimistic update or show error
            console.error('Failed to send message:', result.message);
        }
        setIsSending(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 100, scale: 0.9 }}
                    className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-100"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                <User className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg leading-tight">{otherUserName}</h3>
                                <div className="text-xs text-blue-100 flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                    Online
                                </div>
                            </div>
                        </div>
                        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar"
                    >
                        {isLoading ? (
                            <div className="h-full flex items-center justify-center">
                                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                            </div>
                        ) : messages.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-center px-8">
                                <div className="bg-blue-50 p-4 rounded-full mb-4">
                                    <MessageCircle className="h-8 w-8 text-blue-400" />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-1">Say hello!</h4>
                                <p className="text-sm text-gray-500 text-pretty">Start a conversation with your {otherUserName} about the ride.</p>
                            </div>
                        ) : (
                            messages.map((msg, index) => {
                                const isMe = msg.senderEmail === currentUserEmail;
                                return (
                                    <motion.div
                                        initial={{ opacity: 0, x: isMe ? 20 : -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        key={index}
                                        className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 shadow-sm ${isMe
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                                            }`}>
                                            <p className="text-sm">{msg.content}</p>
                                            <div className={`flex items-center gap-1 mt-1 text-[10px] ${isMe ? 'text-blue-100' : 'text-gray-400'}`}>
                                                <Clock className="h-2.5 w-2.5" />
                                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        )}
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
                        <Input
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="rounded-full bg-gray-100 border-none focus-visible:ring-blue-500 h-11"
                        />
                        <Button
                            type="submit"
                            disabled={!newMessage.trim() || isSending}
                            className="rounded-full bg-blue-600 hover:bg-blue-700 w-11 h-11 p-0 flex-shrink-0"
                        >
                            <Send className="h-5 w-5" />
                        </Button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

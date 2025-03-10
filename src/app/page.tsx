'use client';
import { Form } from '@/components/custom';
import { Button } from '@/components/ui';
import { ChatBot, ChatUser } from '@/components/ui/chat';
import { env } from '@/config';
import axios from 'axios';
import { ImageIcon, Mic, MoreVertical, Plus, RefreshCw, Send, SendHorizontal, Share2, Star, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

type Message = {
    id: number
    text: string
    isUser: boolean
    image?: string
}

export default function Home() {

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "¡Hola! ¿En qué puedo ayudarte hoy?",
            isUser: false,
        },
    ])

    const [inputValue, setInputValue] = useState("")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault()
        if (inputValue.trim() || selectedImage) {
            const newMessage: Message = {
                id: messages.length + 1,
                text: inputValue,
                isUser: true,
            }

            if (selectedImage) {
                newMessage.image = selectedImage
            }

            setMessages([...messages, newMessage])
            setInputValue("")
            setSelectedImage(null)

            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        id: prevMessages.length + 1,
                        text: "Estoy aquí para ayudarte. ¿Qué más necesitas?",
                        isUser: false,
                    },
                ])
            }, 1000)
        }
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setSelectedImage(event.target?.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const triggerImageUpload = () => {
        fileInputRef.current?.click()
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-1 overflow-auto p-4 space-y-6">
                {messages.map((message) => (
                    <div key={message.id} className={`flex w-full ${message.isUser ? "justify-end" : "items-start"}`}>
                        {!message.isUser && (
                            <div className="mr-3 flex-shrink-0">
                                <ChatBot message={message.text} />
                            </div>
                        )}
                        <div className={`max-w-[80%] ${message.isUser ? "bg-blue-600 rounded-lg p-3" : ""}`}>
                            {message.image && (
                                <div className="mb-2 rounded-lg overflow-hidden">
                                    <Image
                                        src={message.image || "/placeholder.svg"}
                                        alt="Uploaded image"
                                        width={300}
                                        height={200}
                                        className="object-contain max-h-[300px] w-auto"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="px-4 pb-2">
                    <div className="relative inline-block">
                        <Image
                            src={selectedImage || "/placeholder.svg"}
                            alt="Selected image"
                            width={150}
                            height={100}
                            className="rounded-lg object-cover h-[100px] w-auto"
                        />
                        <Button
                            className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </Button>
                    </div>
                </div>
            )}

            <div className="p-4">
                <form onSubmit={handleSendMessage} className="flex items-center bg-zinc-800 rounded-full p-2">
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} className="hidden" />
                    <div className='flex space-x-1'>
                        <Button type="button" onClick={triggerImageUpload}>
                            <ImageIcon className="h-5 w-5" />
                        </Button>
                        <Button type="button">
                            <Plus className="h-5 w-5" />
                        </Button>
                    </div>
                    <input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Pregúntale a Gemini"
                        className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-zinc-400"
                    />
                    <Button
                        type="submit"
                        className={`${inputValue.trim() || selectedImage ? "text-white" : "text-zinc-400"}`}
                        disabled={!inputValue.trim() && !selectedImage}
                    >
                        {inputValue.trim() || selectedImage ? <Send className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                    </Button>
                </form>
            </div>
        </div>
    );
}

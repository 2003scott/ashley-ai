
interface ChatProps {
    message: string;
}

export const ChatBot = ({message} : ChatProps) => {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="images/zeus-bot.jpg" />
                </div>
            </div>
            <div className="chat-header">
                Ashley - Zeus
                <time className="text-xs opacity-50">11:11</time>
            </div>
            <div className="chat-bubble">{message}</div>
            <div className="chat-footer opacity-50">Enviado</div>
        </div>
    )
}

export const ChatUser = ({message} : ChatProps) => {
    return (
        <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://imgmedia.larepublica.pe/640x371/larepublica/original/2025/01/06/677c4609c3d84d3cb1554944.webp" />
                </div>
            </div>
            <div className="chat-header">
                you
                <time className="text-xs opacity-50">11:11</time>
            </div>
            <div className="chat-bubble">{message}</div>
            <div className="chat-footer opacity-50"></div>
        </div>
    )
}

export interface Category {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  buttonColor: string;
  chatBubbleColor: string;
  description: string;
  image: string;
  avatarImage: string;
  welcomeMessage: string;
}

export interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}
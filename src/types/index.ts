export interface Task {
  id: string;
  text: string;
  createdAt: number;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  description?: string;
  instructor?: string;
}

export interface Friend {
  id: string;
  name: string;
  handle: string;
  status: 'Online' | 'Offline';
  avatarUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  isCurrentUser: boolean;
  time?: string;
}

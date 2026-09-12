'use client';

import { useState } from 'react';

interface ChatFriend {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  initialMessage: string;
}

export default function ChatPage() {
  const friends: ChatFriend[] = [
    { id: '1', name: 'Mr Davinsy', handle: '@MrDavinsy', avatarUrl: '/img/friend1.png', initialMessage: 'Hey! Did you complete the UX prototype assignment?' },
    { id: '2', name: 'Kim RM', handle: '@KimRM', avatarUrl: '/img/friend2.png', initialMessage: 'Let us sync on the Next.js project later at 4 PM.' },
    { id: '3', name: 'George Pratama', handle: '@GeorgeP', avatarUrl: '/img/friend3.png', initialMessage: 'Thanks for sharing the chart configuration code!' },
    { id: '4', name: 'Leonardo Setiawan', handle: '@LeoSetiawan', avatarUrl: '/img/friend4.png', initialMessage: 'I will submit the vector design by tonight.' },
    { id: '5', name: 'Ethan Obread', handle: '@EthOb', avatarUrl: '/img/friend5.png', initialMessage: 'Check out the new responsive navbar layout!' },
    { id: '6', name: 'Rachel Omega', handle: '@OmegaRach', avatarUrl: '/img/friend6.png', initialMessage: 'Awesome progress on the learning dashboard.' },
    { id: '7', name: 'Kiky Ramadhani', handle: '@k1kys', avatarUrl: '/img/friend7.png', initialMessage: 'Let me know if you need any feedback.' }
  ];

  const [activeFriendId, setActiveFriendId] = useState('1');
  const [messages, setMessages] = useState<Record<string, { text: string; isMe: boolean }[]>>({
    '1': [
      { text: 'Hello Dihya! How is the project going?', isMe: false },
      { text: 'Hey Davinsy! Just completed the Next.js migration and responsive layouts.', isMe: true },
      { text: 'Awesome! Did you finish the Chart.js visualizer and task manager?', isMe: false },
      { text: 'Yes, offline persistence and clean flexbox layouts are all in place.', isMe: true }
    ]
  });

  const [inputText, setInputText] = useState('');

  const activeFriend = friends.find((f) => f.id === activeFriendId) || friends[0];
  const activeChat = messages[activeFriendId] || [
    { text: activeFriend.initialMessage, isMe: false }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = { text: inputText.trim(), isMe: true };
    setMessages((prev) => ({
      ...prev,
      [activeFriendId]: [...(prev[activeFriendId] || [{ text: activeFriend.initialMessage, isMe: false }]), newMsg]
    }));
    setInputText('');
  };

  return (
    <div className="container-fluid p-0">
      <div className="mb-4">
        <h4 className="fw-bold m-0">Messenger & Chats</h4>
        <p className="text-muted small m-0">Real-time student collaboration and study group channels</p>
      </div>

      {/* Friends Horizontal Selector Bar */}
      <div className="bg-white p-3 rounded-4 shadow-sm border mb-4">
        <h6 className="fw-bold mb-3 text-muted small text-uppercase">Friends Online</h6>
        <div className="d-flex gap-3 overflow-auto pb-2" style={{ scrollbarWidth: 'thin' }}>
          {friends.map((friend) => (
            <button
              key={friend.id}
              type="button"
              onClick={() => setActiveFriendId(friend.id)}
              className={`btn border-0 text-center p-2 rounded-3 transition-all ${
                activeFriendId === friend.id ? 'bg-primary bg-opacity-10' : 'bg-light'
              }`}
              style={{ minWidth: '90px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={friend.avatarUrl}
                className="rounded-circle shadow-sm mb-1"
                width="50"
                height="50"
                style={{ objectFit: 'cover', border: activeFriendId === friend.id ? '2px solid #5e81f4' : 'none' }}
                alt={friend.name}
              />
              <p className="m-0 text-truncate small fw-semibold" style={{ fontSize: '11px' }}>
                {friend.name.split(' ')[0]}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area Card */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden bg-white">
        {/* Active Friend Header Tray */}
        <div className="setting-tray p-3 border-bottom d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeFriend.avatarUrl}
              className="rounded-circle me-3"
              width="45"
              height="45"
              alt={activeFriend.name}
            />
            <div>
              <h6 className="m-0 fw-bold">{activeFriend.name}</h6>
              <small className="text-muted">{activeFriend.handle} &bull; Active Now</small>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-light rounded-circle shadow-sm p-2 border" aria-label="Call">
              <i className="bx bx-phone fs-5 text-primary"></i>
            </button>
            <button type="button" className="btn btn-light rounded-circle shadow-sm p-2 border" aria-label="Video">
              <i className="bx bx-video fs-5 text-primary"></i>
            </button>
          </div>
        </div>

        {/* Chat History Panel */}
        <div className="chat-panel" style={{ backgroundColor: '#f9f9fc', overflowY: 'auto' }}>
          <div className="d-flex flex-column gap-2">
            {activeChat.map((msg, idx) => (
              <div
                key={idx}
                className={`d-flex ${msg.isMe ? 'justify-content-end' : 'justify-content-start'}`}
              >
                <div className={msg.isMe ? 'chat-bubble-blue' : 'chat-bubble'}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box Tray */}
          <form onSubmit={handleSendMessage} className="chat-box-tray rounded-3 mt-auto shadow-sm">
            <i className="bx bx-smile text-muted me-2" role="button"></i>
            <input
              className="input form-control border-0 bg-transparent"
              type="text"
              placeholder="Type your message here..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <i className="bx bx-paperclip text-muted me-2" role="button"></i>
            <button
              type="submit"
              className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', backgroundColor: '#5e81f4', borderColor: '#5e81f4' }}
              aria-label="Send message"
            >
              <i className="bx bxs-send text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

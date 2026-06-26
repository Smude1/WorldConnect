import React from 'react';

export default function NotificationsPage() {
  const notifications = [
    { type: 'message', content: 'Alice Vance sent you a new message.', time: '2 minutes ago', read: false },
    { type: 'connect', content: 'Kenji Sato started following your profile.', time: '1 hour ago', read: true },
    { type: 'system', content: 'Welcome to WorldConnect! Complete your profile to get started.', time: '1 day ago', read: true }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '2rem', margin: 0 }}>Notifications</h2>
        <button style={{ background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer', fontSize: '0.9rem' }}>
          Mark all as read
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notifications.map((n, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: n.read ? '1px solid #334155' : '4px solid #6366f1' }}>
            <div>
              <p style={{ margin: 0, fontWeight: n.read ? 'normal' : 'bold' }}>{n.content}</p>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{n.time}</span>
            </div>
            {!n.read && (
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6366f1' }}></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

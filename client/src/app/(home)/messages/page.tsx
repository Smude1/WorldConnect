import React from 'react';

export default function MessagesPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a' }}>
      {/* Sidebar threads */}
      <div style={{ width: '320px', borderRight: '1px solid #334155', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.25rem', margin: 0 }}>Conversations</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="card" style={{ padding: '0.75rem', cursor: 'pointer', borderLeft: '4px solid #6366f1' }}>
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Alice Vance</h4>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Hey! Are we still meeting up today?
            </p>
          </div>
          <div className="card" style={{ padding: '0.75rem', cursor: 'pointer' }}>
            <h4 style={{ margin: 0, fontSize: '0.9rem' }}>Bob Martin</h4>
            <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Sent you the link to the database.
            </p>
          </div>
        </div>
      </div>
      
      {/* Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1rem', borderBottom: '1px solid #334155', display: 'flex', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Alice Vance</h3>
        </div>
        <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', overflowY: 'auto' }}>
          <div style={{ alignSelf: 'flex-start', backgroundColor: '#1e293b', padding: '0.75rem 1rem', borderRadius: '12px 12px 12px 0', maxWidth: '60%' }}>
            Hey! Are we still meeting up today?
          </div>
          <div style={{ alignSelf: 'flex-end', backgroundColor: '#6366f1', padding: '0.75rem 1rem', borderRadius: '12px 12px 0 12px', maxWidth: '60%' }}>
            Yeah! In about 10 minutes.
          </div>
        </div>
        <div style={{ padding: '1rem', borderTop: '1px solid #334155', display: 'flex', gap: '0.5rem' }}>
          <input type="text" style={{ flex: 1, padding: '0.75rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#1e293b', color: '#fff' }} placeholder="Type a message..." />
          <button style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Send</button>
        </div>
      </div>
    </div>
  );
}

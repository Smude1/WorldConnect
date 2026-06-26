import React from 'react';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', background: 'linear-gradient(to right, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        WorldConnect
      </h1>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', marginBottom: '2rem' }}>
        Discover new connections, engage in real-time conversation, and build relationships globally.
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <a href="/login" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', borderRadius: '6px', fontWeight: 'semibold' }}>
          Login
        </a>
        <a href="/register" style={{ padding: '0.75rem 1.5rem', border: '1px solid #334155', color: '#f8fafc', borderRadius: '6px' }}>
          Register
        </a>
      </div>
    </div>
  );
}

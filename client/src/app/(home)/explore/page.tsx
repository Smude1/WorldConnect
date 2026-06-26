import React from 'react';

export default function ExplorePage() {
  const users = [
    { name: 'Dr. Sarah Connor', bio: 'AI Researcher & Engineer. Let\'s collaborate!', location: 'Berlin, DE' },
    { name: 'Kenji Sato', bio: 'Fullstack developer passionate about open source.', location: 'Tokyo, JP' },
    { name: 'Sofia Rodriguez', bio: 'UX/UI designer building beautiful web apps.', location: 'Madrid, ES' }
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Explore</h2>
      <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Discover other professionals and creators globally.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {users.map((u, i) => (
          <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            <div>
              <h3 style={{ margin: '0 0 0.5rem 0' }}>{u.name}</h3>
              <span style={{ fontSize: '0.8rem', color: '#06b6d4', display: 'block', marginBottom: '0.75rem' }}>{u.location}</span>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: '0 0 1.5rem 0' }}>{u.bio}</p>
            </div>
            <button style={{ width: '100%', padding: '0.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

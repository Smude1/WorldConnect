import React from 'react';

export default function ProfilePage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'center', marginBottom: '2rem' }}>
        <div style={{ width: '96px', height: '96px', borderRadius: '50%', backgroundColor: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 'bold' }}>
          JD
        </div>
        <div>
          <h2 style={{ margin: 0 }}>John Doe</h2>
          <p style={{ margin: '0.25rem 0 0.5rem 0', color: '#94a3b8' }}>john.doe@example.com</p>
          <span style={{ fontSize: '0.85rem', color: '#06b6d4', backgroundColor: 'rgba(6, 182, 212, 0.1)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>San Francisco, CA</span>
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginTop: 0 }}>Profile Details</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.25rem' }}>Bio</label>
            <textarea style={{ width: '96%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #334155', backgroundColor: '#0f172a', color: '#fff', resize: 'vertical' }} rows={4} defaultValue="Building awesome stuff with code." />
          </div>
          <button type="submit" style={{ alignSelf: 'flex-start', padding: '0.75rem 1.5rem', backgroundColor: '#6366f1', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

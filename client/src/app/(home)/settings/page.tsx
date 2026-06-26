import React from 'react';

export default function SettingsPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Settings</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Account Settings</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> Receive email updates
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> Make profile discoverable
            </label>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Security Settings</h3>
          <button style={{ padding: '0.5rem 1rem', backgroundColor: '#e11d48', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

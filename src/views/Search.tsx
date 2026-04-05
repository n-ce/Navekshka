import { A } from '@solidjs/router';

export default function() {
  return (
    <div class="view-content">
      <header style={{ display: 'flex', 'justify-content': 'space-between', 'align-items': 'center' }}>
        <h1>Search</h1>
        <A href="/settings" class="settings-btn">Settings</A>
      </header>
      <input type="text" placeholder="Search for tracks, albums..." style={{ width: '100%', padding: '0.5rem' }} />
    </div>
  );
}

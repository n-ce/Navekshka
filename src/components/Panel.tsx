import { Show, createSignal, onMount, onCleanup } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import { togglePlayer } from '../store';
import './Panel.css';

export default function() {
  const navigate = useNavigate();
  const [isLandscape, setIsLandscape] = createSignal(window.matchMedia('(orientation: landscape)').matches);

  const updateOrientation = (e: MediaQueryListEvent) => {
    setIsLandscape(e.matches);
  };

  const mql = window.matchMedia('(orientation: landscape)');

  onMount(() => {
    mql.addEventListener('change', updateOrientation);
  });

  onCleanup(() => {
    mql.removeEventListener('change', updateOrientation);
  });

  const handleMiniPlayerClick = () => {
    if (isLandscape()) {
      togglePlayer();
    } else {
      navigate('/player');
    }
  };

  return (
    <aside class="app-panel">
      <Show when={isLandscape()}>
        {/* Landscape: Sidepanel */}
        <div class="panel-content">
          <nav class="nav-list">
            <A href="/search">Search</A>
          </nav>

          <div class="accordion">
            <div class="accordion-header">
              <A href="/library">Library</A>
            </div>
            <div class="accordion-content">
              <div><A href="/list">Collection 1</A></div>
              <div><A href="/list">Collection 2</A></div>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion-header">Queue</div>
            <div class="accordion-content">
              <div>Next Song...</div>
            </div>
          </div>
        </div>

        <div class="mini-player" onClick={handleMiniPlayerClick} style={{ cursor: 'pointer' }}>
          <p>Mini Player (Side)</p>
        </div>
      </Show>

      <Show when={!isLandscape()}>
        {/* Portrait: Bottompanel */}
        <div class="mini-player" onClick={handleMiniPlayerClick} style={{ cursor: 'pointer' }}>
          <p>Mini Player (Bottom)</p>
        </div>
        <nav class="nav-bar">
          <A href="/library">Library</A>
          <A href="/search">Search</A>
          <A href="/queue">Queue</A>
        </nav>
      </Show>
    </aside>
  );
}

/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'
import { createSignal, onMount, onCleanup, Show, lazy } from 'solid-js'
import Panel from './components/Panel'
import { isPlayerExpanded } from './store'
import './index.css'

// Lazy load views for better performance
const Library = lazy(() => import('./views/Library'));
const Search = lazy(() => import('./views/Search'));
const Settings = lazy(() => import('./views/Settings'));
const Player = lazy(() => import('./views/Player'));
const List = lazy(() => import('./views/List'));
const Queue = lazy(() => import('./views/Queue'));

function App(props: any) {
  const [isLandscape, setIsLandscape] = createSignal(window.matchMedia('(orientation: landscape)').matches);

  const mql = window.matchMedia('(orientation: landscape)');
  const updateOrientation = (e: MediaQueryListEvent) => setIsLandscape(e.matches);

  onMount(() => {
    mql.addEventListener('change', updateOrientation);
  });

  onCleanup(() => {
    mql.removeEventListener('change', updateOrientation);
  });

  return (
    <>
      <Panel />
      
      <Show when={isLandscape() && isPlayerExpanded()}>
        <div id="middle-panel">
          <Player />
        </div>
      </Show>

      <div id="active-view">
        <div class="panel-inner">
          {props.children}
        </div>
      </div>
    </>
  )
}

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Library} />
      <Route path="/library" component={Library} />
      <Route path="/search" component={Search} />
      <Route path="/settings" component={Settings} />
      <Route path="/player" component={Player} />
      <Route path="/list" component={List} />
      <Route path="/queue" component={Queue} />
    </Router>
  ),
  document.body.firstElementChild!
)

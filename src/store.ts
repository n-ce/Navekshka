import { createSignal } from 'solid-js';

export const [isPlayerExpanded, setIsPlayerExpanded] = createSignal(false);

export function togglePlayer() {
  setIsPlayerExpanded(!isPlayerExpanded());
}

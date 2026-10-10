/**
 * Site-wide visit counter for MBA Notes.
 *
 * Uses Abacus (https://abacus.jasoncameron.dev) — a free, no-signup counter API.
 *   - /hit/<namespace>/<key>  increments and returns { value }
 *   - /get/<namespace>/<key>  reads without incrementing
 *
 * The total is shown in the announcement bar (#visit-count span). We increment
 * once per browser session (sessionStorage flag) so internal navigation between
 * pages does not inflate the "overall visits" number.
 */

const NAMESPACE = 'pmshubhamgarg.github.io';
const KEY = 'mba-total-visits';
const BASE = 'https://abacus.jasoncameron.dev';
const SESSION_FLAG = 'mba_visit_counted';

let cachedCount = null;
let inFlight = false;

function paint(count) {
  if (count == null || typeof document === 'undefined') return;
  let tries = 0;
  const write = () => {
    const el = document.getElementById('visit-count');
    if (el) {
      el.textContent = Number(count).toLocaleString();
    } else if (tries < 20) {
      tries += 1;
      requestAnimationFrame(write);
    }
  };
  write();
}

async function loadCount() {
  if (inFlight || typeof window === 'undefined') return;
  inFlight = true;

  let counted = false;
  try {
    counted = window.sessionStorage.getItem(SESSION_FLAG) === '1';
  } catch (e) {
    // sessionStorage may be blocked (privacy mode) — treat as a fresh visit.
  }

  const url = counted
    ? `${BASE}/get/${NAMESPACE}/${KEY}`
    : `${BASE}/hit/${NAMESPACE}/${KEY}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (typeof data.value === 'number') {
        cachedCount = data.value;
        try {
          window.sessionStorage.setItem(SESSION_FLAG, '1');
        } catch (e) {
          // ignore storage write failures
        }
        paint(cachedCount);
      }
    }
  } catch (e) {
    // Offline, blocked by a content blocker, or service down — keep placeholder.
  } finally {
    inFlight = false;
  }
}

export function onRouteDidUpdate() {
  if (cachedCount != null) {
    paint(cachedCount);
  } else {
    loadCount();
  }
}

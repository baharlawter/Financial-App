import { RenderMode, ServerRoute } from '@angular/ssr';

// If you have a list of blog IDs, enumerate them here.
const blogIds = ['welcome', 'news', 'tips']; // TODO: replace with your real IDs or fetch dynamically

// Server-only route configuration. This augments your client routes with SSR/prerender settings.
// Note: Use ServerRoute here so getPrerenderParams and renderMode are valid.
export const routes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'calculator', renderMode: RenderMode.Prerender },
  {
    path: 'blog/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return blogIds.map((id) => ({ id }));
    },
  },
  { path: 'shop', renderMode: RenderMode.Prerender },
  // Fallback to server rendering for everything else
  { path: '**', renderMode: RenderMode.Server },
];

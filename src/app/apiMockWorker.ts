import { http, HttpResponse } from 'msw';
import { setupWorker } from 'msw/browser';

export const handlers = [
  // And here's a request handler with MSW
  // for the same "GET /user" request that
  // responds with a mock JSON response.
  http.get('/user', () => {
    return HttpResponse.json({ name: 'John' });
  }),
];

const apiMockWorker = setupWorker(...handlers);

export async function startApiMockWorker() {
  await apiMockWorker.start({
    onUnhandledRequest(request, print) {
      const url = new URL(request.url);

      if (/\.png|jpg|svg|tsx?|css|jsx?|woff2$/.test(url.pathname)) {
        return;
      }

      print.warning();
    },
  });
}

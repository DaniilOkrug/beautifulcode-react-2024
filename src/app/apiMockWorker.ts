import { categoryHandlers } from '@/entities/category';
import { setupWorker } from 'msw/browser';

const apiMockWorker = setupWorker(...categoryHandlers);

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

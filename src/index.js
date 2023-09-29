addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const targetURL = 'https://tiktok.com'; // Replace with your desired website

  const response = await fetch(targetURL, {
    headers: request.headers,
    body: request.body,
  });

  const newResponse = new Response(response.body, {
    headers: response.headers,
  });

  return newResponse;
}

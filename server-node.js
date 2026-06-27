// Node.js HTTP server wrapper para TanStack Start
import { createServer } from 'node:http';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = parseInt(process.env.PORT || '3000', 10);

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

const serverModule = await import('./dist/server/server.js');
const handler = serverModule.default;

const server = createServer(async (req, res) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host || 'localhost';
    const url = `${protocol}://${host}${req.url}`;
    const method = req.method || 'GET';

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) {
        Array.isArray(value)
          ? value.forEach(v => headers.append(key, v))
          : headers.set(key, value);
      }
    }

    const hasBody = !['GET', 'HEAD'].includes(method);
    const body = hasBody ? await readBody(req) : null;

    const request = new Request(url, {
      method,
      headers,
      body: body && body.length > 0 ? body : null,
    });

    const response = await handler.fetch(request, {}, {});

    const resHeaders = {};
    response.headers.forEach((value, key) => { resHeaders[key] = value; });
    res.writeHead(response.status, resHeaders);

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'content-type': 'text/html' });
    res.end('<h1>500 - Error interno</h1>');
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});

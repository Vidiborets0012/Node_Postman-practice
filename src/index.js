import http from 'node:http';

import fs from 'node:fs/promises';
import path from 'node:path';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  const dataPath = path.join(process.cwd(), 'data.json');

  if (req.url === '/data' && req.method === 'GET') {
    try {
      const content = await fs.readFile(dataPath, 'utf-8');

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(content);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Помилка при читанні файлу');
    }
  } else {
    // Відповідь для всіх інших маршрутів
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Маршрут не знайдено. Спробуйте /data');
  }
});

// Запускаємо сервер на порту 3000

server.listen(PORT, () => {
  console.log(`Сервер запущено! Адреса: http://localhost:${PORT}`);
});

// http://localhost:3000/data
// 200
// json:
// {
//     "project": "Node.js Learning",
//     "status": "In Progress",
//     "topics": [
//         "fs",
//         "path",
//         "http",
//         "git"
//     ],
//     "mentor": "X"
// }

// http://localhost:3000
// 404
// Маршрут не знайдено. Спробуйте /data

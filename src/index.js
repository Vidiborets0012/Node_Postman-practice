import http from 'node:http';

const server = http.createServer((req, res) => {
  // req (request) - об'єкт із даними про запит від клієнта
  // res (response) - об'єкт для формування відповіді сервера

  console.log(`Отримано запит: ${req.method} ${req.url}`);

  // Встановлюємо заголовки відповіді (JSON формат та статус 200 OK)
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Формуємо дані для відповіді
  const responseData = {
    message: 'Привіт! Ваш Node.js сервер працює!',
    time: new Date().toLocaleTimeString(),
    method: req.method,
    url: req.url,
  };

  // Відправляємо відповідь клієнту (перетворюємо об'єкт у рядок)
  res.end(JSON.stringify(responseData));
});

// Запускаємо сервер на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущено! Адреса: http://localhost:${PORT}`);
});

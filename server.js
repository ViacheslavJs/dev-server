// Внутри server.js
const http = require('http');
const { execFile } = require('child_process');

const examples = require('./examples/main'); // Правильно укажите путь

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // Выполнить файл examples.js и перенаправить вывод в ответ клиенту
  const child = execFile('node', ['./examples/main.js'], (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing main.js: ${error.message}`);
      return;
    }
    //console.log(`main.js output: ${stdout}`);
    console.log(`${stdout}`);
    res.end(stdout);
  });
});

server.listen(3000, () => {
  console.log('\x1b[1;44mServer is running on port 3000\x1b[0m', '\n');
  //console.log('\x1b[44m\nServer is running on port 3000\x1b[0m');
  //console.log('\x1b[34m\nServer is running on port 3000\x1b[0m');
  //console.log('\x1b[1;38m\nServer is running on port 3000\x1b[0m');
  //console.log('\x1b[1;44m\nServer is running on port 3000\x1b[0m');
});


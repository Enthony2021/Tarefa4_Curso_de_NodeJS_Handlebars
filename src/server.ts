const app = require('./index');
const port: number = 3000;

const server = app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
})

process.on('SIGINT', () => {
  server.close()
  console.log("Server closed");
});
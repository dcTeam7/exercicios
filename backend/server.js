import express from 'express';
import cors from 'cors';
import fs  from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express()

app.use(cors())
// fetch('http://localhost?abraao')
app.get('/', function (req, res) {
  res.send('Hello World: ' )
})
const filename = __dirname + '/index.html';
app.get('/toligado', function (req, res) {

const fileContents = fs.readFileSync(filename).toString();

console.log(fileContents);

  res.send(fileContents )
})

const PORT = 9000;

app.listen(PORT, () => {
  console.log('Servidor pronto p execução na porta: ', PORT);
  console.log('Você pode fazer requests agora da seguinte forma: ');
  console.log(`GET fetch("http://localhost:${PORT}?abraao") `);

})
import express from 'express';

const app = express()

// fetch('http://localhost?abraao')
app.get('/', function (req, res) {
  res.send('Hello World: ' )
})

const PORT = 9000;

app.listen(PORT, () => {
  console.log('Servidor pronto p execução na porta: ', PORT);
  console.log('Você pode fazer requests agora da seguinte forma: ');
  console.log(`GET fetch("http://localhost:${PORT}?abraao") `);

})
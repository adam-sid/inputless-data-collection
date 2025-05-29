import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/subdirectory', (req, res) => {
  res.send('Oh look a subdirectory!!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
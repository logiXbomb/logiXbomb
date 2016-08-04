import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json('***logiXbomb***');
});

app.listen(PORT, () => {
  console.log(`follow me down the rabbit hole on port ${PORT}`);
});

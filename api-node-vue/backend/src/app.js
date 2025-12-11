import express from 'express';
import pool from './db.js';

const app = express();
const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});

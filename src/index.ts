import express from 'express';
const app = express();

import router from './routes';
app.use('/',router);

import * as dotenv from 'dotenv';
dotenv.config();

import path from 'path';

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});  
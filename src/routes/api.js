import express from 'express'
import auth from '../modules/api/auth/router';

const app = express();

app.use('/auth', auth);

export default app
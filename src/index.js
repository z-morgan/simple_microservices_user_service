import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';

import rootRoute from './routes/root.js';
import usersRoute from './routes/users.js'

const app = express();
app.use(morgan('tiny'));

app.use('/', rootRoute);
app.use('/users', usersRoute);

const PORT = process.env.PORT || 3002;
const server = app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

export default server;
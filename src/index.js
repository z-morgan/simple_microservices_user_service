import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
	res.send('Hello from users_service');
});

app.get('/users/:userId', (req, res) => {
  const users = [
    {
      userId: 1,
      username: 'mimmy',
      touchedBy: [
        "user_service",
      ],
    },
  ];

  const user = users.find(user => user.userId === Number(req.params.userId));

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(user));
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
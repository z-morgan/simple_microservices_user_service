import { Router } from "express";

const route = Router();

route.get('/:userId', (req, res) => {
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

export default route;
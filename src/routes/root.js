import { Router } from 'express';

const route = Router();

route.get('', (req, res, next) => {
	res.send('Hello from user_service');
});

export default route;
import request from 'supertest';
import server from '../index';

test('GET /', async () => {
  const res = await request(server).get('/');

  expect(res.status).toEqual(200);
  expect(res.text).toEqual('Hello from user_service');
});

afterAll(() => {
  server.close();
});
import { Router } from 'express';

const routes = new Router();

routes.get('', () => {
  console.log('Working...');
});

export default routes;

import { Router } from 'express';
import { IndexController } from '../controllers';

export function setRoutes(router: Router) {
  const indexController = new IndexController();

  router.get('/', indexController.getIndex);
}
import express from 'express'
import controller from './index'
import { controllerHandler }  from '../../utils'
import auth from '../../middlewares/auth'
const router = express.Router();

class ShopsRoutes {
  
  constructor() {
    
    router.get('/' , [ auth.isAuth] , controllerHandler(controller.getAll) );
    router.get('/:id', [ auth.isAuth] ,controllerHandler(controller.show));
    router.post('/create', [ auth.isAuth] ,controllerHandler(controller.create));
    router.put('/edit/:id', [ auth.isAuth] ,controllerHandler(controller.edit));
    router.delete('/delete/:id', [ auth.isAuth] ,controllerHandler(controller.delete));
    return router;
  }

}
export default new ShopsRoutes();

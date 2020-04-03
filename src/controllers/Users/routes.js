import express from 'express'
import controller from './index'
import controllerLogin from '../Auth.controller'
import { controllerHandler }  from '../../utils'
const router = express.Router();
import auth from '../../middlewares/auth'

class UsersRoutes {
  
  constructor() {
    
    router.get('/' ,[ auth.isAuth ,auth.checkRole() ] , controllerHandler(controller.getAll) );
    router.get('/:id' , [ auth.isAuth ,auth.checkRole() ] ,controllerHandler(controller.show));
    router.post('/create' , controllerHandler(controller.create));
    router.put('/edit/:id' ,[ auth.isAuth ,auth.checkRole() ] , controllerHandler(controller.edit));
    router.delete('/delete/:id' ,[ auth.isAuth ,auth.checkRole() ] , controllerHandler(controller.delete));
    router.post('/login' , controllerHandler(controllerLogin.login));
    return router;
  }

}
export default new UsersRoutes();

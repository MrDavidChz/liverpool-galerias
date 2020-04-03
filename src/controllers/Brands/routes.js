import express from 'express'
import controller from './index'
import { controllerHandler }  from '../../utils'
import auth from '../../middlewares/auth'
const router = express.Router();

class BrandsRoutes {
  
  constructor() {
    
    router.get('/' , [ auth.isAuth ,auth.checkRole() ] ,controllerHandler(controller.getAll) );
    router.get('/:id' ,[ auth.isAuth ,auth.checkRole() ] ,controllerHandler(controller.show));
    router.post('/create' ,[ auth.isAuth ,auth.checkRole() ] ,  controllerHandler(controller.create));
    router.put('/edit/:id' ,[ auth.isAuth ,auth.checkRole() ] ,  controllerHandler(controller.edit));
    router.delete('/delete/:id' ,[ auth.isAuth ,auth.checkRole() ] ,  controllerHandler(controller.delete));
    return router;
  }

}
export default new BrandsRoutes();

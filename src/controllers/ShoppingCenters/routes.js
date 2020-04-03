import express from 'express'
import controller from './index'
import { controllerHandler }  from '../../utils'
const router = express.Router();

class ShoppingCentresRoutes {
  
  constructor() {
    
    router.get('/' , controllerHandler(controller.getAll) );
    router.get('/:id' , controllerHandler(controller.show));
    router.post('/create' , controllerHandler(controller.create));
    router.put('/edit/:id' , controllerHandler(controller.edit));
    router.delete('/delete/:id' , controllerHandler(controller.delete));
    return router;
  }

}
export default new ShoppingCentresRoutes();

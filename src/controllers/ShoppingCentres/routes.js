import express from 'express'
import controller from './index'
import { controllerHandler }  from '../../utils/'
const router = express.Router();

class ShoppingCentresRoutes {
  
  constructor() {
    
    router.get('/shopping_centres/' , controllerHandler(controller.index) );
    router.get('/shopping_centres/:id' , controllerHandler(controller.show));
    router.post('/shopping_centres/create' , controllerHandler(controller.create));
    router.put('/shopping_centres/edit/:id' , controllerHandler(controller.edit));
    router.delete('/shopping_centres/delete/:id' , controllerHandler(controller.delete));
    return router;
  }

}
export default new ShoppingCentresRoutes();

import express from 'express'
import controller from './index'
import { controllerHandler }  from '../../utils'
const router = express.Router();

class BrandsRoutes {
  
  constructor() {
    
    router.get('/brand/' , controllerHandler(controller.getAll) );
    router.get('/brand/:id' , controllerHandler(controller.show));
    router.post('/brand/create' , controllerHandler(controller.create));
    router.put('/brand/edit/:id' , controllerHandler(controller.edit));
    router.delete('/brand/delete/:id' , controllerHandler(controller.delete));
    return router;
  }

}
export default new BrandsRoutes();

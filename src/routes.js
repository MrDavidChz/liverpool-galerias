import express from 'express';
import ShoppingCenters from './controllers/ShoppingCenters/routes';
import LocalsRoutes from './controllers/Locals/routes'
import BrandsRoutes from './controllers/Brands/routes'
import ShopsRoutes from './controllers/Shops/routes'
import InquilinosRoutes from './controllers/Inquilinos/routes'
const router = express.Router();

class AllRoutes {
  static routes() {
    router.use('/shopping_centers', ShoppingCenters);
    router.use('/local', LocalsRoutes);    
    router.use('/brand', BrandsRoutes);  
    router.use('/shop', ShopsRoutes);  
    router.use('/inquilino', InquilinosRoutes);         
    return router;
  }
}
export default AllRoutes.routes();

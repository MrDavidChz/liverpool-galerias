import express from 'express';
import ShoppingCentres from './controllers/ShoppingCentres/routes';

const router = express.Router();

class AllRoutes {
  static routes() {
    router.use('/api', ShoppingCentres);
    return router;
  }
}
export default AllRoutes.routes();

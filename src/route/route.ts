import { Router } from 'express';
import Cost from '../controllers/cost';
export const route = Router();
const controller = new Cost();

route.get('/getCost',controller.getCostData );
export default route ;
 
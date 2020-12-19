import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> lista todos os usuario -> METHOD: GET
store/create -> cria um usuario -> METHOD: POST
delete -> apaga um usuario -> METHOD: DELETE
show -> mostra um usuario -> METHOD: GET
update -> atualiza um usuario -> METHOD: PATCH ou PUT
*/



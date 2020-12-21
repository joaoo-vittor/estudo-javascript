import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// // Não deveria existir
// router.get('/', loginRequired, userController.index); // Lista usuarios
// router.get('/:id', userController.show);// Lista usuario

// router.post('/', userController.store);
// router.put('/:id', userController.updade);
// router.delete('/:id', userController.delete);


router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.updade);
router.delete('/', loginRequired, userController.delete);


export default router;

/*
index -> lista todos os usuario -> METHOD: GET
store/create -> cria um usuario -> METHOD: POST
delete -> apaga um usuario -> METHOD: DELETE
show -> mostra um usuario -> METHOD: GET
update -> atualiza um usuario -> METHOD: PATCH ou PUT
*/

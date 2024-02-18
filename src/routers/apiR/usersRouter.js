import { Router } from 'express';
import { registerUser, getUserController, getCurrentUserController, putUserResetPasswordController, putUserUpdateByEmailController,getUsersByRolesController, deleteUserController } from '../../controllers/apiR.controllers/usersRouter.controller.js';
import { passportLocalRegister, passportAuth } from '../../middlewares/passport.js';

export const usersRouter = Router();



usersRouter.post('/', passportLocalRegister, registerUser);
usersRouter.get('/', passportAuth, getUserController);
usersRouter.put('/', passportAuth, putUserResetPasswordController);
usersRouter.put('/reset', passportAuth, putUserUpdateByEmailController);
usersRouter.get('/current', passportAuth, getCurrentUserController);
usersRouter.get('/roles', passportAuth, getUsersByRolesController);
usersRouter.delete('/', passportAuth, deleteUserController);

export default usersRouter;


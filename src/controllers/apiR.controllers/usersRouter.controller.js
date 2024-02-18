import { usersServices } from '../../service/user.service.js';
import { appendJwtAsCookie } from '../autenticar.controller.js';

export async function registerUser(req, res, next) {
    try {
            appendJwtAsCookie,
            res.successfullPost(req.usuario);
        } catch (error) {
            next(error);
        }
    }

export async function getUserController(req, res, next) {
    try {
            if (req.params._id) {
                res.json(await usersServices.findOneUser({ _id: req.params._id }))
            } else {
                res.json(await usersServices.findManyUser(req.query))
            }
        } catch (error) {
            next(error);
        }
    }



export async function putUserResetPasswordController(req, res, next) {
    try {
            const { email, password } = req.body;   
            const updatedPassword = await usersServices.resetPassword(email, password);
            res.json(updatedPassword);
        } catch (error) {
            next(error); 
        }
    }

export async function getUsersByRolesController(req, res) {
    try {
            authorizationMiddleware(['admin']);
            const usersByRole = await usersServices.usersByRoles(req.query.roles);
            res.successfullGet(usersByRole);
        } catch (error) {
            next(error);
        }
    }
 
export async function putUserUpdateByEmailController(req, res, next) {
    try {
            const { email, newData } = req.body;   
            const updatedNewData = await usersServices.updateUserByEmail(email, newData);
            res.json(updatedNewData);
        } catch (error) {
            next(error); 
        }
    }


export async function getCurrentUserController(req, res, next) {
    try {
            const userCurrentEmail = req.session.user;
            const userCurrent = await usersServices.findUserByEmail(userCurrentEmail);
            res.json(userCurrent);
        } catch (error) {
            next(error);
        }
    }

export async function deleteUserController (req, res) {
    try {
            const userId = req.params.userId; 
            const deletedUser = await usersServices.deleteUserById(userId);
            res.json(deletedUser);
            
        } catch (error) {
            next(error);
        }
    }










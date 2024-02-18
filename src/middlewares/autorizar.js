import { isUser, isAdmin } from '../controllers/autorizar.controller.js'

export const usersOnly = isUser;
export const adminsOnly = isAdmin;
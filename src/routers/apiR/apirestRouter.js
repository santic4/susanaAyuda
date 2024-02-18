import { Router } from 'express'
import { usersRouter } from './usersRouter.js'

import { sessionsRouter } from './sessionsRouter.js'
export const apiRouter = Router()



apiRouter.use('/sessions', sessionsRouter)
apiRouter.use('/users', usersRouter)




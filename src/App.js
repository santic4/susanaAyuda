import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
import { PORT, MONGODB_CNX_STR } from './config.js';
import { apiRouter } from './routers/apiR/apirestRouter.js';
import { sessions } from './middlewares/sessions.js'
import { responseFailed } from './middlewares/responseFailed.js'
import { responseSuccessfull } from './middlewares/responseSuccessfull.js';

import { passportInitialize } from './middlewares/autenticar.js';
import { cookies } from './middlewares/cookies.js'


await mongoose.connect(MONGODB_CNX_STR)
  console.log(`Base de Datos Conectada "${MONGODB_CNX_STR}"`)

const app = express()

app.engine('handlebars', engine())

app.listen(PORT, async () => {
  console.log(`Conectado al puerto ${PORT}`);
});


app.set('views', './views')
app.set(`view engine`, 'handlebars')

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cookies)
app.use(passportInitialize)
app.use(sessions)

app.use('/static', express.static('./static'))
app.use(responseFailed);
app.use(responseSuccessfull);

app.use('/api',apiRouter)







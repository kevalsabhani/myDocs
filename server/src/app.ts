import express from 'express';
import cors from 'cors';
import env from './config/env.config';
import router from './routes';
import errorHandler from './middleware/error-handler';
import seedDatabase from './db';
import db from './db/models';

const app = express();
app.use(express.json());
app.use(cors({ origin: [env.FRONT_END_URL] }));
app.use(router);
app.use(errorHandler);

// DATABASE
db.sequelize.sync();
// if (env.NODE_ENV === 'development' || env.NODE_ENV === 'test') {
//   db.sequelize
//     .sync({ force: true })
//     .then(async () => {
//       console.log('Drop and re-sync db...');
//     })
//     .then(() => {
//       seedDatabase().then(() => {
//         console.log('Seeding database...');
//       });
//     });
// }

export default app;

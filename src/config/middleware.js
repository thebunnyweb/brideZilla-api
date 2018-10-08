import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

const isDev = process.env.NODE_ENV === 'developement';

export default app => {
  app.use(bodyParser.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  if (isDev) {
    app.use(morgan('dev'));
  }
};

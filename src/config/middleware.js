import bodyParser from 'body-parser';
import morgan from 'morgan';

const isDev = process.env.NODE_ENV === 'developement';

export default app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  if (isDev) {
    app.use(morgan('dev'));
  }
};

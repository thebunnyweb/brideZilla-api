import polyfill from 'babel-polyfill'; /*eslint-disable-line*/
import express from 'express';
import ApiDoc from 'express-mongoose-docs';
import mongoose from 'mongoose';
import db from './config/db'; /*eslint-disable-line*/
import constants from './config/constants';
import middlewareConfig from './config/middleware';
import RouteConfig from './modules';

const app = express();
const PORT = constants.port;

middlewareConfig(app);
RouteConfig(app);
ApiDoc(app, mongoose);

app.listen(PORT, err => {
  if (!err) console.log(`App running on port ${PORT}`);
});

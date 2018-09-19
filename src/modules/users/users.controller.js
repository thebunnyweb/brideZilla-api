import HttpStatus from 'http-status';
import UserModel from './users.model';

export async function addUser(req, res) {
  try {
    const userdata = await UserModel.create(req.body);
    res.status(HttpStatus.CREATED).json(userdata);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getUsers(req, res) {
  try {
    const uid = req.query.id || '';
    const userdata = await UserModel.getData(uid);
    res.status(HttpStatus.OK).json(userdata);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function login(req, res, next) {
  res.status(HttpStatus.OK).json(req.user.toAuthJSON());
  return next();
}

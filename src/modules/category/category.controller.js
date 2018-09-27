import HttpStatus from 'http-status';
import mongoose from 'mongoose';
import CatergoryModel from './category.model';

export async function addCategory(req, res) {
  try {
    const category = await CatergoryModel.create(req.body);
    res.status(HttpStatus.CREATED).json(category);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getCategory(req, res) {
  try {
    const category = await CatergoryModel.find({});
    res.status(HttpStatus.OK).json(category);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function updateCategory(req, res) {
  try {
    const category = await CatergoryModel.findOneAndUpdate(
      {
        _id: mongoose.Types.ObjectId(req.params.id)
      },
      req.body,
      {
        upsert: true,
        new: true
      }
    );
    res.status(HttpStatus.CREATED).json(category);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function deleteCategory(req, res) {
  console.log(req.params.id);

  try {
    await CatergoryModel.findByIdAndRemove(req.params.id);
    res.status(HttpStatus.OK).json({ id: req.params.id, flag: 'Success' });
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

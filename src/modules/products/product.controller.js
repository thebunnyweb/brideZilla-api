import HttpStatus from 'http-status';
import mongoose from 'mongoose';
import ProductsModel from './product.model';

export async function addProduct(req, res) {
  try {
    const productData = await ProductsModel.create(req.body);
    res.status(HttpStatus.CREATED).json(productData);
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

export async function getProduct(req, res) {
  try {
    const productData = await ProductsModel.find({}).populate('vendor_id', [
      '_id',
      'vendor_name',
      'vendor_email'
    ]);
    res.status(HttpStatus.OK).json(productData);
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await ProductsModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body,
      {
        upsert: true,
        new: true
      }
    );
    res.status(HttpStatus.OK).json(product);
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

export async function removeRecord(req, res) {
  try {
    await ProductsModel.findByIdAndRemove(req.params.id);
    res
      .status(HttpStatus.OK)
      .json({ id: req.params.id, message: 'Removed from collection', flag: 'Success' });
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getProductsByVendor(req, res) {
  try {
    const vendor_id = req.params.id || '';
    const products = await ProductsModel.getProductByVendorData(vendor_id);
    res.status(HttpStatus.OK).json(products);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}
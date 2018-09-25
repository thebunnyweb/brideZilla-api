import HttpStatus from 'http-status';
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
    const productData = await ProductsModel.find({});
    res.status(HttpStatus.OK).json(productData);
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

export async function updateProduct(req, res) {
  try {
    const product = await ProductsModel.findById(req.params.id);
    Object.keys(product).forEach(key => {
      product[key] = req.body[key];
    });
    return res.status(HttpStatus.OK).json(await product.save());
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

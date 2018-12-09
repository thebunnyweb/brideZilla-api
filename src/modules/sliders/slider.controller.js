import HTTPStatus from 'http-status';
import mongoose from 'mongoose';
import SliderModel from './slider.model';

export async function getAllSliders(req, res) {
  try {
    const sliderdata = await SliderModel.find({});
    res.status(HTTPStatus.OK).json(sliderdata);
  } catch (e) {
    res.status(HTTPStatus.BAD_GATEWAY).json(e);
  }
}

export async function addSlider(req, res) {
  try {
    const addsliderData = await SliderModel.create(req.body);
    res.status(HTTPStatus.OK).json(addsliderData);
  } catch (e) {
    res.status(HTTPStatus.BAD_GATEWAY).json(e);
  }
}

export async function getSliderById(req, res) {
  const vendorId = req.params.id;
  try {
    const sliderdata = await SliderModel.find({
      vendorid: mongoose.Types.ObjectId(vendorId)
    }).populate('Vendors', ['_id', 'vendor_name']);
    res.status(HTTPStatus.OK).json(sliderdata);
  } catch (e) {
    res.status(HTTPStatus.BAD_GATEWAY).json(e);
  }
}

export async function updateSlider(req, res) {
  try {
    const sliderdata = await SliderModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body,
      {
        upsert: true,
        new: true
      }
    );
    res.status(HTTPStatus.OK).json(sliderdata);
  } catch (e) {
    res.status(HTTPStatus.BAD_GATEWAY).json(e);
  }
}

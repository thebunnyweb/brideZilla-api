import Httpstatus from 'http-status';
import mongoose from 'mongoose';
import VendorModel from './vendors.model';

export async function addVendor(req, res) {
  try {
    const vendor = await VendorModel.create(req.body);
    res.status(Httpstatus.CREATED).json(vendor);
  } catch (error) {
    res.status(Httpstatus.BAD_GATEWAY).json(error);
  }
}

export async function getVendors(req, res) {
  try {
    const vendors = await VendorModel.find({});
    res.status(Httpstatus.OK).json(vendors);
  } catch (error) {
    res.status(Httpstatus.BAD_GATEWAY).json(error);
  }
}

export async function updateVendor(req, res) {
  try {
    const vendor = await VendorModel.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(req.params.id) },
      req.body,
      {
        upsert: true,
        new: true
      }
    );
    res.status(Httpstatus.OK).json(vendor);
  } catch (error) {
    res.status(Httpstatus.BAD_GATEWAY).json(error);
  }
}

export async function deleteVendor(req, res) {
  try {
    await VendorModel.findByIdAndRemove(req.params.id);
    res.status(Httpstatus.CREATED).json({ id: req.params.id, flag: 'success' });
  } catch (error) {
    res.status(Httpstatus.BAD_GATEWAY).json(error);
  }
}

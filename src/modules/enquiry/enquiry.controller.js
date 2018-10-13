import HttpStatus from 'http-status';
import EnquiriesModel from './enquiry.model';

export async function addEnquiry(req, res) {
  try {
    const enquiry = await EnquiriesModel.create(req.body);
    res.status(HttpStatus.CREATED).json(enquiry);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getEnquiry(req, res) {
  try {
    const enquiry = await EnquiriesModel.find({});
    res.status(HttpStatus.CREATED).json(enquiry);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

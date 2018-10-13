import HttpStatus from 'http-status';
import EnquiriesModel from './enquiry.model';

export async function addEnquiry(req, res) {
  try {
    const enquiry = await EnquiriesModel.create(req.body);
    res.send(HttpStatus.CREATED).json(enquiry);
  } catch (error) {
    res.send(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getEnquiry(req, res) {
  try {
    const enquiry = await EnquiriesModel.find({});
    res.send(HttpStatus.CREATED).json(enquiry);
  } catch (error) {
    res.send(HttpStatus.BAD_GATEWAY).json(error);
  }
}

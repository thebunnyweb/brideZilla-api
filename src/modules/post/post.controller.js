import HttpStatus from 'http-status';
import PostsModel from './post.model'; /*eslint-disable-line*/

export async function addpost(req, res) {
  try {
    const post = await PostsModel.addpost(req.body, req.user.id);
    res.status(HttpStatus.CREATED).json(post);
  } catch (error) {
    res.status(HttpStatus.BAD_GATEWAY).json(error);
  }
}

export async function getAllPosts(req, res) {
  try {
    const postsdata = await PostsModel.getData().populate('uid', [
      'firstname',
      'lastname',
      'phone'
    ]);
    res.status(HttpStatus.OK).json(postsdata);
  } catch (e) {
    res.status(HttpStatus.BAD_GATEWAY).json(e);
  }
}

const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");
const util = require("../lib/util");
const postService = require("../services/postService");

/**
 *  @리스트
 *  @route GET /post/list
 *  @access public
 *  @err
 */

const getList = async(req,res) => {
    
    const list = await postService.getList();
    
    return res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.SUCCESS, {
          list: list,
        })
      );
}

/**
 *  @게시글 작성
 *  @route POST /post/register
 *  @access public
 *  @err
 */

const registerPost =  async(req,res) => {
    
    const { user_id, title ,content, pwd } = req.body;
    
    await postService.registerPost(user_id, title ,content, pwd);

    return res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.POST_REGISTERED)
      );

}

/**
 *  @게시글 수정
 *  @route PUT /post/edit
 *  @access public
 *  @err
 */

const editPost = async(req,res) => {

  const { post_id, title ,content, pwd } = req.body;
  
  await postService.editPost(post_id,pwd, title ,content);

  return res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.POST_EDITED)
  );


}

/**
 *  @게시글 수정
 *  @route PUT /post/edit
 *  @access public
 *  @err
 */

 const deletePost = async(req,res) => {

  const { post_id, pwd } = req.body;
  
  await postService.deletePost(post_id, pwd);

  return res.status(statusCode.OK).send(
    util.success(statusCode.OK, responseMessage.POST_DELETED)
  );


}

module.exports = {

    getList,
    registerPost,
    editPost,
    deletePost
}
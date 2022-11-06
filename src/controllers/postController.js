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
 *  @route POST /
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

module.exports = {

    getList,
    registerPost
}
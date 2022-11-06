const postDao = require("../models/postDao");
const postValidate = require("../utils/postValidate");
const weatherApi = require("../utils/getWeather");
const comparePwd = require("../utils/unhashPwd");

const getList = async () => {

    const list = await postDao.getList();

    return list;
}

const registerPost = async (user_id, title ,content, pwd ) => {

    title = title.trim();
    content = content.trim();
    pwd = pwd.trim();

    let now = await weatherApi.getWeather();

    let hashedPassword = await postValidate.register( user_id, title ,content, pwd);

    await postDao.registerPost(user_id, title ,content, hashedPassword, now);

    return true;
}

const editPost = async(post_id, pwd, title, content) => {

    title = title.trim();
    content = content.trim();
    
    await comparePwd.compare(post_id,pwd);

    await postValidate.edit(title,content);

    await postDao.editPost(post_id,title,content);

    return true;
}

const deletePost = async(post_id, pwd) => {

    await comparePwd.compare(post_id,pwd);

    await postDao.deletePost(post_id,pwd);

    return true;
}

module.exports = {

    getList,
    registerPost,
    editPost,
    deletePost
}
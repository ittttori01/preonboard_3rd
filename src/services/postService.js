const postDao = require("../models/postDao");
const postValidate = require("../utils/postValidate");
const weatherApi = require("../utils/getWeather");

const getList = async () => {

    const list = await postDao.getList();

    return list;
}

const registerPost = async (user_id, title ,content, pwd ) => {

    title = title.trim();
    content = content.trim();
    pwd = pwd.trim();

    let now = await weatherApi.getWeather();

    await postValidate.register(user_id, title ,content, pwd, now);

    return true;
}

module.exports = {

    getList,
    registerPost
}
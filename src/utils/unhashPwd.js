const bcrypt = require("bcrypt");
const postDao = require("../models/postDao");
const Error = require("../middlewares/errorConstructor");

const compare = async(post_id,inputPwd) => {

    const postPwd = await postDao.getPwd(post_id);

    const decodePwd = await bcrypt.compare(inputPwd, postPwd[0].password);

    if(!decodePwd){

        throw new Error("비밀번호가 일치하지 않습니다.",400);
    }
}

module.exports = {
    compare
}
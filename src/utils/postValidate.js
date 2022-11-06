const postDao = require("../models/postDao");
const Error = require("../middlewares/errorConstructor");
const bcrypt = require("bcrypt");

const register = async ( user_id, title ,content, pwd, now ) => {

    if (!title) { 
        
        throw new Error("제목입력은 필수입니다.",400);

    }else if (!content) {

        throw new Error("본문 내용 입력은 필수입니다.",400);

    }else if (!pwd) {

        throw new Error("비밀번호 입력은 필수 입니다.",400);
    }

    if (title.length > 20 ){

        throw new Error("제목은 20자 이내로 작성 해 주세요", 400);
    }

    if(content.length > 200) {

        throw new Error("본문은 200자 이내로 작성 해 주세요", 400);
    }

    const validationPwd = /(?=.*\d)(?=.*[a-zA-ZS]).{6,}/; // 문자, 숫자 1개이상 포함, 8자리 이상/;
    
    if (!validationPwd.test(pwd)) {
        throw new Error("비밀번호는 6자리 이상, 숫자 하나를 포함해야합니다.", 400);
    }

    const hashedPassword = await bcrypt.hash(pwd, 12);

    await postDao.registerPost(user_id, title ,content, hashedPassword, now);

    return true;

    // const checkEmail = await userDao.checkEmail(email);

    // if (checkEmail.length == 1) {
    //     throw new Error("EMAIL ALREADY EXIST", 400);
    // }


    // const validationPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    // if(!validationPhone.test(phone)) {
    //     throw new Error("PHONE NUMBER ERROR", 400);
    // }

    // if( gender !== "male" && gender !== "female") {
    //     throw new Error("WRITE CORRECT GENDER", 400);
    // }

    // if( age <= 0 || age > 120 ) {
    //     throw new Error("INCORRECT AGE", 400);
    // }

    // const hashedPassword = await bcrypt.hash(password, 12);

    // await userDao.signup(name, age, email, hashedPassword, gender, phone);

}

module.exports = {
    register
}
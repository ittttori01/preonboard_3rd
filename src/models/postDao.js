const { AppDataSource } = require("./appDataSource");
// const Error = require("../middlewares/errorConstructor");
const post = require("../entities/post");

const getList = async () => {

    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["*"])
            .from(post, "post")
            .orderBy('post.created_at', 'DESC')
            .execute()
    } catch(err) {
        console.log(err);
        throw new Error("SERVER ERROR", 500);
    }
}

const registerPost = async (user_id, title ,content, hashedPassword ,now) => {

    try {
        return await AppDataSource
        .createQueryBuilder()
        .insert()
        .into(post)
        .values({
            uuid: user_id,
            title : title,
            content : content,
            password : hashedPassword,
            weather : now
        })
        .execute()


    } catch (error) {
        
    }
}

module.exports = {

    getList,
    registerPost

}
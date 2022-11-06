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
        console.log(err)
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


    } catch (err) {
        throw new Error("SERVER ERROR", 500);
    }
}

const getPwd = async(post_id) => {

    try{
        return await AppDataSource
            .createQueryBuilder()
            .select(["password"])
            .from("post")
            .where("post.id = :id", { id: post_id })
            .execute()
    } catch(err) {
       
        throw new Error("SERVER ERROR", 500);
    }
}  

const editPost = async(post_id,title,content) => {

    try{
        return await AppDataSource
            .createQueryBuilder()
            .update(post)
            .set({ title: title, content: content })
            .where("id = :id", { id: post_id})
            .execute()
    } catch(err) {

        throw new Error("SERVER ERROR", 500);
    }
}

const deletePost = async(post_id) => {

    try{
        return await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(post)
            .where("id = :id", { id: post_id })
            .execute()
    } catch(err) {

        throw new Error("SERVER ERROR", 500);
    }

}

module.exports = {

    getList,
    registerPost,
    getPwd,
    editPost,
    deletePost

}
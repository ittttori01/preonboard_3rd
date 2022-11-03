const EntitySchema = require("typeorm").EntitySchema; 

module.exports = new EntitySchema({
    name: "posts",
    tableName: "post",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        uuid: {
            type: "varchar",
            nullable: false
        },
        title : {
            type : "varchar",
            nullable : false
        },
        content: {
            type: "text",
            nullable: false
        },
        password : {
            type: "varchar",
            nullable: false
        },
        weather : {
            type: "varchar",
            nullable: false
        },
        created_at: {
            type: "timestamp",
            default: () => 'CURRENT_TIMESTAMP',
        },
        updated_at: {
            type: "timestamp",
            nullable: true,
            onUpdate: 'CURRENT_TIMESTAMP'
        }
    },
});
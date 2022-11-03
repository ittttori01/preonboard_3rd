const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
    name: "users",
    tableName: "user",
    columns: {
        uuid: {
            primary: true,
            type: "varchar"
        },
        name: {
            type: "varchar",
            nullable: false
        },
        email: {
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
const z = require("zod")

const todoSchema = new z.object({
    title: z.string (),
    description: z.string()
})

const complSchema = new z.object({
    id: z.string(),
})

module.exports = {
    todoSchema : todoSchema,
    complSchema : complSchema
}
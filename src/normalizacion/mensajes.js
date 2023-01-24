import { normalize, schema, } from 'normalizr'

// Definimos un esquema de autor
const autorSchema = new schema.Entity('autor')
// Definimos un esquema de mensaje
const mensajeSchema = new schema.Entity('mensajes', {
    autor: autorSchema
})
// Definimos un esquema de posts
const postSchema = new schema.Entity('posts', {
    autor: autorSchema,
    mensajes: [mensajeSchema]
}, { idAttribute: 'IdPosts' })

function normalizarMensajes(data){
    return normalize(data, postSchema);
}

export { normalizarMensajes }
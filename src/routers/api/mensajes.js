import { Router } from 'express'

const mensajesApiRouter = new Router()

mensajesApiRouter.get('/api/productos-test', (req, res) => { res.json(createNFakeProducts(5)) })

export default mensajesApiRouter
import { Router } from 'express'

import path from 'path'

const authWebRouter = new Router()

authWebRouter.get('/', (req, res) => {
    
})

authWebRouter.get('/login', (req, res) => {
    if(!req.session.nombre){
        
    }
})

authWebRouter.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            throw err
        }
        res.redirect('/login')
    })
})

authWebRouter.post('/login', (req, res) => {
    req.session.nombre = req.body.nombre;
    res.redirect('/home');
})



export default authWebRouter
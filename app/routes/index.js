const { check, validationResult } = require("express-validator"); 

module.exports = (app)=>{
    app.get('/', (req, res)=>{
        app.app.controllers.ChatController.home(app, req, res)
    })

    app.get('/chat', (req, res)=>{
        app.app.controllers.ChatController.index(app, req, res)
    })

    app.post('/chat', [
        check('apelido', 'Apelido é obrigatório!').notEmpty(),
        check('apelido', 'Apelido deve ser entre 3 e 15 caracteres!').isLength({ min: 3, max: 15 })
    ], (req, res)=>{
        var errors = validationResult(req);
        app.app.controllers.ChatController.startChat(app, req, res, errors)
    })
}


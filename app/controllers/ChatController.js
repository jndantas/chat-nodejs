module.exports.home = (app, req, res)=>{

    res.render('index', {validations:[]})

}

module.exports.index = (app, req, res)=>{

    res.render('chat')

}

module.exports.startChat = (app, req, res, errors)=>{
    let request = req.body
    if(!errors.isEmpty()){
        console.log('erros: ', errors.errors);
        res.render('index', { validations: errors.errors });
        return;
    } else {
        app.get('io').emit(
            'msgCliente',
            {
                nick: request.apelido, 
                message: ' acabou de entrar no chat!' 
            })
        res.render('chat', {dataUser: request});
    }

}
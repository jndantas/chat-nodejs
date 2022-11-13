module.exports.home = (app, req, res)=>{

    res.render('index', {validations:[]})

}

module.exports.index = (app, req, res)=>{

    res.render('chat')

}

module.exports.startChat = (app, req, res, errors)=>{
    if(!errors.isEmpty()){
        console.log('erros: ', errors.errors);
        res.render('index', { validations: errors.errors });
        return;
    } else {
        res.render('chat');
    }

}
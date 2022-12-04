let app = require('./config/server')
const { Server } = require('socket.io'); 
let server = app.listen(80, ()=>{
    console.log('Server On');
})
const io = new Server(server);
app.set('io', io)
io.listen(server); 
io.on('connection', (socket)=>{
    console.log('Usuário conectado');

    socket.on('disconnect', ()=>{
        console.log('Usuário desconectado');
    })

    socket.on('sendMsgServer', (data)=>{
        socket.emit(
            'msgCliente',
            {
                nick: data.nick, 
                message: data.message 
            }
        )

        socket.broadcast.emit(
            'msgCliente',
            {
                nick: data.nick, 
                message: data.message 
            }
        )

        if(parseInt(data.nickUpdated) == 0){
            socket.emit(
                'usersChat',
                {
                    nick: data.nick
                }
            )
    
            socket.broadcast.emit(
                'usersChat',
                {
                    nick: data.nick
                }
            )
    
        }
        
    })
})
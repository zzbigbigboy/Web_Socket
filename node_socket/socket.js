
var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({ port: 2021 });

wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
		ws.send("服务端接收到请求后，发送给客户端的数据");
    });
});

wss.on('close', (ws) => {
    console.log('wss close');
})
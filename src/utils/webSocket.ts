export const wsUrl = "ws://localhost:2021";

function showLoading() {
    const loading: HTMLElement | null = document.getElementById('loading');
    if(loading) {
        loading.style.display = 'flex'
    }
}

function hideLoading() {
    const loading: HTMLElement | null = document.getElementById('loading');
    if(loading) {
        loading.style.display = 'none'
    }
}

export class WebSocketModel {
    private static _webSocket: WebSocketModel;
    private socket: WebSocket | undefined;
    constructor() {
        if(!this.socket) {
            this.initSocket()
            console.log("WebSocketModel Ing")
        }else{
            console.log("WebSocketModel Be")
        }
    }

    public static get webSocket (): WebSocketModel {
        if(!this._webSocket) {
            this._webSocket = new WebSocketModel()
        }
        return this._webSocket
    }

    public initSocket() {
        this.socket = new WebSocket(wsUrl);
        this.WsOnOpen();
        this.WsOnMessage();
        this.WsOnClose();
    }

    public clearSocket() {
        if(this.socket) {
            this.socket = undefined
        }
    }

    // 断线重连
    public reconnectingWs() {
        setTimeout(() => {
            console.log('timer out')
            this.initSocket()
        }, 1000 * 3)
    }

    // WebSocket 开启
    public WsOnOpen() {
        if(this.socket) {
            this.socket.onopen = (event: any) => {
                console.log('Websocket Open !!!!!', event)
                this.socket?.send("Hello --------------1")
                hideLoading();
            }
        }
    }

    // WebSocket 关闭
    public WsOnClose() {
        if(this.socket) {
            this.socket.onclose = (event: any) => {
                console.log('Websocket Close !!!!!', event)
                this.clearSocket()
                this.reconnectingWs()
                showLoading();
            } 
        }
    }

    // WebSocket 返回消息
    public WsOnMessage() {
        if(this.socket) {
            this.socket.onmessage = (event: any) => {
                console.log('Websocket Message !!!!!', event)
                // this.socket?.close();
            } 
        }
    }

    // WebSocket 报错
    public WsOnError() {
        if(this.socket) {
            this.socket.onerror = (event: any) => {
                console.log('Websocket Error !!!!!', event)
            } 
        }
    }

    // WebSocket 发送消息
    public WsSend(str: string) {
        if(this.socket) {
            this.socket?.send(str)
            if(this.socket.bufferedAmount === 0) {
                // 发送完毕
            } else {
                // 发送中
            }
        }
    }
}
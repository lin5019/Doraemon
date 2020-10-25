import cssStr from './css'

const player = {
    length: 1,
    id: undefined,
    time: 100,
    ui: {
        DoraemonStyle: document.querySelector(".DoraemonStyle"),
        DoraemonHtml: document.querySelector(".DoraemonHtml")
    },
    evens: {
        ".stopBtn": 'stop',
        ".playBtn": 'play',
        ".slowBtn": 'slow',
        ".normalBtn": 'normal',
        ".quickBtn": 'quick',
    },
    init() {
        player.ui.DoraemonHtml.innerText = cssStr.substr(0, player.length)
        player.ui.DoraemonStyle.textContent = cssStr.substr(0, player.length)
        player.bindEvents()
        player.play()
    },
    bindEvents() {
        for (let key in player.evens) {
            if (player.evens.hasOwnProperty(key)) {
                let fun = player.evens[key];
                document.querySelector(key).addEventListener('click', player[fun])
            }
        }
    },
    run() {
        player.length++;
        if (player.length === cssStr.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.DoraemonHtml.innerText = cssStr.substr(0, player.length)
        player.ui.DoraemonStyle.textContent = cssStr.substr(0, player.length)
        player.ui.DoraemonHtml.scrollTop = player.ui.DoraemonHtml.scrollHeight;
    },
    play() {
        console.log(1,player===this, 'this.id:'+ this.id,'player.id:'+  player.id)
        if (player.id === undefined) {
            player.id = window.setInterval(player.run, player.time)
            console.log(2,player===this,'this.id:'+ this.id,'player.id:'+  player.id)
        }
    },
    stop() {
        console.log(3,player===this,'this.id:'+ this.id,'player.id:'+  player.id)
        window.clearInterval(player.id)
        player.id = undefined;
        console.log(4,player===this,'this.id:'+ this.id,'player.id:'+  player.id)
    },
    slow() {
        player.stop()
        player.time = 1000;
        player.play()
    },
    normal() {
        player.stop()
        player.time = 100;
        player.play()
    },
    quick() {
        player.stop()
        player.time = 0;
        player.play()
    }
}
player.init();
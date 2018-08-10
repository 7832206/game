window.onload = function(){
    let keyCon = document.querySelector(".keyCon")
    let bgmusic = document.querySelector("#bgmusic")
    let flag = document.querySelector("#flag")
    let life=document.querySelector(".life")
    let jf=document.querySelector(".jf")
    let death=document.querySelector(".death")
    let replay=document.querySelector(".replay")


    let gameobj = new Game()

    keyCon.ontouchstart = function(e){
        if(e.target.className=="btn"){
            e.target.style.transform = "scale(0.8)"
            gameobj.key(e.target.innerText)
           


        }
    }
    keyCon.ontouchend = function (e) {
        if (e.target.className == "btn") {
            e.target.style.transform = "scale(1)"
        }
    }

    bgmusic.ontouchstart = function(){
        if (this.className == 'Astart'){
            this.className = "Aend"

        }else{
            this.className = "Astart"
        }
    }

    flag.ontouchstart = function () {

        if (this.className == 'start') {
            this.className = "end"
            gameobj.pause()
        } else {
            gameobj.run()
            this.className = "start"
            
        }
    }
    replay.ontouchstart=function(){
        console.log(123)
        gameobj.re()
    }


     // gameobj = new Game()
    gameobj.screen = document.querySelector(".screen")
    gameobj.flag=flag;
    gameobj.bgmusic=bgmusic;
    gameobj.life=life;
    gameobj.jf=jf;
    gameobj.replay=replay

    // gameobj.constructor()
    gameobj.createLetter()
    gameobj.keyCon=keyCon
    gameobj.death=death
    gameobj.run()
    gameobj.jfNum=jf.innerText
    


    








            
}
        






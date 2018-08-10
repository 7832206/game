class Game{
    constructor(){
        //构造函数 自动运行
        this.screen ="";
        this.bgmusic="";
        this.jf="";
        this.life="";
        this.flag="";
        this.letterBox=[];
        this.letterWidth=0.5+"rem";
        this.sudu=0.01
        this.jfNum=0
        this.lifeNum=10;
        this.death=""
        this.replay=""
        // [{"name":'a'},{left:1.8}{top;2}{node}]
    }

    ints(){
        this.jf.innerText=0;
        this.life.innerText=10;
        this.bgmusic.className="Astart"
        this.screen.innerText=""
        this.letterBox=[];
        this.sudu=0.01;
        this.death.style.display="none";
        this.lifeNum=10
        }

    createLetter(num=5){
        for(let i=0;i<num;i++){
            // 创建字母1保存到数据中2查到页面中
            // 注意字母重复重叠
            let obj={}
            let letter=""
            do{let ascii = Math.floor(Math.random()*26+65)
            // A-Z ASCII值
                letter = String.fromCharCode(ascii)
             }while(this.isHas(letter))
            // this.isHas 作用判断是否重复是ture 循环   否则while
        
            let div = document.createElement("div") 
            div.className = "letter"
            div.style.backgroundImage = `url(img/A_Z/${letter}.png)`
            let left='';
            do{

             left=Math.random()*5.7+0.6+"rem";
             div.style.left=left;

        }
                while(this.isrepeat(left))
             // div.style.left=left;
             this.screen.appendChild(div);
             obj.name=letter;
             obj.left=left;
             obj.top=0.9;
             obj.node=div;
             this.letterBox.push(obj);
            // console.log(obj.name);
            // console.log(obj.left);
            // console.log(this.letterBox);
            // console.log(letter)


        }
    }



    run(){
            this.t=setInterval(()=>{
              this.letterBox.forEach((item,index)=>{
                    item.top+=this.sudu;
                 if(item.top>=7.9){                   
                    this.screen.removeChild(item.node);
                    this.letterBox.splice(index,1);
                    this.createLetter(1);
                    this.lifeNum--;
                    this.addlife();
                    
                }
                item.node.style.top=item.top+"rem";


              })
              
        }
        ,2);
        }


    key(name){ 
                this.letterBox.forEach((item,index)=>{  
                if(item.name==name){
                this.screen.removeChild(item.node);
                this.letterBox.splice(index,1);
                this.createLetter(1);   
                this.jfNum++;
                // console.log(this.jfNum)
                this.addjf();

            }

            })     
           
        }
    


   isHas(letter){

        for(let item of this.letterBox){
            // console.log(item);
            if(letter==item.name){
                return true;
            }
        }
        return false;
    }
    isrepeat(left){
        for(let item of this.letterBox){

            if( Math.abs((parseFloat(left)-parseFloat(item.left)))<0.5 ){
               
                return true;
            }
        

        }
        return false;


    }
    addjf(){
        this.jf.innerText=this.jfNum;
        this.sudu=this.jfNum/100+0.01;
    }
    addlife(){
        if(this.lifeNum<=0){
            // this.t=clearInterval()
            this.death.style.display="block";
            this.pause()
            this.death.childNodes[1].childNodes[1].innerText=this.jfNum;
            
        }
        this.life.innerText=this.lifeNum;
    }
    pause(){
       
        clearInterval(this.t)
    }
    
    re(){

        this.death.style.display="none";
        this.ints();
        console.log(this.lifeNum)
        this.createLetter(5);
        this.run()



    }
        



    


}

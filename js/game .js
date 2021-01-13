class Game{
    constructor(){

    }

    getState(){
        var getStateref=database.ref("gameState");
        getStateref.on("value",function(data){
            gameState=data.val();
        })
    }

    update(state){
        database.ref("/").update({

            gameState:state
        })
    }
    
    start(){
        form=new Form();
        form.display();
        player=new player();
    }
}
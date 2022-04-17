var flag = false;
var won = false;
var buttonMatrix = [0,0,0,0,0,0,0,0,0]
 
// players play
$(document).ready(function(){
    $('#reset').click(function(){
        won = false;
        flag = false;
        buttonMatrix = [0,0,0,0,0,0,0,0,0]
        var buttons = $("button")
        for(i in buttons){
            if(buttons[i].id=="reset"){
                continue
            }
            buttons[i].innerText = ""
        }
    })
    $('button').click(function(){
        if(won||this.id=="reset"){
            return
        }
        if($(this).text()==""){
            flag = !flag
            if(flag) {
                $(this).text("x");
            } else {
                $(this).text("o");
            }
        }
        //console.log(this.id,this.innerText)
        buttonMatrix[this.id-1] = this.innerText;
        console.log(buttonMatrix)
 
        if (buttonMatrix[0] == 'x' & buttonMatrix[1] == 'x' &buttonMatrix[2] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[3] == 'x' & buttonMatrix[4] == 'x' &buttonMatrix[5] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[6] == 'x' & buttonMatrix[7] == 'x' &buttonMatrix[8] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[0] == 'o' & buttonMatrix[1] == 'o' &buttonMatrix[2] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[3] == 'o' & buttonMatrix[4] == 'o' &buttonMatrix[5] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[6] == 'o' & buttonMatrix[7] == 'o' &buttonMatrix[8] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[0] == 'o' & buttonMatrix[3] == 'o' &buttonMatrix[6] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[1] == 'o' & buttonMatrix[4] == 'o' &buttonMatrix[7] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[2] == 'o' & buttonMatrix[5] == 'o' &buttonMatrix[8] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[0] == 'x' & buttonMatrix[3] == 'x' &buttonMatrix[6] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[1] == 'x' & buttonMatrix[4] == 'x' &buttonMatrix[7] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[2] == 'x' & buttonMatrix[5] == 'x' &buttonMatrix[8] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[0] == 'x' & buttonMatrix[4] == 'x' &buttonMatrix[8] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[2] == 'x' & buttonMatrix[4] == 'x' &buttonMatrix[6] == 'x'){alert("Player 1 win!");won=true};
        if (buttonMatrix[0] == 'o' & buttonMatrix[4] == 'o' &buttonMatrix[8] == 'o'){alert("Player 2 win!");won=true};
        if (buttonMatrix[2] == 'o' & buttonMatrix[4] == 'o' &buttonMatrix[6] == 'o'){alert("Player 2 win!");won=true};
    })
})
var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var screenValue = '';

for(var btn of buttons){
    btn.addEventListener('click', function(event){
        var buttonData = event.target.innerText;
        // console.log(buttonData);
        if(buttonData == "AC"){
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonData == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonData == "+/-"){
            if(screen.value > 0){
                screenValue = eval(-1 * screen.value);
                screen.value = screenValue;
            }
            else if(screenValue == ''){
                screen.value = screenValue;
            }
            else{
                screenValue = eval(-1 * screen.value);
                screen.value = screenValue;
            }

        }
        else{
            screenValue += buttonData;
            screen.value = screenValue;
        }
        
    });
}
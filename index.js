"Use Strict"

function my_spaceship(myspaceship){
  shipUpper = myspaceship.toUpperCase();
  
  direction=["up", "down", "left", "up", "right", "down", "left"];
  index = 3;
  x = 0;
  y = 0;
  consoleAnswer = "";
  
for(i = 0; i<shipUpper.length; i++){
      
    while(shipUpper[i]!="R"&&shipUpper[i]!="L"&&shipUpper[i]!="A"){
        console.log("invalid");
    }
    if(shipUpper[i] == "A" && index == 3){
        y--;
    }else if(shipUpper[i] == "R"){
        direction[index];
        index++;;
    }else if(shipUpper[i] == "L"){
        direction[index];
        index--;
    }else if(shipUpper[i] == "A" && direction[index] == "right"){
        x++;
    }else if(shipUpper[i] == "A" && direction[index] == "down"){
        y++;
    }else if(shipUpper[i] == "A" && direction[index] == "left"){
        x--;
    }else if(shipUpper[i] == "A" && direction[index] == "up"){
        y--;
    }
  }
	consoleAnswer = `{x: ${x}, y: ${y}, direction: '${direction[index]}'}`;
	return consoleAnswer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(i = 0; i <= arr.length; i++){
  console.log(arr[i]);
}
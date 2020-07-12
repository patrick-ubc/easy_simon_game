function restart(e){
  round=0;
  array=[];
  generateNext();
  twinkle();
  e.target.style.cursor='pointer';
  e.target.innerHTML='good luck'
  document.getElementById('luck').removeEventListener('click',restart);
}


function click(){
  function mouseUp(e){
    e.target.style.backgroundColor='';
    e.target.style.color='';
    if(parseInt(e.target.innerHTML)===array[round]){
      if(round===array.length-1){
        document.getElementById('current_streak').innerHTML=round+1;
        generateNext();
        twinkle();
        round=0;
      }else{
        round++;
      }
    }else{
      document.getElementById('luck').innerHTML='you failed,click here to restart';
      document.getElementById('luck').addEventListener('click',restart);
      if(parseInt(document.getElementById('current_streak').innerHTML)>parseInt(document.getElementById('best_streak').innerHTML)){
      document.getElementById('best_streak').innerHTML=document.getElementById('current_streak').innerHTML;
      }
      document.getElementById('current_streak').innerHTML=0;
    }
  }


  function mouseDownRed(){
    red.style.backgroundColor='black';
    red.style.color='black';
  }
  function mouseDownBlue(){
    blue.style.backgroundColor='black';
    blue.style.color='black';
  }
  function mouseDownGreen(){
    green.style.backgroundColor='black';
    green.style.color='black';
  }
  function mouseDownYellow(){
    yellow.style.backgroundColor='black';
    yellow.style.color='black';
  }
/*
  function redOver(){
    red.style.width='250px';
    red.style.height='250px';
  }
  function redOut(){
    red.style.width='200px';
    red.style.height='200px';
  }

  red.addEventListener('mouseover',redOver);
  red.addEventListener('mouseout',redOut);
*/
    red.addEventListener('mouseup',mouseUp);
    red.addEventListener('mousedown',mouseDownRed);
    blue.addEventListener('mouseup',mouseUp);
    blue.addEventListener('mousedown',mouseDownBlue);
    green.addEventListener('mouseup',mouseUp);
    green.addEventListener('mousedown',mouseDownGreen);
    yellow.addEventListener('mouseup',mouseUp);
    yellow.addEventListener('mousedown',mouseDownYellow);
}


function generateNext(){
  let random=Math.floor(Math.random()*3);
  array.push(random);
  /*
  if(random===0){
    array.push('red');
  }else if(random===1){
    array.push('blue');
  }else if(random===2){
    array.push('green');
  }else{
    array.push('yellow');
  }
  */
}
//0:red  1:blue   2:green   3:yellow

function twinkle(){
  for(let i=0;i<array.length;i++){
    if(array[i]===0){
      setTimeout(function(){
        red.style.backgroundColor='black';
        red.style.color='black';
      },flashlightTime*i+intervalTime*i+newRoundTime);
      setTimeout(function(){
        red.style.backgroundColor='';
        red.style.color='';
      },flashlightTime*(i+1)+intervalTime*i+newRoundTime);
    }else if(array[i]===1){
      setTimeout(function(){
        blue.style.backgroundColor='black';
        blue.style.color='black';
      },flashlightTime*i+intervalTime*i+newRoundTime);
      setTimeout(function(){
        blue.style.backgroundColor='';
        blue.style.color='';
      },flashlightTime*(i+1)+intervalTime*i+newRoundTime);
    }else if(array[i]===2){
      setTimeout(function(){
        green.style.backgroundColor='black';
        green.style.color='black';
      },flashlightTime*i+intervalTime*i+newRoundTime);
      setTimeout(function(){
        green.style.backgroundColor='';
        green.style.color='';
      },flashlightTime*(i+1)+intervalTime*i+newRoundTime);
    }else{
      setTimeout(function(){
        yellow.style.backgroundColor='black';
        yellow.style.color='black';
      },flashlightTime*i+intervalTime*i+newRoundTime);
      setTimeout(function(){
        yellow.style.backgroundColor='';
        yellow.style.color='';
      },flashlightTime*(i+1)+intervalTime*i+newRoundTime);
    }
  }
}

let round=0;
let red=document.getElementById('red');
let blue=document.getElementById('blue');
let green=document.getElementById('green');
let yellow=document.getElementById('yellow');
let flashlightTime=250;
let intervalTime=250;
let newRoundTime=500;
let array=[];
generateNext();
twinkle();
click();
/*
function redCheck(){

}


















/*
let generateNextColor=function(){
  let randomNum=Math.floor(Math.random()*4);
  if(randomNum===0){
    red.style.backgroundColor='black';
    setTimeout(function(){red.style.backgroundColor='';},flashlightTime);
    array.push('red');
  }else if(randomNum===1){
    blue.style.backgroundColor='black';
    setTimeout(function(){blue.style.backgroundColor='';},flashlightTime);
    array.push('blue');
  }else if(randomNum===2){
    green.style.backgroundColor='black';
    setTimeout(function(){green.style.backgroundColor='';},flashlightTime);
    array.push('green');
  }else{
    yellow.style.backgroundColor='black';
    setTimeout(function(){yellow.style.backgroundColor='';},flashlightTime);
    array.push('yellow');
  }
}

let checkArray=function(array){
  let click;
  for(let i=0;i<array.length.i++){
    click=red.onclick(function(){return 'red'});
  }
}

let checkClick=function(str){
  let strCheck,redCheck,blueCheck,greenCheck,yellowCheck;
  strCheck=document.getElementById(str).onclick(function()=>{return true});
  if('red'!==str)
    redCheck=document.getElementById('red').onclick(function()=>{return false});
}


generateNextColor();
checkArray(array);
*/

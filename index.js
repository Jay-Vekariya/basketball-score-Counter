sc1 = document.getElementById("score1")
sc2 = document.getElementById("score2")
let sum = 0;
let sum1 = 0;
function l1(){
    //  console.log("lone btn clickled...!!")
    sum+=1;
    sc1.innerHTML=sum;
}
function l2(){
    sum+=2;
    sc1.innerHTML=sum;
}
function l3(){
    sum+=3;
    sc1.innerHTML = sum;
}

// right part btn
function rone(){
    sum1+=1;
    sc2.innerHTML = sum1;
}
function rtwo(){
    sum1+=2;
    sc2.innerHTML = sum1;
}
function rthree(){
    sum1+=3;
    sc2.innerHTML = sum1;
}
function sub(){
    console.log("submit button clicked")   
    if(sum>sum1){
        // alert("team a is won")
        document.getElementById('answer').innerHTML="Team A is Won";
    }
    else if(sum1>sum){
        // alert("team b is won")
        document.getElementById('answer').innerHTML="Team B is Won";
    }
    else{
        // alert("")
        document.getElementById('answer').innerHTML="Team A or B Tie";
    }
}

function play(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    // console.log(randomNumber1);
    // console.log(randomNumber2);
    document.getElementsByClassName("img1")[0].setAttribute("src","images/dice"+randomNumber1+".png");
    document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+randomNumber2+".png");

    if(randomNumber1>randomNumber2)
    {
        var text = document.getElementsByTagName("h1")[0];
        text.textContent="Player 1 Wins!!";
    }
    else if(randomNumber1===randomNumber2)
    {
        var text = document.getElementsByTagName("h1")[0];
        text.textContent="Draw!!";
    }
    else
    {
        var text = document.getElementsByTagName("h1")[0];
        text.textContent="Player 2 Wins!!";
    }
}
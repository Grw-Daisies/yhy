var player = "0";
var won = false;

function clickBox(box)
{
    if (box.innerText != "" || won) return;
    box.innerText = player;

    if (player == "0")
    {
        player = "x";
    }
    else
    {
        player = "0";
    }

    // player == "0"  ? player = "x" : player = "0";

    // let number = 7;

    // if (number % 2 === 0) {
    //     alert("Число четное");
    // } else {
    //     alert("Число нечетное");
    // } 

    // number % 2 === 0 ? number = alert("chet") : number = alert("nechet");

    // var grade = 75;

    // if (grade >= 60){
    // alert("Проходной балл достигнут"); }
    // else{
    // alert("Не проходной балл"); }

    // grade >=60 ? grade = alert("dog") : grade = alert("fuck");

    // var age = 20;

    // if ( age>= 18){
    //     var legalStatus = "Совершеннолетний" ;
    // }
    // else {
    //     var legalStatus = "Несовершеннолетний";
    // }
    // alert(legalStatus);

    // age >= 18 ? age = alert("sov") : age = alert("nesov poshel nahuy");

    // var currency = "EUR";
    // var result = (currency === "USD") ? 1.0 :  (currency === "EUR") ? 0.85 : "[p ,kz";

    // alert(result);

    // if (currency === "USD"){
    //     exchangeRate = 1.0 
    // }
    // else{
    //     if (currency === "EUR"){
    //         exchangeRate = 0.85
    //     }
    //     else{
    //         exchangeRate = "Неизвестная валюта";
    //     }
    // }

    checkGame();

}
function checkGame()
{
    for (var i = 0; i <= 2; i++)
    {
        var first = document.getElementById("0_" + i).innerText;
        var second = document.getElementById("1_" + i).innerText;
        var third = document.getElementById("2_" + i).innerText;

        if (first == "") continue;

        if (first == second && first == third)
        {
            alert("WINNER!");
            won = true;
        }
    }

    for (var i = 0; i <= 2; i++)
    {
        var first1 = document.getElementById(i + "_0").innerText;
        var second1 = document.getElementById(i + "_1").innerText;
        var third1 = document.getElementById(i + "_2").innerText;

        if (first1 == "") continue;

        if (first1 == second1 && first1 == third1)
        {
            alert("WINNER!");
            won = true;
        }
    }

    var first0 = document.getElementById("0_0").innerText;
    var second0 = document.getElementById("1_1").innerText;
    var third0 = document.getElementById("2_2").innerText;

    if (first0 != "" && first0 == second0 && first0 == third0)
    {
        alert("WINNER!");
        won = true;
    }

    var first2 = document.getElementById("0_2").innerText;
    var second2 = document.getElementById("1_1").innerText;
    var third2 = document.getElementById("2_0").innerText;

    if (first2 != "" && first2 == second2 && first2 == third2)
    {
        alert("WINNER!");
        won = true;
    }


}

function Reload()
{
    location.reload();
}

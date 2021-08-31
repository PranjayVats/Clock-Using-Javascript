setInterval(setClock,1000);   
//here the setInterval function excecute a function for the given number of time.

//Now creating a setClock() whixh specify the working we need in our clock.
function setClock(){
    d= new Date();
    h= d.getHours();   //setting h to current hours
    m= d.getMinutes(); //setting m to current minutes
    s= d.getSeconds(); //setting s to current seconds
    hrotation= 30*h + m/2 + s/120;  //calculating rotation for hour hand.
    mrotation= 6*m + s/60;  //calculating rotation for minute hand.
    srotation= 6*s;    //calculating rotation for second hand.
    hours.style.transform= `rotate(${hrotation}deg)`; 
    minutes.style.transform= `rotate(${mrotation}deg)`;
    seconds.style.transform=`rotate(${srotation}deg)`;
}
setInterval(function() {
    var date = new Date();
    var hHand = date.getHours();
    var mHand = date.getMinutes();
    var sHand = date.getSeconds(); 

    var hRotation = 30 * hHand + mHand/2;
    var mRotation = 6 * mHand; 
    var sRotation = 6 * sHand;

    document.querySelector("#hour").style.transform = `rotate(${hRotation}deg)`
    document.querySelector("#minute").style.transform = `rotate(${mRotation}deg)`
    document.querySelector("#secound").style.transform = `rotate(${sRotation}deg)`
}, 1000);
function openDoor() {
    var door1 = document.getElementById("left-door");
   door1.style.transform = "rotateY(-140deg)";
   document.getElementById("print").innerHTML = "HELLO, MABUHAY!😉";
   document.getElementById('openDoor1').play();
   
}

function closeDoor() {
    var door2 = document.getElementById("left-door");
    document.getElementById("print").innerHTML = "";
    document.getElementById('closeDoor2').play();
    door2.style.transform = "";

   
}
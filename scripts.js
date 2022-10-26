function toDoMore() {
    //Creates a new do to task 
    var uusi = document.createElement("li");
    var tehtava = document.getElementById("inputti").value;
    var sisalto = document.createTextNode(tehtava);
    uusi.appendChild(sisalto)
    //If statement alerts, if input to form is empty. At the same changes border color to red/black depending if something was written
    if (tehtava === '') {
        alert("You need to do something!")
        document.getElementById("inputti").style.borderColor = "red"
    } else {
        document.getElementById("lista").appendChild(uusi)
        document.getElementById("inputti").style.borderColor = "black"
    }
    //With this we empty the form for new to do task. Otherwise it would keep the old input.
    document.getElementById("inputti").value = '';
    //Stores the input to local storage (It has error, because it only stores the latest input)
    localStorage.setItem("tallennus", tehtava);

    //Creates button for deletion 
    var nappula = document.createElement("Button");
    var txt = document.createTextNode("\u00D7");
    nappula.className = "close";
    nappula.appendChild(txt);
    uusi.appendChild(nappula);

    //Pressing deletion button will close (this one I had to find from internet how to do)
    var poisto = document.querySelectorAll(".close");
    for(var i=0; i<poisto.length; i++){
        poisto[i].onclick = function(){
            this.parentNode.remove();
        }
}
}

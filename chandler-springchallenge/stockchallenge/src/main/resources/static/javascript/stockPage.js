window.onload = function () {
    document.getElementById("listButton").addEventListener('click', listAll)
    document.getElementById("greaterButton").addEventListener('click', listGreater)
    document.getElementById("lessButton").addEventListener('click', listLesser)
    document.getElementById("symbolButton").addEventListener('click', singlestock)
    document.getElementById("buyButton").addEventListener('click', update)
}

function listAll(){
    console.log("here");
    let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){

        if(xhttp.readyState==4 && xhttp.status==200){
            console.log("readyState is 4!!! AND....status is 200 OK");
            let ourObj = JSON.parse(xhttp.responseText);
            console.log(ourObj); 
            ourDOMManipulationFunction2(ourObj);
        }
   }
  xhttp.open('GET', `http://localhost:9001/stock/list`);
  xhttp.send();

}

function listGreater(){
    const textField = document.getElementById("marketCapText").value;
    let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){

        if(xhttp.readyState==4 && xhttp.status==200){
            console.log("readyState is 4!!! AND....status is 200 OK");
            let ourObj = JSON.parse(xhttp.responseText);
            console.log(ourObj); 
            ourDOMManipulationFunction2(ourObj);
        }
   }
  xhttp.open('POST', `http://localhost:9001/stock/listgreater?selectgreater=${textField}`);
  xhttp.send();

}

function listLesser(){
    const textField = document.getElementById("marketCapText").value;
    let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){

        if(xhttp.readyState==4 && xhttp.status==200){
            console.log("readyState is 4!!! AND....status is 200 OK");
            let ourObj = JSON.parse(xhttp.responseText);
            console.log(ourObj); 
            ourDOMManipulationFunction2(ourObj);
        }
   }
  xhttp.open('POST', `http://localhost:9001/stock/listlessthanequal?selectlessequal=${textField}`);
  xhttp.send();
}

function singlestock(){
    const textField = document.getElementById("ticketSymbol").value;
    let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){

        if(xhttp.readyState==4 && xhttp.status==200){
            console.log("readyState is 4!!! AND....status is 200 OK");
            let ourObj = JSON.parse(xhttp.responseText);
            console.log(ourObj); 
            ourDOMManipulationFunction(ourObj);
        }
   }
  xhttp.open('POST', `http://localhost:9001/stock/ticketsymbol?ticketsymbol=${textField}`);
  xhttp.send();
}

function update(){
    const textField1 = document.getElementById("stockquantity").value;
    const textField2 = document.getElementById("stockprice").value;
    const textField3 = document.getElementById("ticketSymbol").value;
    let xhttp = new XMLHttpRequest();

   xhttp.onreadystatechange = function(){

        if(xhttp.readyState==4 && xhttp.status==200){
            console.log("readyState is 4!!! AND....status is 200 OK");
            let ourObj = JSON.parse(xhttp.responseText);
            console.log(ourObj); 
            ourDOMManipulationFunction(ourObj);
        }
   }
  xhttp.open('POST', `http://localhost:9001/stock/update?stockquantity=${textField1}&stockprice=${textField2}&ticketsymbol=${textField3}`);
  xhttp.send();
}



function ourDOMManipulationFunction(ourObject){
    let newTR = document.createElement("tr");
        let newTH = document.createElement("th");

        let newTD1 = document.createElement("td");
        let newTD2 = document.createElement("td");
        let newTD3 = document.createElement("td");
        let newTD4 = document.createElement("td");

        //step 2: populate our creations
        newTH.setAttribute("scope", "row");
        let myTextH = document.createTextNode(ourObject.stockId);
        let myTextD1 = document.createTextNode(ourObject.ticketSymbol);
        let myTextD2 = document.createTextNode(ourObject.marketCap);
        let myTextD3 = document.createTextNode(ourObject.marketCap / ourObject.stockQuantity)
        let myTextD4 = document.createTextNode(ourObject.stockQuantity);

        //all appending
        newTH.appendChild(myTextH);
        newTD1.appendChild(myTextD1);
        newTD2.appendChild(myTextD2);
        newTD3.appendChild(myTextD3);
        newTD4.appendChild(myTextD4);

        newTR.appendChild(newTH);
        newTR.appendChild(newTD1);
        newTR.appendChild(newTD2);
        newTR.appendChild(newTD3);
        newTR.appendChild(newTD4);

        let newSelection = document.querySelector("#stockBody");
        newSelection.appendChild(newTR);
}

function ourDOMManipulationFunction2(ourObject){
    for(let i=0; i<ourObject.length; i++){
        let newTR = document.createElement("tr");
        let newTH = document.createElement("th");

        let newTD1 = document.createElement("td");
        let newTD2 = document.createElement("td");
        let newTD3 = document.createElement("td");
        let newTD4 = document.createElement("td");

        //step 2: populate our creations
        newTH.setAttribute("scope", "row");
        let myTextH = document.createTextNode(ourObject[i].stockId);
        let myTextD1 = document.createTextNode(ourObject[i].ticketSymbol);
        let myTextD2 = document.createTextNode(ourObject[i].marketCap);
        let myTextD3 = document.createTextNode(ourObject[i].marketCap / ourObject[i].stockQuantity)
        let myTextD4 = document.createTextNode(ourObject[i].stockQuantity);

        //all appending
        newTH.appendChild(myTextH);
        newTD1.appendChild(myTextD1);
        newTD2.appendChild(myTextD2);
        newTD3.appendChild(myTextD3);
        newTD4.appendChild(myTextD4);

        newTR.appendChild(newTH);
        newTR.appendChild(newTD1);
        newTR.appendChild(newTD2);
        newTR.appendChild(newTD3);
        newTR.appendChild(newTD4);

        let newSelection = document.querySelector("#stockBody");
        newSelection.appendChild(newTR);
    }
}
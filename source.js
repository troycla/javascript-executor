
const myDiv = document.createElement("div");
myDiv.id = "mydiv";
myDiv.style.position = "absolute";
myDiv.style.zIndex = "9";
myDiv.style.height = "200px";
myDiv.style.width = "210px";
myDiv.style.background = "black";
myDiv.style.textAlign = "center";
myDiv.style.borderRadius = "10px";
myDiv.style.border = "3px solid red";


const myDivHeader = document.createElement("div");
myDivHeader.id = "mydivheader";
myDivHeader.style.padding = "10px";
myDivHeader.style.cursor = "move";
myDivHeader.style.zIndex = "10";
myDivHeader.style.borderRadius = "10px";
myDivHeader.style.borderBottomRadius = "1px";
myDivHeader.style.backgroundColor = "black";
myDivHeader.style.color = "red";
myDivHeader.innerText = "javascript executor";
myDiv.appendChild(myDivHeader);


const textarea = document.createElement("textarea");
textarea.className = "onettextarea";
textarea.id = "1code-textarea";
textarea.style.border = "2px solid red";
textarea.style.borderRadius = "5px";
textarea.style.background = "black";
textarea.style.color = "red";
textarea.style.width = "190px";
textarea.style.height = "75px";
myDiv.appendChild(textarea);

const runButton = document.createElement("button");
runButton.className = "onetbutton";
runButton.style.color = "red";
runButton.style.background = "black";
runButton.style.textAlign = "center";
runButton.style.borderRadius = "10px";
runButton.style.border = "3px solid red";
runButton.innerText = "Run";
runButton.onclick = runCodeq;
myDiv.appendChild(runButton);

const runButton2 = document.createElement("button");
runButton2.className = "onetbutton";
runButton2.style.color = "red";
runButton2.style.background = "black";
runButton2.style.textAlign = "center";
runButton2.style.borderRadius = "10px";
runButton2.style.border = "3px solid red";
runButton2.innerText = "Dev Console";
runButton2.onclick = runCodea;
myDiv.appendChild(runButton2);

document.body.appendChild(myDiv);


function runCodeq() {
    const code = document.getElementById("1code-textarea").value;
    eval(code);
}

function runCodea(){
 javascript:(function () { var script = document.createElement('script'); script.src="https://cdn.jsdelivr.net/npm/eruda"; document.body.append(script); script.onload = function () { eruda.init(); } })();
}


function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }

    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }
}


dragElement(myDiv);

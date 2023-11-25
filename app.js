let submain = document.getElementById("main");
let subcontainer2 = document.getElementById("subcon2");
let addbutton = document.getElementById("addbutton");
let userinput = document.getElementById("taskinput");

addbutton.addEventListener('click', () => {
    if (userinput.value === "") {
        alert("UserInput is Manditory")
    }
    else {
        let div = document.createElement("div");
        div.setAttribute("id", "subcon2");
        submain.appendChild(div);

        let element = document.createElement("p");
        element.setAttribute("id", "content");
        div.appendChild(element);
        element.innerHTML = userinput.value;

        let button = document.createElement("button");
        button.setAttribute("id", "deletebutton");
        button.setAttribute("class", "btns");
        div.appendChild(button);

        let icon = document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-trash");
        button.appendChild(icon);

        button.addEventListener('click', () => {
            div.remove();
        });
        userinput.value=""
    }
})
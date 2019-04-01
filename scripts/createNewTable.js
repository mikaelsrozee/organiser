document.getElementById("newTableButton").addEventListener("click", function () {
    if ('content' in document.createElement('template')) {
        const table = document.querySelector("#tasktable");
        const clone = document.importNode(table.content, true);

        document.querySelector("main").append(clone);
        document.getElementById("newTableButton").setAttribute("class", "hidden");
    }  else {
        document.body.innerHTML = "Your browser is incompatible."
    }
});
window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault ()
        const firstName = document.getElementById("firstName").value;
        const island = document.getElementById("island").value;

        document.querySelector("span#firstName").innerText = firstName
        document.querySelector("span#island").innerText = island

        document.querySelector("div#postcard").removeAttribute("class");
    };
};
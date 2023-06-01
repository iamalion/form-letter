function getAndSetValues () {
    const firstName = document.getElementById("firstName").value;
    const island = document.getElementById("island").value;

    document.querySelector("span#firstName").innerText = firstName
    document.querySelector("span#island").innerText = island
}
window.onload = function () {
    let form = document.querySelector("form")
    form.onsubmit = function (event) {
        event.preventDefault ();
        getAndSetValues();
        document.querySelector("div#postcard").removeAttribute("class")
    };
};
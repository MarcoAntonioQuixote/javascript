let isDrunk = confirm('Are you drunk?');

let response = document.getElementById('response');

if (isDrunk === true) {
    response.innerText = "Mark Anthony is drunk";
} else {
    response.innerText = "Mark Anthony is all good";
}

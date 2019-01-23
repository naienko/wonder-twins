const flightHandlerFunction = () => {
    let classes = document.querySelector("#flight").classList;
    classes.remove("disabled");
    classes.add("enabled");
}

document.querySelector("#activate-flight").addEventListener("click", function() {
    flightHandlerFunction();
})

const mindreadingHandlerFunction = () => {
    let classes = document.querySelector("#mindreading").classList;
    classes.remove("disabled");
    classes.add("enabled");
}

document.querySelector("#activate-mindreading").addEventListener("click", function() {
    mindreadingHandlerFunction();
})

const xrayHandlerFunction = () => {
    let classes = document.querySelector("#xray").classList;
    classes.remove("disabled");
    classes.add("enabled");
}

document.querySelector("#activate-xray").addEventListener("click", function() {
    xrayHandlerFunction();
})


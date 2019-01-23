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

const allHandlerFunction = () => {
    let powers = document.querySelectorAll("section");
    powers.forEach(element => {
        let classes = element.classList;
        classes.remove("disabled");
        classes.add("enabled");
    
    });
}

document.querySelector("#activate-all").addEventListener("click", function() {
    allHandlerFunction();
})

const offHandlerFunction = () => {
    let powers = document.querySelectorAll("section");
    powers.forEach(element => {
        let classes = element.classList;
        classes.add("disabled");
        classes.remove("enabled");
    
    });
}

document.querySelector("#deactivate-all").addEventListener("click", function() {
    offHandlerFunction();
})
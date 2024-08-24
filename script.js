function entry() {
    var given = document.getElementById("given").value.toLowerCase();
    var encrypted = "";

    if (given.length < 12 || given.length > 32 || !given.match(/^[a-zA-Z]+$/)) {
        document.getElementById("res").innerText = "Your input must consist of at least 12, at most 32 characters and must contain only letters.";
    } else {
        given.split("").forEach(function (letter) {
            if (["e", "z"].includes(letter)) {
                encrypted += "A";
            } else if (["t", "q"].includes(letter)) {
                encrypted += "B";
            } else if (["a", "x"].includes(letter)) {
                encrypted += "C";
            } else if (["o", "j"].includes(letter)) {
                encrypted += "D";
            } else if (["i", "k"].includes(letter)) {
                encrypted += "E";
            } else if (["v", "n"].includes(letter)) {
                encrypted += "F";
            } else if (["s", "b"].includes(letter)) {
                encrypted += "G";
            } else if (["h", "p"].includes(letter)) {
                encrypted += "H";
            } else if (["r", "y"].includes(letter)) {
                encrypted += "I";
            } else if (["d", "g"].includes(letter)) {
                encrypted += "J";
            } else if (["l", "f"].includes(letter)) {
                encrypted += "K";
            } else if (["c", "w"].includes(letter)) {
                encrypted += "L";
            } else if (["u", "m"].includes(letter)) {
                encrypted += "M";
            }
        });

        var length = encrypted.length;
        if (length < 32) {
            var missingRate = 32 - length;
            var missingLetter = ["o", "*", "]", "[", "t", "v", "x", "|", ":", ".", "z", "w", "j", "%", "&", "#", "=", "?", "!", "$"];
            encrypted += missingLetter.slice(0, missingRate).join("");
        }

        let newScript = replace(encrypted);
        let editedList = replaceArray(newScript, newPlaces);
        let output = editedList.join("");
        var resHTML = "<p>" + output + "</p>";
        document.getElementById("res").innerHTML = resHTML;
    }
}

function replaceArray(encrypted, newPlaces) {
    let newList = new Array(encrypted.length).fill("");
    newPlaces.forEach(([oldPlace, newPlace]) => {
        newList[newPlace] = encrypted[oldPlace];
    });
    return newList;
}

let newPlaces = [
    [0, 12], [1, 18], [2, 8], [3, 26], [4, 14], [5, 17], [6, 21], [7, 11],
    [8, 2], [9, 27], [10, 24], [11, 7], [12, 0], [13, 31], [14, 4], [15, 16],
    [16, 15], [17, 5], [18, 1], [19, 30], [20, 25], [21, 6], [22, 28], [23, 29],
    [24, 10], [25, 20], [26, 3], [27, 9], [28, 22], [29, 23], [30, 19], [31, 13]
];

function replace(encrypted) {
    let aCounter = 0;
    let bCounter = 0;
    let cCounter = 0;
    let dCounter = 0;
    let eCounter = 0;
    let fCounter = 0;
    let gCounter = 0;
    let hCounter = 0;
    let iCounter = 0;
    let jCounter = 0;
    let kCounter = 0;
    let lCounter = 0;
    let mCounter = 0;
    let newScript = [];

    for (let i = 0; i < encrypted.length; i++) {
        if (encrypted[i] === "A") {
            aCounter += 1;
            if (aCounter === 2) {
                newScript.push("0");
            } else if (aCounter === 3) {
                newScript.push("!");
            } else if (aCounter === 4) {
                newScript.push("a");
            } else if (aCounter === 5) {
                newScript.push("O");
            } else if (aCounter === 6) {
                newScript.push("o");
            } else {
                newScript.push(encrypted[i]);
            }
        } else if (encrypted[i] === "B") {
            bCounter += 1;
            if (bCounter === 2) {
                newScript.push("1");
            } else if (bCounter === 3) {
                newScript.push("+");
            } else if (bCounter === 4) {
                newScript.push("b");
            } else if (bCounter === 5) {
                newScript.push("P");
            } else if (bCounter === 6) {
                newScript.push("*");
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "C") {
            cCounter += 1;
            if (cCounter === 2) {
                newScript.push("2")
            } else if (cCounter === 3) {
                newScript.push("-")
            } else if (cCounter === 4) {
                newScript.push("c")
            } else if (cCounter === 5) {
                newScript.push("Q")
            } else if (cCounter === 6) {
                newScript.push("]")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "D") {
            dCounter += 1;
            if (dCounter === 2) {
                newScript.push("3")
            } else if (dCounter === 3) {
                newScript.push("%")
            } else if (dCounter === 4) {
                newScript.push("d")
            } else if (dCounter === 5) {
                newScript.push("R")
            } else if (dCounter === 6) {
                newScript.push("r")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "E") {
            eCounter += 1;
            if (eCounter === 2) {
                newScript.push("4")
            } else if (eCounter === 3) {
                newScript.push("&")
            } else if (eCounter === 4) {
                newScript.push("e")
            } else if (eCounter === 5) {
                newScript.push("S")
            } else if (eCounter === 6) {
                newScript.push("[")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "F") {
            fCounter += 1;
            if (fCounter === 2) {
                newScript.push("5")
            } else if (fCounter === 3) {
                newScript.push("/")
            } else if (fCounter === 4) {
                newScript.push("f")
            } else if (fCounter === 5) {
                newScript.push("T")
            } else if (fCounter === 6) {
                newScript.push("t")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "G") {
            gCounter += 1
            if (gCounter === 2) {
                newScript.push("6")
            } else if (gCounter === 3) {
                newScript.push("(")
            } else if (gCounter === 4) {
                newScript.push("g")
            } else if (gCounter === 5) {
                newScript.push("V")
            } else if (gCounter === 6) {
                newScript.push("v")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "H") {
            hCounter += 1;
            if (hCounter === 2) {
                newScript.push("7")
            } else if (hCounter === 3) {
                newScript.push(")")
            } else if (hCounter === 4) {
                newScript.push("h")
            } else if (hCounter === 5) {
                newScript.push("X")
            } else if (hCounter === 6) {
                newScript.push("x")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "I") {
            iCounter += 1;
            if (iCounter === 2) {
                newScript.push("8")
            } else if (iCounter === 3) {
                newScript.push("=")
            } else if (iCounter === 4) {
                newScript.push("i")
            } else if (iCounter === 5) {
                newScript.push("Y")
            } else if (iCounter === 6) {
                newScript.push("|")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "J") {
            jCounter += 1;
            if (jCounter === 2) {
                newScript.push("{")
            } else if (jCounter === 3) {
                newScript.push("}")
            } else if (jCounter === 4) {
                newScript.push("n")
            } else if (jCounter === 5) {
                newScript.push(".")
            } else if (jCounter === 6) {
                newScript.push(":")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "K") {
            kCounter += 1;
            if (kCounter === 2) {
                newScript.push("9")
            } else if (kCounter === 3) {
                newScript.push("?")
            } else if (kCounter === 4) {
                newScript.push("k")
            } else if (kCounter === 5) {
                newScript.push("Z")
            } else if (kCounter === 6) {
                newScript.push("z")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "L") {
            lCounter += 1;
            if (lCounter === 2) {
                newScript.push("_")
            } else if (lCounter === 3) {
                newScript.push("<")
            } else if (lCounter === 4) {
                newScript.push("l")
            } else if (lCounter === 5) {
                newScript.push("W")
            } else if (lCounter === 6) {
                newScript.push("w")
            } else {
                newScript.push(encrypted[i]);
            }

        } else if (encrypted[i] === "M") {
            mCounter += 1;
            if (mCounter === 2) {
                newScript.push(">")
            } else if (mCounter === 3) {
                newScript.push("$")
            } else if (mCounter === 4) {
                newScript.push("m")
            } else if (mCounter === 5) {
                newScript.push("J")
            } else if (mCounter === 6) {
                newScript.push("j")
            } else {
                newScript.push(encrypted[i]);
            }

        } else {
            newScript.push(encrypted[i]);
        }
    }
    return newScript;
}
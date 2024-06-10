function encrypt() {
    var plaintext = document.getElementById('inputText').value;
    var shift = parseInt(document.getElementById('shiftAmount').value);
    var ciphertext = '';

    for (var i = 0; i < plaintext.length; i++) {
        var charCode = plaintext.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            ciphertext += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            ciphertext += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            ciphertext += plaintext.charAt(i);
        }
    }

    document.getElementById('outputText').value = ciphertext;
}

function decrypt() {
    var ciphertext = document.getElementById('inputText').value;
    var shift = parseInt(document.getElementById('shiftAmount').value);
    var plaintext = '';

    for (var i = 0; i < ciphertext.length; i++) {
        var charCode = ciphertext.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            plaintext += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            plaintext += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            plaintext += ciphertext.charAt(i);
        }
    }

    document.getElementById('outputText').value = plaintext;
}

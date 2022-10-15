/*
Licensed under the GNU GPL v3.0 License. See https://raw.githubusercontent.com/rheild/auro/main/LICENSE for details.
Copyright 2022, rheild (https://github.com/rheild)
Do not remove this notice.
*/

const base64 = (input) => {
    let base64 = '';
    
    // to binary function
    const toBinary = (char) => {
        let binary = (char.charCodeAt('0') >>> 0).toString(2);
        while (binary.length < Math.ceil(binary.length / 8) * 8) {
            binary = "0" + binary;
        }
        return binary;
    }
    
    // convert input to binary
    let binary = '';
    for (let i = 0; i < input.length; i++) {
        binary += toBinary(input[i]);
    }
    
    // convert binary to base64
    for (let i = 0; i < Math.ceil(binary.length / 6) * 6; i += 6) {
        // split into sextets and convert to decimal
        let temp = binary.slice(i, i + 6);
        while (temp.length < 6) {
            temp += "0";
        }
        temp = parseInt(temp, 2);
        
        // convert to base64 charset
        base64 += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[temp];
    }
    
    while (base64.length % 4 != 0) {
        base64 += "=";
    }
    
    return base64;
}

const decode64 = (input) => {
    let decoded = '';
    let temp = '';
    
    // convert to binary
    for (let i = 0; i < input.length; i++) {
        let temp2 = Number("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".search(input[i])).toString(2);
        while (temp2.length < 6) {
            temp2 = "0" + temp2;
        }
        
        if (input[i] != "=") {
            temp += temp2;
        }
    }
    
    console.log(temp);
    
    // split binary into bytes (then to decimal), which are then converted into ASCII characters
    for (let i = 0; i < Math.floor(temp.length / 8) * 8; i += 8) {
        decoded += String.fromCharCode(parseInt(temp.slice(i, i + 8), 2));
    }
    
    return decoded;
}

/*
Licensed under the GNU GPL v3.0 License. See https://raw.githubusercontent.com/rheild/auro/main/LICENSE for details.
Copyright 2022, rheild (https://github.com/rheild)
Do not remove this notice.
*/

const base64 = (input) => {
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
    console.log(binary);
    
    // convert binary to base64
    for (let i = 0; i < Math.ceil(binary.length / 6) * 6; i += 6) {
        // split into sextet
        let temp = binary.slice(i, i + 6);
        do () {
        
        }
    }
}

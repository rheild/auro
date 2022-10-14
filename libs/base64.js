/*
Licensed under the GNU GPL v3.0 License. See https://raw.githubusercontent.com/rheild/auro/main/LICENSE for details.
Copyright 2022, rheild (https://github.com/rheild)
Do not remove this notice.
*/

(function(){
    const toBinary = (char) => {
        let binary = (char.charCodeAt('0') >>> 0).toString(2);
        for (let i = binary.length; i < 8; i++) {
            binary = "0" + binary;
        }
        return binary;
    }
})();

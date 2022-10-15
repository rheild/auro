/*
Features:
- RGBA to HEX
- HEX to RGBA

Licensed under the GNU GPL v3.0 License. See https://raw.githubusercontent.com/rheild/auro/main/LICENSE for details.
*/

const Color = {
    rgbaToHex(r, g, b, a) {
        function toHex(rgba) {
            return Math.round(rgba).toString(16);
        }
        
        return toHex(r) + toHex(g) + toHex(b) + toHex(a);
    },
    
    hexToRgba(hex) {
        function toRgba(v) {
            let temp = parseInt(hex[v] + hex[v+1], 16);
            if (isNaN(temp)) temp = undefined;
            return temp;
        }
        
        return {
            r: toRgba(0),
            g: toRgba(2),
            b: toRgba(4),
            a: toRgba(6),
        }
    }
}

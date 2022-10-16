/*
- RGB to HEX
- HEX to RGB

Licensed under the GNU GPL v3.0 License. See https://www.gnu.org/licenses/gpl-3.0.txt for details.
*/

const Color = {
    rgbToHex(r, g, b) {
        function toHex(rgb) {
            let temp = String(Math.floor(rgb).toString(16));
            if (temp.length === 1) temp = '0' + temp;
            return temp;
        }
        
        return toHex(r) + toHex(g) + toHex(b);
    },
    
    hexToRgb(hex) {
        function toRgb(v) {
            let temp = parseInt(hex[v] + hex[v + 1], 16);
            if (isNaN(temp)) temp = 0;
            return temp;
        }
        
        return {
            r: toRgb(0),
            g: toRgb(2),
            b: toRgb(4)
        }
    }
}

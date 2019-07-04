// To Uppercase First Letter
export const toUpperCaseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const randomColorGenerator = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
    // const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

export const pastelGenerator = () => {
    var hue = Math.floor(Math.random() * 360);
    var pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel
}
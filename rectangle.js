module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectange dimension must be greater than zero. Received: ${x}, ${y}`))
    } else{
        setTimeout(() =>
            callback(null, {
            perimter: ( ) => 2 * (x + y),
            area: () => x * y
            
            }),
            2000
        );
    }
};



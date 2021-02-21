// function returning true/false whether input isEven 

const isEven = (x) => {
    if ( x % 2 > 0) {
        return false;
    }
    else if ( x % 2 ===  0) {
        return true;
    }
    else {
        
        return isEven(x - 10 );
        
    }
    
    
}

console.log(isEven(71));
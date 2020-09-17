/*let x = [1,2,3,4,5]

function fact(n) {
    console.log(x)
    if(x.length == 1){
        return x[0];
    }
    return fact(x.slice(0,x.length-1)) + x.pop()
};
*/

/*
function fact(n)
{
    console.log(n.shift());
    console.log(n);
    if(n.length != 0) {
        fact(n);
    }
}
fact([1, 2, 3]);
*/

// sidste løsning

function fact(n){
    return (n !=1) ? n * fact(n - 1) : 1;
}
alert(fact(5));
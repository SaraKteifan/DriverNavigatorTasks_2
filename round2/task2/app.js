function decending(x){
    let l= x.length;
    let array= [];
    let max= x[0];
    let index= 0;
    for(let j=0; j<l; j++){
    for(let i=0; i<l; i++){
        if(x[i] >= max){
            max= x[i];
            index= i;
        }
    }
    array.push(max);
    x.splice(index,1)
    max= x[0];
}
return array;
}

document.getElementById('Result').innerHTML= JSON.stringify(decending([2,9,0,4]));


function palindrome(x){
    let arry= x.split('');
let l=arry.length;
for(let i=0; i<=l/2; i++){
    if (arry[i] == arry[l-1 -i]){
        continue;
   
    }
    else{
        return false;
    }

}
return true;
}

document.getElementById('Result').innerHTML= JSON.stringify(palindrome('ABCDCBA'));


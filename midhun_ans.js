var arr=[2,10,5,6,7,8,9,4]
//       0  1 2 3 4 5 6 7
//              l   r  


let l=1;

let r=arr.length-1;

while(l<r){

    [arr[l],arr[r]]=[arr[r],arr[l]];
    l+=2;
    r-=2;
}

console.log(arr);
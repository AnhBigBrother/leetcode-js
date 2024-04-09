var generate = function(numRows) {
    let arr = [];
    let n = 1;
    while (numRows+1 > 0){
        arr.push([]);
        for (let i=0; i< n; i++){
            arr[n-1].push(1);
        }
        if (n >= 3){
            for (let i=1; i<n-1; i++){
                arr[n-1][i] = arr[n-2][i-1] + arr[n-2][i];
            }
        }
        n++;
        numRows--;
    }
    return arr;
};

const arr = generate(5);
console.log(arr);
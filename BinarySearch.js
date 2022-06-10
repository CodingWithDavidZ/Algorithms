// find a value in an array using binary search with recursion and return the index
const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function recursiveBinarySearch(arr, target, start, end){

    if(start > end){
        return 'Not Found';
    }
    
    const mid = Math.floor((start + end) / 2);
    const guess = arr[mid];
    
    if(guess === target){
        return mid;
    }
    if(guess > target){
        return recursiveBinarySearch(arr, target, start, mid - 1);
    }
    return recursiveBinarySearch(arr, target, mid + 1, end);

}

console.log(recursiveBinarySearch(arr, 'h', 0, arr.length - 1));

//  find a value in an array using an iterative binary search and return the index

function iterativeBinarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while(start <= end){
        mid = Math.floor((start + end) / 2);
        const guess = arr[mid];
        if(guess === target){
            return mid;
        }
        if(guess > target){
            end = mid - 1;
        }
        if(guess < target){
            start = mid + 1;
        }
    }
    return 'Not Found';
}

console.log(iterativeBinarySearch(arr, 'h'));


/* let arr = [1,3,4,2,5,3,7,4];

//bubble sort
function bubble(arr) {
    
    for(let i = 0; i < arr.length-1; i++)
    {
        for(let j = 0; j < arr.length -1; j++)
        {
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


console.log(arr);
console.log(bubble(arr)); */

/* function compareArrays(arr1, arr2)
{
    let arr3 = [];

    for(let i = 0; i < arr1.length; i++)
    {
        for(let j= 0 ; j < arr2.length;j++)
        {
            if(arr1[i] === arr2[j])
            {
                arr3.push(arr1[i]);
            }
        }
    }
    
    for (let k = 0; k < arr3.length; k++) 
    {
        for (let m = k + 1; m < arr3.length; m++) 
        {
            if (arr3[k] === arr3[m]) 
            {
                arr3.splice(m, 1);
                m--; 
            }
        }
}
console.log(arr3);

}

compareArrays([1,2,3,4],[1,1,2,1]); */

/* function averageMatrix(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        for(let j=0; j < arr.length; j++)
        {
            sum+= arr[i][j];

        }
    }
    let amount = arr.length * arr[0].length;
    let average = sum/amount;
    return average;
}

console.log(averageMatrix([[1,2,3],[3,4,5],[6,4,2]])); */

/* function removeSame(arr, num)
{
    let tempArr = [];
    for(let i= 0; i < arr.length; i++)
    {
        tempArr.push(arr[i]);
        if(num == arr[i])
            tempArr.pop();
    }
    return tempArr;
}

console.log(removeSame([1,2,3,4,5,3,2], 2)); */

/* const stringLength = (string1) =>
{
    return string1.length > 5;
};

console.log(stringLength("ari")); */

/* const sameFirstLast = (string1) => {
    return string1[0] === string1[string1.length - 1];
};

console.log(sameFirstLast("ariela")); */

/* const firstCapital = (string1) => {
    if(string1[0] == string1[0].toUpperCase())
        return true;
    return false;
};

console.log(firstCapital("ariela")); */

/* const divideByThree = (arr) => {
    let found = false;
    arr.forEach((element, index) => {
        if(element %3 == 0)
        {
            console.log("Element " , element);
            console.log("index " , index);
            found = true;
        }
    });
    if(!found)
        console.log("The array is not divisible by 3");
}

divideByThree([2,4,7]); */

/* const matchingArray = (arr) => {
    let newArray = [];
    arr.forEach(element => {
        if(element === element.toUpperCase())
            newArray.push("U");
        else
            newArray.push("L");
    });
    console.log(newArray);
};

matchingArray(['a','B','f']); */

/* const matchingArray2 = (arr) => {
    const newArray = arr.map((element) => {
        if(element === element.toUpperCase())
            return "U";
        else 
            return "L";
    });
    return newArray;
};

console.log(matchingArray2(['a','B','f'])); */
/* 
const changeIndex = (arr) => {
    const newArray = arr.map((element, index) => {
        if(index % 2 == 0)
        {
            return index;
        }
        else
            return element;
    });
    return newArray;
};

console.log(changeIndex(['a','b','c','d','e','f'])); */

/* const above18 = (arr) => {
    const newArray = arr.filter((element) => {
        if(element >= 18)
            return true;
        else return false;
    });
    return newArray;
};

console.log(above18([2,50,32,18,13])) */

/* const allBut3 = (arr) => {
    const newArray = arr.filter((element, index) => {
        if(index === 3)
            return false;
        else
            return true;
    });
    return newArray;
};

console.log(allBut3([2,4,1,2,7,2,8])); */

/* let names = [];
const addName = (str1) => {
    names = [...names, str1];
    return names;
};

console.log(addName("ariela")); */

const combineNames = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(combineNames(["ariela"],["benjy"]));
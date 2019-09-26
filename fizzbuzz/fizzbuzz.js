function fizzBuzz(list1, list2) {
    let sum = list1.length + list2.length;

    if(sum % 3 == 0 && sum % 5 == 0 )
    {
       return "Fizzbuzz";
    }
    else if(sum % 3 == 0)
    {
        return "Fizz";
    }
    else if(sum % 5 == 0)
    {
        return "Buzz";
    }
    else if(sum % 3 != 0 && sum % 5 != 0)
    {
       return sum;
    }
}
console.log (fizzBuzz([1, 2, 3], [ ]));
console.log(fizzBuzz([1, 2, 3], [1, 2]));
console.log(fizzBuzz([1, 2, 3], [1]));
module.exports = fizzBuzz;
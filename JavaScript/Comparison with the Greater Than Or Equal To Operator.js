function testeGreater0rEqual {
    if (val >= 20) { // Change this line
        return "20 or Over";
    }

    if (val >= ) { // Change this line
        return "10 or Over"
    }

    return "Less than 10"
}

// Change this value to test
testeGreater0rEqual(10);

/* Comparison with the Greater Than Or Equal To Operator

The greater than or equal to operator( >=) compares the values of two
numbers. If the number to the left is greater than or equal the number to the right, it
returns true. Otherwise, it resturns false.

Like the equality operator, greater thar or equal to operator will convert data
types while comparing

Example:
6 >= 6 // true 
7 >= '3' //true
2 >= 3 // false
'7' >=  // false

Add the greater than or equal to operator to the indicated lines so that the
return statements make sense

testeGreaterOrEqual(0) should return "Less than 10"
testeGreaterOerEqual(9) should return "Less than 10"
testeGreaterOerEqual(10) should return "10 or Over"
testeGreaterOerEqual(11) should return "10 or Over"
testeGreaterOerEqual(19) should return "10 or Over"
testeGreaterOerEqual(100) should return "20 0r Over"
testeGreaterOrEqual(21) should return "20 or over"
You should use the >= operator at least twice
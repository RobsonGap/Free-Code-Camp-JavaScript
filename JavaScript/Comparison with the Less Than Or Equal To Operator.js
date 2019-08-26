import { functionTypeAnnotation } from "babel-types";

/* 
Comparison with the Less Than Or Equal To Operator

The less than or equal to operator (<=) compares the values of two number.If
the number to the left is less than or equal to the number to the right, it returns true.If
the number or the left is greater than the number on the right, it returns false.Like the
equality operator, less than or equal to  converts data types.

Examples
4 <= 5 // true 
'7'<= 7 // true
5 <= 5 // true 
3 <= 2 // false
'8' <= 4 // false

Add the less than or equal to operator to the indicated  lines so that the return
statements make sense.

testLessOrEqual(0) should return "Smaller Than or Equal to 12"
testLessOrEqual(11) should return "Smaller Than or Equal to 12"
testLessOrEqual(12) should return "Smaller Than or Equal to 12"
testLessOrEqual(23) should return "Smaller Than or Equal to 24"
testLessOrEqual(24) should return "Smaller Than or Equal to 24"
testLessOrEqual(25) should return "More Than 24"
testLessOrEqual(55) should return"More Than 24"
You should use the <= operator at least twice 
*/

function testLessOrEqual(val) {
    if (val <= 12) { //Change this line
        return "Smaller than or Equal to 12";
    }

    if (val <= 24) { //Change this line
        return "Smaller Than or Equal to 24"
    }

    return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);
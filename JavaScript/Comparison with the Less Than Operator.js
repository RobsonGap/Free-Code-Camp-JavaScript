function testeLessThan(val) { // Change this line 
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) { // Change this line
        return "Under 55";
    }

    return "55 or Over";

}

// Change this value to test
testLessThan(10);

/* Comparsion with the Less Than Operator

The less than operator(<) compares the values of two numbers. If number to the left
is less than the number to the right, it returns true. Otherwise, it returns false. like
the equality operator, less than operator converts data types while comparing

Examples:
2 < 5 // true
'3' < 7 // true
5 < 5 // false 
3 < 2 // false
'8'< 4 // false

Add the less than operator to the indicated lines so that the return statements make
sense.

testeLessThan(0) should return "Under 25"
testeLessThan(24) should return "Under 25"
testeLessThan(25)  should return "Under 55"
testeLessThan(54) should return "Under 55"
testeLessThan(55) should return "55 or Over"
testeLessThan(99) should return "55 or Over"
You should use the < operator at least twice 
*/
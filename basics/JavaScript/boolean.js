let x = 0;
const template = `0 is a ${!!0} value in boolean.
1 and any other Number different from 0 is a ${!!1} value in boolean.
Any non empty String is a ${!!' '} value in boolean.
But an empty String is a ${!!''} value in boolean.
An Array returns ${!![]} being empty and ${!![3,2]} having elements.
An object returns ${!!{}} being empty and ${!!{casa: Number}} having attributes
The Infinity value is a ${!!Infinity} value in boolean
And assigning a value inside a boolean returns the assigned value, so x = 3 in boolean returns ${!!(x=3)}.
null and NaN types are ${!!null} and ${!!NaN}.
undefined is ${!!undefined} as well.
A fun fact is that a boolean opperation like ('' || null || 0 || 'a') returns the first true value, in thi case ${'' || null || 0 || 'a'}.
If there is no true value, like ('' || null || 0) it returns the last value, in this case ${'' || null || 0}.
But if we add !! to the opperation it returns the boolean opperation value, so:
!!('' || null || 0 || 'a') returns ${!!('' || null || 0 || 'a')} and !!('' || null || 0) returns ${!!('' || null || 0)}`;

console.log(template);
/* TASK: Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.
*/

function indexEqualsValue(a) {
    let min = 0
    let max = a.length - 1
    while (min < max) {
        let i = Math.floor((min+max)/2)
        if (i <= a[i]) max = i
        else min = i + 1
    }
    return a[max] === max ? max : -1
}

let customer = [54, 554, 32, 44]

const amountLimit = 12;

console.log(customer)


function getFinal(s, p) {
    const arr1 = []

    for (let i = 0; i < Math.max(...s) / p + 1; i++) {


        s.map((elm, idx) => (elm <= p * i) && (elm > p * i - p) ? arr1.push(idx + 1) : '')


    }
    return arr1
}
console.log(getFinal(customer, amountLimit))
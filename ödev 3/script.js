let customer = [170, 150, 35, 4, 70, 25, 20, 50, 100, ]

const amountLimit = 20;

console.log(customer)


function getFinalOrder(c, a) {

    const siralama = []

    function funcx(x) {

        x = x * a
        for (let i = 0; i < c.length + 2; i++) {
            if (c[0] <= x) {
                // console.log(c[0])
                siralama.push(c[0])
                c.shift()
                    // console.log(c)
            } else {
                c.push(c[0])
                c.shift()
                    // console.log(c)
            }

        }
    }
    for (let a = 1; a < customer.length + 10; a++) {

        funcx(a)
    }




    return siralama

}


console.log(getFinalOrder(customer, amountLimit))
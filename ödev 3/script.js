let customer = [170, 150, 35, 4, 70, 45, 20, 50, 100, ]

const amountLimit = 20;

console.log(customer)



let arr1 = []
const siralama = []


function getFinalOrder(customer, amountLimit) {



    function sere(x) {
        x = x * amountLimit
        for (let i = 0; i < customer.length + 2; i++) {
            if (customer[0] <= x) {
                console.log(customer[0])
                arr1.push(customer[0])
                customer.shift()
                console.log(customer)
            } else {
                customer.push(customer[0])
                customer.shift()
                console.log(customer)
            }

        }
    }
    for (let a = 1; a < customer.length + 10; a++) {

        sere(a)
    }


}



getFinalOrder(customer, amountLimit)



customer = arr1

console.log(customer)

console.log(siralama)
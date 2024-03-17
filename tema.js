const closure = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    let x = arr
    function returnArr(){
        return arr;
    }
    function arrPar(){
        arr.filter((item) => item % 2 == 0)
    }
    function arrImpar() {
        arr.filter((item) => item % 2 !== 0)
        
    }
    function sumArr(){
        let sum = 0
        for (let i = 0; i < arr.length; i++) {

         sum = sum + arr[i] }
    //      x= sumArr()
        }
    function addArr() {
        arr.push(7);
    }
    return {returnArr, arrPar, arrImpar, sumArr, addArr}

}
const {returnArr, arrPar, arrImpar, sumArr, addArr} = closure()
arrPar()
console.log(returnArr())
arrImpar()
console.log(returnArr())
sumArr()
console.log(returnArr())
addArr()
console.log(returnArr())



const arr2 = [6, 7, 8, 9, 10, 11]
const parArr2 = arr2.filter((item) => item % 2 == 0)
console.log(parArr2)
const imparArr2 = arr2.filter((item) => item % 2 !== 0)
console.log(imparArr2)
const sumArr2 = () =>{
 let sum1 = 0
 for (let i =0; i < arr2.length; i++) 
 sum1 = sum1 + arr2[i]
 console.log(sumArr2) }

 const pushArr2 = arr2.push(13)
 console.log(pushArr2)

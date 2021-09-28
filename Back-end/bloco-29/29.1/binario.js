/** https://www.delftstack.com/pt/howto/javascript/convert-number-to-binary-in-javascript/ */
const bi = (n) => n.toString(2).match(/1/g).length;

console.log(bi(4))
console.log(bi(7))
console.log(bi(9))
console.log(bi(10))
/**https://www.ti-enxame.com/pt/javascript/contar-com-eficiencia-o-numero-de-bits-em-um-numero-inteiro-em-javascript/831368394/ */
var countBits = function(n) {
    if (n > 0) {
        return n.toString(2).match(/1/g).length;
    }
    return 0;
};
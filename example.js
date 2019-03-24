const n = require('nanakshahi')

const date = new Date()

console.log( n.getNanakshahiDate( date ) )
console.log( n.getDateFromNanakshahi( 550, 10, 23 ) )
console.log( n.getHolidaysForDay( date ) )
console.log( n.getHolidaysForMonth( 1 ) )
console.log( n.getMovableHoliday( 'gurunanak' ) )
console.log( n.getTithi( date ) )
console.log( n.getPanchang( date ) )
console.log( n.getDateFromLunarTithi( 1723, 10, 7 ) )
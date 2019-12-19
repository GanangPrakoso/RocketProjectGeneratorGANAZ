function statusChange (num){
   if (num === 0) {
      return `Open Recruitment`
   } else if (num === 1) {
      return `On Going`
   } else if (num === 2) {
      return `Finish`
   }
}

module.exports = statusChange
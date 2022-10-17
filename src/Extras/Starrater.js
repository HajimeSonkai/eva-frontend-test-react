const rater = (stars) => {
    // console.log(stars)
    if (stars === 5) {
      return "⭐️⭐️⭐️⭐️⭐️"
    }
    if (stars === 4) {
      return "⭐️⭐️⭐️⭐️"
    }
    if (stars === 3) {
      return "⭐️⭐️⭐️"
    }
    if (stars === 2) {
      return "⭐️⭐️"
    }
    if (stars === 1) {
      return "⭐️"
    }
  }
  
export default rater
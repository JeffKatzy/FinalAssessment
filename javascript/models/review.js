function createReview(){
  let id = 0;
  return class Review{
    constructor(text, rest, cust){
      this.id = id++
      this.text = text
      this.restaurant = rest
      this.customer = cust
      Store.data.reviews.push(this)
    }
  }
}

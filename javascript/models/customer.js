
function createCustomer(){
  let id = 0;
  let revFact = createReview()

  return class Customer{
    constructor(){
      this.id = id++;
      this.reviews = []
      this.restaurants = []
      Store.data.customers.push(this)
    }
    add_review(review, restaurant){
      let rev = new revFact(review, this, restaurant)
      this.reviews.push(rev)
      restaurant.reviews.push(rev)

    }
    add_restaurant(restaurant){
      this.restaurants.push(restaurant)
      restaurant.customers.push(this)
    }
    static all(){
      return Store.data.customers
    }

  }
}

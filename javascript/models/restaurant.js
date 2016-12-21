function createRestaurant(){
  let id = 0;
  return class Restaurant{
    constructor(name){
      this.id = id++
      this.name = name
      this.customers = []
      this.reviews = []
      Store.data.restaurants.push(this)
    }
  }
}

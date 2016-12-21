class Review

  attr_accessor :review, :customer, :restaurant

  @@all = []

  def initialize(review, restaurant, customer)
    @review = review
    @restaurant = Restaurant.find_by_name(restaurant.name)
    @customer = customer
    @restaurant.reviews << review
    @@all << self
  end


end

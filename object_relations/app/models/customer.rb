class Customer

    attr_accessor :name, :reviews, :restaurants

    @@all = []

    def initialize(name = "")
      @name = name
      @reviews = []
      @restaurants = []
      @@all << self
    end

    def add_review(review, restaurant)
      @reviews << Review.new(review, restaurant, self)
    end

    def add_restaurant
      puts "Please enter the restaurant name here: "
      rest_name = gets.chomp
      restaurant = Restaurant.find_or_create_by_name(rest_name)
      self.restaurants << restaurant
      restaurant.customers << self
    end

    def self.all
      @@all
    end

    def self.find_by_name(name)
      @@all.detect do |customer|
        customer.name == name
      end
    end

end

# customer = customer.add_review('it was good', Restaurant.new)
# a new review tied ot the restaurant
# and tied to the customer

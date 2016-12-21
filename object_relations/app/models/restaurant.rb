class Restaurant

  attr_accessor :name, :reviews, :customers

  @@all = []

  def initialize(name)
    @name = name
    @reviews = []
    @customers = []
    @@all << self
  end

  def self.all
    @@all
  end

  def self.find_by_name(name)
    @@all.detect do |restaurant|
      restaurant.name = name
    end
  end

  def self.find_or_create_by_name(name)
    !self.find_by_name(name) ? self.new(name) : self.find_by_name(name)
  end
end

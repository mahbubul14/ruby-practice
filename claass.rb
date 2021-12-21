class Animal
  def initialize(name = "unknown", number_of_legs)
    @id = Random.rand(1..1000)
    @name = name
    @number_of_legs = number_of_legs
  end
end
# animal_1 = Animal.new("Rex", 4)
# animal_2 = Animal.new("Bob", 8)
animal_1 = Animal.new("Rex", 4)
animal_2 = Animal.new(8)

p animal_1
p animal_2

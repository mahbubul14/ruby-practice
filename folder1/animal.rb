require "./dog.rb"
require "./spider.rb"

class Animal
  def initialize(type, number_of_legs, name = "unknown")
    @id = Random.rand(1..1000)
    @name = name
    @number_of_legs = number_of_legs
    @type = type
  end
  def id
    @id
  end

  def type
    @type
  end

  def number_of_legs
    @number_of_legs
  end

  def name
    attr_accessor :name
  end

end
# animal_dog = Animal.new("dog", 4, "Rex")
# animal_spider = Animal.new("spider", 8, "Bob")
# animal_1 = Animal.new(4)
# animal_2 = Animal.new(8)

dog = Dog.new("black", "Rex")
spider = Spider.new(85, "Wilma")

p dog.bring_a_stick()
p spider.bring_a_stick()

p dog.make_a_net()
p spider.make_a_net()

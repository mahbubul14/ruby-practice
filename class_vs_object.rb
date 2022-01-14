# rubocop:disable Style/Documentation
# frozen_string_literal: true

class Animal
  def initialize(name, age)
    @id = Random.rand(1..1000)
    @name = name
    @age = age
  end

  def speak
    'bla bla bla'
  end
end

# rubocop:enable Style/Documentation

p animal1 = Animal.new('dog', 12)
print animal1.speak

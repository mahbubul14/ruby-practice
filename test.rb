class GoodDog
    DOG_YEARS = 5
    attr_accessor :name, :age
    def initialize(n, a)
        @name = n
        @age = a * DOG_YEARS
    end
    def to_s
        "this is #{name} and age is #{age}"
    end
end
hachico = GoodDog.new("hachico", 4)
puts hachico
irb :001 > "#{hachico}"
p hachico
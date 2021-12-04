puts "Hello world"

puts "Enter your name"
name = gets.chomp()

puts "Enter your age"
age = gets.chomp()

puts (" Hello " + name + ", You are cool! " + age)

[1, 2, 3].each { |x| puts x * 10 }

"L".upto("P") { |letter| puts letter }
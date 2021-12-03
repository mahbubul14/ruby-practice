# friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']

# invited_list = []

# for friend in friends do
#   if friend != 'Brian'
#   invited_list.push(friend)
#   end
# end
# puts invited_list

# friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
# friends.select {|friend| puts friend != 'Brian'}

# .......To see the output.......
friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
friend_list = friends.select {|friend| friend != 'Brian'}
puts friend_list

# friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
# friends.reject { |friend| friend == 'Brian' }

# friends = ['Sharon', 'Leo', 'Leila', 'Brian', 'Arun']
# friends.each { |friend| puts "Hello, " + friend }
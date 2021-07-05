def hurdleRace(k, height)
  # Write your code here
j = k[].join.to_i
h = height.max.to_i

if j < h
  puts h - j
else
  puts 0
end
end

hurdleRace([5, 4], [1, 6, 3, 5, 2])
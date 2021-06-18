def hurdleRace(k, height)
  # Write your code here
j = k[1].to_i
h = height.max.to_i

if j < h
  p h - j
else
  p 0
end
end

hurdleRace([5, 4], [1, 6, 3, 5, 2])
def hurdleRace(k, height)
    # Write your code here
  p h = height.max.to_i
  p j = k[1].to_i
if j<h 
    p h-j
else
    p 0
end
  end
  hurdleRace([5,7],[1, 6, 3, 5, 2])
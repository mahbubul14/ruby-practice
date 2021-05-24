def pickingNumbers(a)

  arr = a.sort
  count = 0
  for i in arr do
    count =  i- i[i+1]
  end
  puts count
end
pickingNumbers([4, 6, 5, 3, 3, 1])
# [1, 3, 3, 4, 5, 6]
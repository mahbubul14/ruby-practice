def pickingNumbers(a)

  arr = a.sort
  count =[]
  for i in arr do
    if i - [i+1] == 1 
      count +=1
    end
  end
  puts count
end
pickingNumbers([4, 6, 5, 3, 3, 1])
# [1, 3, 3, 4, 5, 6]
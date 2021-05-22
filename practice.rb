def pickingNumbers(a)
  # Write your code here
  arr = a.sort
  # arr << a.sort
  arr.each do|i|
    p arr[0] -= arr[i+1]
  end
end
pickingNumbers([4, 6, 5, 3, 3, 1])

# [1, 3, 3, 4, 5, 6]
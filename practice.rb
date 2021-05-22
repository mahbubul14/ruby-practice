def getMoneySpent(keyboards, drives, b)
  sum =[]
  keyboards.each do|i|
    drives.each do|j|     
      if i+j <= b
        sum << (i+j)
      end
    end
  end
  if sum.empty?
    -1
  else
    sum.max
  end
end

getMoneySpent([3, 1], [5, 2, 8], [10, 2, 3,])
# getMoneySpent([5, 6], [5, 2, 8], [5, 2, 3,])

# getMoneySpent([10, 2, 3], [3, 1], [5, 2, 8])
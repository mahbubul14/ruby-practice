def getMoneySpent(keyboards, drives, b)

  if (keyboards.sort[0] + drives.sort[0]) > b.max
    return -1
  end
  sum =[]
  keyboards.each do|i|
    drives.each do|j|     
      if i+j <= b.max
        sum << (i+j)
      end
    end
  end
  puts result = sum.max
end
getMoneySpent([3, 1], [5, 2, 8], [10, 2, 3,])

# getMoneySpent([10, 2, 3], [3, 1], [5, 2, 8])
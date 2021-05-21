def getMoneySpent(keyboards, drives, b)
  p  keyboard = drives
  p  drive = b
  p  budget = keyboards

  if (keyboard.sort[0] + drive.sort[0]) > budget.max
    return -1
  end
  sum =[]
  keyboard.each do|i|
    drive.each do|j|     
      if i+j <= budget.max
        sum << (i+j)
      end
    end
  end
  puts result = sum.max
end
getMoneySpent([10, 2, 3], [3, 1], [5, 2, 8])
def pickingNumbers(a)
    # Write your code here
    a.sort!
    current_counter = 0
    max_counter = 0
    
    i = 0
    while i < a.size
      j = 1
      
      while (a[j].to_int - a[i].to_int) <= 1
        current_counter += 1
        j += 1
        max_counter = current_counter if current_counter > max_counter
      end
      
      i+=1
    end
    p max_counter
  end
  pickingNumbers([4, 6, 5, 3, 3, 1])
  
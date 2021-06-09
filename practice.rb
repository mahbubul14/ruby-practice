def pickingNumbers(a)
  ar=a.sort 
  r=0
  ar.each_with_index do |val, id|
      c=1
      i=id+1
      while i < ar.size && (ar[i] - val) <=1
         p c+=1
          c>r ? r=c : r=r
          i+=1
      end
  end
  r
end

pickingNumbers([1, 2, 2, 3, 1, 2])

# [1, 1, 2, 2, 2, 3]
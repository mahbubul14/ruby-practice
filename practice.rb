def pageCount(n, p)
  # ........from page 1......
  f_page_rem = p%2

  if f_page_rem == 0
    f_page = p/2

  else
    f_page = (p-1)/2
  end
  # ........from last page..........
  if n.even? || n.odd? && n != 2
   l_page_result = (n-p)/2
  elsif n.odd? && p.even? && p > 1
   l_page_result = (n - (p+1))/2
  elsif p == n
   l_page_result = 0
  end
# ........compare results.......
  if f_page < l_page_result
    result = f_page
  elsif n == 2 && p == 1
    result =0
  elsif n.even? && n-p == 1
    result =1
  else
    result = l_page_result
  end
    p result
end
pageCount(2, 1)
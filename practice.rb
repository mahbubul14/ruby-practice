def pageCount(n, p)
  # Write your code here
  l_page = n-p
  l_page_rem = l_page % 2

  if l_page_rem == 0
    l_page_result = l_page/2
  else
    l_page_result = (l_page-1)/2
  end

  f_page_rem = p%2

  if f_page_rem == 0
    f_page = p/2
  else
    f_page = (p-1)/2
  end

  if f_page < l_page_result
    result = f_page
  else
    result = l_page_result
  end
  puts result
end
pageCount(5, 3)
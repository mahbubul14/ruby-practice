def pageCount(n, p)
  if n%2 == 0
    f_page = p/2
    l_page = (n-p+1)/2
  else
    f_page = p/2
    l_page = (n-p)/2
  end
  if f_page < l_page
    p f_page
  else 
    p l_page
  end
end
pageCount(5, 4)
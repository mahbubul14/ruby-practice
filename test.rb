def pageCount(n, p)
    # Write your code here
    m_page = (n/2.to_f).floor

    if n.even?
      p f_page_result = m_page/2
       l_page = n - m_page
       l_page_result = l_page/2
    elsif n.odd?
        p f_page_result = p - 1
        p l_page_result = n - p
    end
end
pageCount(5,4)
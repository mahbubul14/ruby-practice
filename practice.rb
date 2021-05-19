def repeat(s, n)

  exact_num = n / s.size
  remainder = n % s.size
  a1 = s.count('a') * exact_num
  a2 = s[0...remainder].count('a')
  p result = a1+a2

end

repeat("aba", 10)
function solution(n) {
  const answer = [n];

  while (n > 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    answer.push(n);
  }
  return answer;
}

console.log(solution(10));

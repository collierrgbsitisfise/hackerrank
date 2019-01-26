function howManyGames(p, d, m, s) {
  let gamePrice = p;
  let totalMoney = s;
  let result = 0;

  while (totalMoney >= p) {
    gamePrice = ((gamePrice - d) < m) ? m : (gamePrice - d);
    totalMoney -= gamePrice;
    result++;
  }

  return result;

}

console.log(howManyGames(20, 3, 6, 80));
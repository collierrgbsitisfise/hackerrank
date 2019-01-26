function chocolateFeast(totalMoney, chocolateCost, wrappersPerChoco) {
  const result = 0;

  const chocostWithMoneyOnly = Math.trunc(totalMoney / chocolateCost);
  const chocosWithWrappersOnly = getChocolatesPerWrappers(
    chocostWithMoneyOnly,
    wrappersPerChoco
  );

  return chocosWithWrappersOnly + chocostWithMoneyOnly;
}

const getChocolatesPerWrappers = (wrappersNumber, wrappersPerChoco) =>
  wrappersNumber < wrappersPerChoco
    ? 0
    : Math.trunc(wrappersNumber / wrappersPerChoco) +
      getChocolatesPerWrappers(
        Math.trunc(wrappersNumber / wrappersPerChoco) +
          (wrappersNumber % wrappersPerChoco),
        wrappersPerChoco
      );
console.log(getChocolatesPerWrappers(3, 2));

// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let exchangeResult = {};

    const condition1 = currency > 0;
    const condition2 = currency > 10000;

    const NumArray = [50, 25, 10, 5, 1];
    const SymbolArray = ['H', 'Q', 'D', 'N', 'P'];

    for (let i = 0; i < 5; i++) {
        let res = Math.floor(currency / NumArray[i]);

        if (res) {
            exchangeResult[SymbolArray[i]] = res;
            currency = currency % NumArray[i];
        }
    }

    exchangeResult = condition1 && !condition2 ? exchangeResult: {};
    if (condition2) {
        exchangeResult = { error : "You are rich, my friend! We don't have so much coins for exchange" };
    }

    return exchangeResult;
}

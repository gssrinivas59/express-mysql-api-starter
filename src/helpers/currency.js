
const currency = (value) => {
    
    const Formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        //currencyDisplay: 'narrowSymbol'
    });
    
    return Formatter.format(Number(value));
}
  
module.exports = currency;
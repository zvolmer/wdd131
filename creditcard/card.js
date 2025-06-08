function isCardNumberValid(number) {
  return number.replace(/\s+/g,'') === '1234123412341234';
}
function displayError(msg) {
  document.querySelector('.errorMsg').textContent = msg;
}
function submitHandler(event) {
  event.preventDefault();
  let errorMsg = '';
  displayError('');
  const num = this.cardNumber.value;
  if (isNaN(num.replace(/\s+/g,''))) {
    errorMsg += 'Card number is not a valid number\n';
  } else if (!isCardNumberValid(num)) {
    errorMsg += 'Card number is not a valid card number\n';
  }
  const now = new Date();
  const year = 2000 + parseInt(this.expYear.value,10);
  const month = parseInt(this.expMonth.value,10) - 1;
  if (year < now.getFullYear() || (year === now.getFullYear() && month < now.getMonth())) {
    errorMsg += 'Card is expired\n';
  }
  if (errorMsg) {
    displayError(errorMsg);
    return false;
  }
  return true;
}
document.querySelector('#credit-card').addEventListener('submit', submitHandler);

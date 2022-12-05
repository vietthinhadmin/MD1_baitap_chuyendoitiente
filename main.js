function exchangeCurrency() {
    let vnd = + document.getElementById('amount').value;
    let usd = vnd / 23000;
    document.getElementById('result').innerHTML  = 'Result: ' + usd
}
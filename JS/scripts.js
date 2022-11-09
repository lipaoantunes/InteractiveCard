function detect() {

    let text = document.getElementById("number").value;

    document.getElementById("result-number").innerText = text;

    const span = document.getElementById('result-number');

    if (span.childNodes.length === 0) {
        console.log('✅ Span element is empty');
        span.insertAdjacentText('beforeend', '0000 0000 0000 0000');
      } else {
        console.log('⛔️ Span element is not empty');
      }      
}

function identification() {

    let text = document.getElementById("name").value;

    document.getElementById("result-name").innerText = text;

    const span = document.getElementById('result-name');

    if (span.childNodes.length === 0) {
        console.log('✅ Span element is empty');
        span.insertAdjacentText('beforeend', 'Jane Appleseed');
      } else {
        console.log('⛔️ Span element is not empty');
      } 
}

function detectvaluemeses() {

    let text = document.getElementById("month").value;

    document.getElementById("result-month").innerText = text;

    const span = document.getElementById('result-month');

    if (span.childNodes.length === 0) {
        console.log('✅ Span element is empty');
        span.insertAdjacentText('beforeend', '00');
      } else {
        console.log('⛔️ Span element is not empty');
      } 
}

function detectvalueanos() {

    let text = document.getElementById("year").value;

    document.getElementById("result-year").innerText = text;

    const span = document.getElementById('result-year');

    if (span.childNodes.length === 0) {
        console.log('✅ Span element is empty');
        span.insertAdjacentText('beforeend', '00');
      } else {
        console.log('⛔️ Span element is not empty');
      } 
}

function detectvaluecvc() {

    let text = document.getElementById("cvc").value;

    document.getElementById("result-cvc").innerText = text;

    const span = document.getElementById('result-cvc');

    if (span.childNodes.length === 0) {
        console.log('✅ Span element is empty');
        span.insertAdjacentText('beforeend', '000');
      } else {
        console.log('⛔️ Span element is not empty');
      } 
}



var texts = document.querySelectorAll('.se-text-paragraph');

var result = '';
texts.forEach((text) => {
      result += text.innerText + '\r\n'
});

var tempElem = document.createElement('textarea');


tempElem.value = result;
document.body.appendChild(tempElem);
tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);
result = result;

// var resultArea = document.getElementsById('result');
// resultArea.appendChild(result);

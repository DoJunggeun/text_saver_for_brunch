var texts = document.querySelectorAll('.item_type_text');
var result = '';
texts.forEach((text) => {
    // if (text.textContent == "") {
    // } else {
      result += text.textContent + '\r\n'
    // }
});

var tempElem = document.createElement('textarea');
// var resultArea = document.getElementsById('result');
// resultArea.appendChild(result);
tempElem.value = result;
document.body.appendChild(tempElem);
tempElem.select();
document.execCommand("copy");
document.body.removeChild(tempElem);
result = result;

// document.querySelectorAll('.wrap_item')[8].className.includes('item_type_img')
//  + '\r\n'

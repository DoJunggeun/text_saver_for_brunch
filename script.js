
function copy() {
  chrome.tabs.executeScript({
    code:"document.execCommand('copy')"
  }, () => {
    document.getElementById('result').select();
  }

)
}

function copyBrunch() {
  chrome.tabs.executeScript({
    file:"copyBrunch.js"
  }, function(result) {
    document.getElementById('result').value = result;
  })
}

function copyNaver() {
  chrome.tabs.executeScript({
    file:"copyNaver.js"
  })
}

function defaultCheck() {
  chrome.tabs.executeScript({
    code:"location.host"
  },
    (url) => {
      if (url[0].includes('blog.naver.com')) {
        document.getElementById('naverradio').checked = true;
      } else {
        document.getElementById('brunchradio').checked = true;
      }

  })
}

defaultCheck();
copy();

document.querySelector('#copybutton').addEventListener('click', function () {
  copy();
  document.querySelector('#copybutton').value='복사 완료!'
  setTimeout(() => document.querySelector('#copybutton').value='선택 영역 복사' , 700)
});

document.querySelector('#copyallbutton').addEventListener('click', function () {
  let platform = value_check();
  if (platform == 'brunch') {
      copyBrunch();
      document.querySelector('#copyallbutton').value='복사 완료!'
      setTimeout(() => document.querySelector('#copyallbutton').value='문서 전체 복사' , 700)
  } else if (platform == 'naver') {
      copyNaver();
      document.querySelector('#copyallbutton').value='복사 완료!'
      setTimeout(() => document.querySelector('#copyallbutton').value='문서 전체 복사' , 700)
  }
});


function value_check() {
    var check_count = document.getElementsByName("platform").length;

    for (var i=0; i<check_count; i++) {
        if (document.getElementsByName("platform")[i].checked == true) {
            return document.getElementsByName("platform")[i].value
        }
    }
}

const app = document.getElementById('root');
var customXMLHttpRequest = (function (jwtoken) {
    function getXMLHttpRequest(method, url, async){
        var xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.open(method, url, async);
        xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + jwtoken);
        return xmlHttpRequest;
    }

    return getXMLHttpRequest;
})('bearertoken');

var request = customXMLHttpRequest('get','https://apiurl.com', true);
request.onload = function () {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    alert('bodrum: ' + data);
  } else {
    alert('yalikavak');
  }
}
request.send();


$(document).on("click","a",function(){var b=this.hash;var a=$(b);var c=a.offset();if(c&&b!==""&&this.host==location.host){event.preventDefault();$("html, body").animate({scrollTop:c.top},800,function(){
    alert('izmir');
    alert(document.getElementById("bp2-textyourname").value);    
}
    )}});


/*** window.location.hash=b ***/
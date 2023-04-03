
function service_selector1(){
  $('#content3container').fadeOut('slow', function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
      if (xhr.status ===200){
        document.getElementById('content3container').innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET','data/website-creation-content.html',true)
    xhr.send(null);
    current_contentA = 1
    $('#content3container').fadeIn('slow')
    return
  })
}

$('#sbox1').on('click', function(){
  service_selector1();
});

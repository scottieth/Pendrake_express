function backtomain(){
  $('#content3container').fadeOut('slow', function(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
      if (xhr.status ===200){
        document.getElementById('content3container').innerHTML = xhr.responseText;
      }
    };
    xhr.open('GET','data/servicemain.html',true)
    xhr.send(null);
    $('#content3container').fadeIn('slow')
  })
}

$('#backbtn').on('click', function(){
  backtomain();
});

$('#back-btn').on('click', function(){
  backtomain();
});

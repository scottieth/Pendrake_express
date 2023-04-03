
//makes the navbar sticky to the top of the page

//navbar script to allow for retractable navigation bar

var navstatus = 1;

function openNav(){
  if (navstatus === 0){
      $('#navbar').fadeIn("fast");
      navstatus = 1;
      return None
  }
  if (navstatus === 1){
      $('#navbar').fadeOut("fast");
      navstatus = 0;
      return None
    }
}

//end of navbar script

//Create current content for section a(1)
var current_contentA = 3

//Loading HTML for content1 (1)


function contentspinner1(){
  $('#right1').fadeOut('slow',function(){
    if (current_contentA === 3){
      var xhr = new XMLHttpRequest();
      xhr.onload = function(){
        if (xhr.status ===200){
          document.getElementById('right1').innerHTML = xhr.responseText;
        }
      };
          xhr.open('GET','data/content1_1.html',true)
          xhr.send(null);
          current_contentA = 1
          $('#right1').fadeIn('slow')
          return
      }

    if (current_contentA === 1){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
          if (xhr.status ===200){
            document.getElementById('right1').innerHTML = xhr.responseText;
          }
        };
        xhr.open('GET','data/content1_2.html',true)
        xhr.send(null);
        current_contentA = 2
        $('#right1').fadeIn('slow')
        return
        }
    if (current_contentA === 2){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
          if (xhr.status ===200){
            document.getElementById('right1').innerHTML = xhr.responseText;
          }
        };
        xhr.open('GET','data/content1_3.html',true)
        xhr.send(null);
        current_contentA = 3
        $('#right1').fadeIn('slow')
        return
        }

    });
  };


  //function contentspinner1_container(){
  //    $('#right1').fadeOut('slow').promise().done(contentspinner1());
  //}

setInterval(contentspinner1, 10000)

$('#navbutton').on('click', function(){
  openNav();
});

openNav();



// Loading HTMl for content1 (2)

//function makeRequest_content2(){
//  var xhr = new XMLHttpRequest();
//xhr.onload = function(){
//    if (xhr.status ===200){
//      document.getElementById('right1').innerHTML = xhr.responseText;
//    }
//  };
//  xhr.open('GET','data/content1_2.html',true)
//  xhr.send(null);
//};

//loading HTML for content1 (3)

//function makeRequest_content3(){
//  var xhr = new XMLHttpRequest();
//  xhr.onload = function(){
  //  if (xhr.status ===200){
  //    document.getElementById('right1').innerHTML = xhr.responseText;
  //  }
  //};
//  xhr.open('GET','data/content1_3.html',true)
//  xhr.send(null);
//};


//setInterval(makeRequest_content1, 5555)
//setInterval(makeRequest_content2, 7777)
//setInterval(makeRequest_content3, 9999)

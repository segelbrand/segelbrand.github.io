// menu
var menu = document.getElementById('menu');
var acrticles = document.getElementsByClassName('sb-content-headline');
for (var i = 0; i < acrticles.length; i++) {
  var a = document.createElement('a');
  a.href = '#' + acrticles[i].id;
  a.innerText = i === 0 ? 'Home' : acrticles[i].innerText;
  var li = document.createElement('li');
  li.appendChild(a);
  menu.appendChild(li);
}

// gallery years
$('.sb-picture-year-link').click(function(e) {
  var year = $(this).text().trim();

  $('.sb-picture-year-link').removeClass('active');
  $(this).addClass('active');

  $('#gpfull').animate({ opacity: 0 }, 200, function() {
    $('#gpfull').attr('href', 'assets/images/'+year+'/group.jpg');
    $('#gpthumb').attr('src', 'assets/images/'+year+'/group.thumb.jpg');
    $('#gpfull').animate({ opacity: 1 }, 200);
  });

  $('.sb-picture-item').each(function(i, pic) {
    var image = $(this).find('.sb-pic-link')[0];
    var thumb = $(this).find('.sb-picture-img')[0];
    var picnr = String(i+1).padStart(2, '0');

    $(image).animate({ opacity: 0 }, 200, function() {
      $(image).attr('href', 'assets/images/'+year+'/'+picnr+'.jpg');
      $(thumb).attr('src', 'assets/images/'+year+'/'+picnr+'.thumb.jpg');
      $(image).animate({ opacity: 1 }, 200);
    });
  });
  
  e.preventDefault();
});

// gallery
lightbox.option({
  albumLabel: 'Bild %1 von %2'
})

// copyright year
var date = document.getElementById('year');
date.innerText = new Date().getFullYear();

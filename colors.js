var Body = {

  setColor:function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color)
  }
}

var Links = {
  setColor:function(color){
    // var atag = document.querySelectorAll('a');
    // for(var i=0; i<atag.length; i++)
    // {
    //   atag[i].style.color=color
    // }
    $('a').css('color',color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value == 'night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';
    Links.setColor('yellow');

  }
  else
  {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue')
  }
}

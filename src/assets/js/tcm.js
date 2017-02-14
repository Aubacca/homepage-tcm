var app = (function() {

  var getDivRow = function () {
    var div = document.createElement('div');
    //
    div.setAttribute('class', 'row');
    return div;
  },
  
  getDivCol = function (colsize = 8) {
    var div = document.createElement('div');
    div.setAttribute('class', 'col-md-' + colsize);
    return div;
  },
  
  getDivCard = function (eventData) {
    var div = document.createElement('div'),
      now = Date.now();
    //
    div.setAttribute('class', 'card text-xs-center');
    if (now <= Date.parse(eventData.endDate)) {
      div.className += ' z-depth-5';
    }
    return div;
  },
  
  getDivCardHeader = function (eventData) {
    var div = document.createElement('div'),
      h4 = document.createElement('h4'),
      icon = document.createElement('i'),
      now = Date.now();
    //
    div.setAttribute('class', 'card-header');
    if (now <= Date.parse(eventData.endDate)) {
      div.className += ' bg-success';
    }
    h4.setAttribute('class', 'card-title');
    h4.innerHTML = ' ' + eventData.title;
    if (eventData.title_icon) {
      icon.setAttribute('class', eventData.title_icon);
      icon.setAttribute('aria-hidden', true);
      h4.insertBefore(icon, h4.childNodes[0])
    }
    div.appendChild(h4);
    return div;
  },
  
  getDivCardBody = function (eventData) {
    var div = document.createElement('div'),
      p = document.createElement('p');
    //
    div.setAttribute('class', 'card-block');
    p.setAttribute('class', 'card-text');
    p.innerHTML = eventData.body;
    div.appendChild(p);
    return div;
  },
  
  getDivCardFooter = function (eventData) {
    var div = document.createElement('div'),
      p = document.createElement('p'),
      now = Date.now();
    //
    div.setAttribute('class', 'card-footer');
    p.setAttribute('class', 'card-text');
    if (now <= Date.parse(eventData.endDate)) {
      div.className += ' text-muted card-warning white-text'
    }
    p.innerHTML = eventData.footer;
    div.appendChild(p);
    //
    return div;
  },

  createEventBlock = function (eventData) {
    var cardRow = getDivRow(),
      cardCol = getDivCol(4),
      card = getDivCard(eventData),
      cardRowWidth = 0;
    //
    eventData.forEach(function (event, index) {
      cardRowWidth += 4;
      if (cardRowWidth > 12) {
        cardRowWidth = 4;
        cardRow = getDivRow();
      }
      cardCol = getDivCol(4),
      card = getDivCard(event),
      cardHeader = getDivCardHeader(event),
      cardBody = getDivCardBody(event),
      cardFooter = getDivCardFooter(event);
      //
      cardRow.appendChild(cardCol);
      cardCol.appendChild(card);
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
      card.appendChild(cardFooter);
      $('#events').append(cardRow);
    });
  },

  loadData = function () {
    $.getJSON("assets/js/data/events.json", function(json) {
      var eventData = json;
      createEventBlock(eventData);
    });
  },
  
  init = function () {
    loadData();
  };

  return {
        init: init
    };
}());

$(document).ready(function () {

      $('#collapseEx2 > ul.navbar-nav li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
//        e.preventDefault();
      });


      //$('#newEvents').html('started ..');
      app.init();


/*  var ebentList = $
  var main = document.getElementById('main');//where you want the div to be added
  var div = document.createElement('div');
  div.setAttribute("spry:region", "myDs");
  div.innerHTML = "{hostname}";
  main.appendChild(div);
*/

});

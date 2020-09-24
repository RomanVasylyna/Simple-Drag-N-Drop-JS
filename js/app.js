$(document).ready(() => {


  //Solution with Pure JS
  //Getting elements
  let fill = document.querySelectorAll('img');
  let divs = document.querySelectorAll('.empty');

  //Adding events
  //Looping through divs + adding Event Listener
  fill.forEach((e) => {
    e.addEventListener('dragstart', dragStart);
    e.addEventListener('dragend', dragEnd);
  })

  //Fill functions
  //When user starts draggin element
  //пользователь начинает перетаскивание элемента.
  function dragStart() {
  $(this).addClass('hold active');
  setTimeout(() => {$(this).addClass('invisible')}, 0);
  }

  //When Mouse button is released
  //пользователь отпускает курсор мыши в процессе перетаскивания.
  function dragEnd() {
  $(this).removeClass('hold invisible active');
  $(this).parent().removeClass('hovered');
  //alert($(this).parent().find('img').attr('src'));
  if(findMatch($(this).attr('src')) == $(this).parent().text()) {
    $(this).parent().css({'background' : 'green', 'position' : 'relative', 'top' : '70px', 'cursor' : 'auto'});
    $('.child').css({'position' : 'relative', 'bottom' : '80px'});
    $(this).css('cursor', 'auto');
    removeEvents(this);
    this.draggable = false;
  } else {
    //hasChild(this);
    $(this).parent().css({'background' : 'red', 'position' : 'relative', 'top' : '70px'});
    //$(this).css({'position' : 'relative', 'top' : `${offset.top}`, 'left' : `${offset.left}`});
    //(win()) ? alert('Winner!') : alert('False');
  }


  }

  //Looping through divs + adding Event Listener
  divs.forEach((e) => {
  e.addEventListener('dragover', dragOver);
  e.addEventListener('dragenter', dragEnter);
  e.addEventListener('dragleave', dragLeave);
  e.addEventListener('drag', dragDrop);
  })

  //Divs functions
  //Mouse cursor is over the element
  //курсор мыши наведен на элемент при перетаскивании.
  function dragOver(e) {
  e.preventDefault();
  $(this).css({'position' : 'relative', 'top' : '0', 'background' : ''});
  }

  //When element enters parent div (while being hold by user)
  //перетаскиваемый элемент достигает конечного элемента
  function dragEnter(e) {
  e.preventDefault();
  $(this).addClass('hovered'); //Add border to parent
  $(this).append($('.active')); //Add class active to dragabble
  $(this).css({'position' : 'relative', 'top' : '0', 'background' : ''});
  }

  //When element leaves it's parent element
  //курсор мыши покидает пределы перетаскиваемого элемента
  function dragLeave(e) {
  e.preventDefault();
  $(this).css({'position' : 'relative', 'top' : '0', 'background' : ''})
  $(this).removeClass('hovered'); //Remove border from parent
  $(this).addClass('empty'); //Make parent blank
  }

  //Dropping Element
  function dragDrop() {
  $(this).css({'position' : 'relative', 'top' : '0', 'background' : ''})
  $(this).addClass('empty');
  }

  //Animals Names (to match with divs animals)
  function findMatch(elem) {
  let match = elem.match(/(?<=\/)\w+/).toString(); //d,o,g
  return match.charAt(0).toUpperCase() + match.substr(1, );
  }

  //Remove Events from parent Divs
  function removeEvents(elem) {
      elem.parentElement.removeEventListener('dragover', dragOver);
      elem.parentElement.removeEventListener('dragenter', dragEnter);
      elem.parentElement.removeEventListener('dragleave', dragLeave);
      elem.parentElement.removeEventListener('drag', dragDrop);
  }

  //Win
  function win() {
  fill.forEach((e) => {
  if(e.classList.contains('invisible')) {
  return true;
  } else {
  return false;
  }
  })
  }

  //Check if Empty
  //Empty divs
  function hasChild(elem) {
  if($(elem).parent().children().length > 0) { //If Div already has picture
  removeEvents(elem);
  }
  }





























})

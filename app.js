const studentList = [
  'Lisa',
  'Sarah',
  'Anne',
  'George',
  'Daniel',
  'Jionni',
  'Jennifer',
  'Tasha'
];

// Using the new DOM Manipulation library, do all of the following: 

// 1. Render all of the names in `studentList` individually in paragraph tags to the div with the class `content`.
// // sets the content to one word
function render() {
  studentList.sort(function (a, b) {
    var nameA = a.toUpperCase(); // ignore upper and lowercase
    var nameB = b.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal, validation technique like in Unit 6-Activity 24
    return 0;
  });
  const element = $('.content');
  element.empty();
  // //loops through array 
  for (let i = 0; i < studentList.length; i++) {
    //renders each item in the array to the page by passing each in as an html element
    element.append(`<div><p class="name">${studentList[i]}</p></div>`);
  }
}
render();

// // 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list. 
// //listens for add button to be clicked

$('#add').on('click', function (e) {
  // read the input
  const name = $('#name').val();
  // clear the input
  $('#name').val('');
  //add the name to the array
  studentList.push(name);
  //call the render function above
  render();
});


// 3. When the search button is pressed, add the `blue` class to the `body` if the name that was input is in the studentList array.
//listens for search button to be clicked
function search(e) {
  $('body').removeClass('blue');
  //cycles through the name list
  for (let i = 0; i < studentList.length; i++) {
    //sets name equal to any element in the list in order to find a match
    let name = studentList[i];
    //searches to see if input criteria matches an element in the list
    if ($('#name').val() == name) {
      // conditional that changes body to blue if yes
      $('body').addClass('blue');
    }
  }
}
$('#search').on('click', search);

// 4. When the delete button is pressed, delete the element from studentList that matches the name the user entered in the input field. Re-render the list.

$('#delete').on('click', function (e) {
    for (let i = 0; i < studentList.length; i++) {
      //sets name equal to any element in the list in order to find a match
      let name = studentList[i];
      //searches to see if input criteria matches an element in the list
      if ($('#name').val() == name) {
        studentList.splice(i, 1);
      }
    }
    render();
  }
);

function clear() {
  // e.preventDefault;
  const content = $('.content');
  content.empty();
}
$('#clear').on('click', clear);
// }

function update(e) {
  for (let i = 0; i < studentList.length; i++) {
    //sets name equal to any element in the list in order to find a match
    let name = studentList[i];
    //searches to see if input criteria matches an element in the list
    if ($('#name').val() == name) {
      studentList.splice(i, 1, $('#newName').val());
    }
  }
  render();
}
$('#update').on('click', update);

// Challenge 1:
window.onload = function () {
    const user = document.getElementById('user');
    user.innerHTML = 'Chinmayee';
  };
  
  //Challenge 2:
  
  document.getElementById('btn-click').onclick = changeColor;
  function changeColor() {
    document.querySelector('button').style.background = 'red';
  }
  
  //Challenge 3:
  
  const makeSentence = document.getElementById('build-button');
  makeSentence.addEventListener('click', function () {
    var Noun = document.getElementById('noun').value;
    var Verb = document.getElementById('verb').value;
    var Adverb = document.getElementById('adverb').value;
  
    var sentence = Noun + ' ' + Verb + ' ' + Adverb;
  
    let output = document.getElementById('statement');
    output.innerHTML = sentence;
  });
  
  // Challenge 4.1:
  
  var Grandparent = document.getElementById('grandparent');
  Grandparent.addEventListener('click', function () {
    console.log('Granparent clicked');
  });
  
  var Parent = document.getElementById('parent');
  Parent.addEventListener('click', function () {
    console.log('Parent clicked');
  });
  
  var Child = document.getElementById('child');
  Child.addEventListener('click', function () {
    console.log('Child clicked');
  });
  
  // Challenge 4.2:
  
  var Grandparent = document.getElementById('grandparent');
  Grandparent.addEventListener(
    'click',
    function () {
      console.log('Granparent clicked');
    },
    true
  );
  
  var Parent = document.getElementById('parent');
  Parent.addEventListener(
    'click',
    function () {
      console.log('Parent clicked');
    },
    true
  );
  
  var Child = document.getElementById('child');
  Child.addEventListener(
    'click',
    function () {
      console.log('Child clicked');
    },
    true
  );
  
  //Challenge 5:
  
  const category = document.getElementById('category');
  category.addEventListener('click', function (event) {
    if (event.target.id === 'blazers') {
      console.log('blazers');
    }
  });
  
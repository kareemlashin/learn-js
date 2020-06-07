var firstHeading = document.getElementById('firstHeading');

firstHeading.classList.remove('foo');

firstHeading.classList.add('anotherclass');

firstHeading.classList.add('foo', 'bar');
firstHeading.classList.remove('foo', 'bar');

firstHeading.classList.toggle('visible');

console.log(firstHeading.classList.contains('foo'))
//replace
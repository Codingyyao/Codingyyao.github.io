
// get all button element
const btngit = document.getElementById('github');
const btnloc = document.getElementById('location');
const btnemail = document.getElementById('email');


btngit.onclick = function() {window.location.href='https://github.com/Codingyyao';}

btnemail.onclick = function() {window.location.href='mailto:XXX@163.com';}

btnloc.onclick = function(){alert('I am in Beijing, China, now!')}

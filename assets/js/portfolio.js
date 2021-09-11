var headings = document.getElementsByTagName('h1');

list = ''

for (var i = 0; i<headings.length; i++) {
	list +='<button class="sidebar-but" onclick=document.getElementById("' + headings[i].getAttribute('id')+'").scrollIntoView();>' + headings[i].innerHTML +'</button>';
}

document.getElementById('side-cont').innerHTML = list;
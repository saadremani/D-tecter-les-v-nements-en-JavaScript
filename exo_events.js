//Definition des variables globales

let bootstrap = document.getElementsByTagName("link")[0].href ; // stocke la d'adresse du CDN
let count = 0;                                                // compte du clique sur le footer

//Définition des fonctions qui seront appelées par les évènements.

//exercice 1
function displayClick()
{
	console.log("clique") ;
	count += 1 ;	
	console.log(`clique numéro ${count}`) ;
}

//exercice 2
function toggleCollapse()
{
	let element = document.getElementById("navbarHeader");
	element.classList.toggle("collapse") ;
}

//exercice 3
function redColor()
{
	element = document.getElementsByClassName("card")[0];
	element.style.color = "red" ;
}
	
//exercice 4
function greenToggle()
{
	element = document.getElementsByClassName("card")[1];
	if (element.style.color === "")
	{
		element.style.color = "green" ;
	}
	else
	{
		element.style.color = "" ;
	}	
}
	
//exercice 5
function removeBootstrap()
{
	
	link = document.getElementsByTagName("link")[0] ;
	if (link.href === bootstrap  )
	{
		link.href = "" ;
	}
	else
	{
		link.href = bootstrap ;
	}
	
}

	
//exercice 6
function cardReduce()
{
	let card = this.parentNode.parentNode.parentNode.parentNode	;
	let cardText = card.getElementsByClassName("card-text")[0] ;
	cardText.classList.toggle("collapse") ;
	let cardImage = card.getElementsByClassName("card-img-top")[0] ;
	if (cardImage.style.width === "") 
	{
		cardImage.style.width = "20%" ;
	}
	else
	{
		cardImage.style.width = "" ;
	}
}

//exercice 7
function toRight()
{
	event.preventDefault();
	let firstCard = document.getElementsByClassName("card")[0] ;
	let lastCard =  document.getElementsByClassName("card")[5] ;

	let element = firstCard.parentNode.parentNode ;	
	element.insertBefore(element.lastChild, element.childNodes[0]) ;
	element.insertBefore(element.lastChild, element.childNodes[0]) ;
			
	
}

//exercice 8
function toLeft()
{
	event.preventDefault();
	let firstCard = document.getElementsByClassName("card")[0] ;
	let element = firstCard.parentNode.parentNode ;	
	element.insertBefore(element.childNodes[0], null) ;
	element.insertBefore(element.childNodes[0], null) ;
}

//exercice 9
function logKey(a)
{
	if (a.keyCode === 97)	
	{
		pageLeft() ;
	}

	if (a.keyCode === 121)	
	{
		pageCenter() ;
	}

	if (a.keyCode === 112)	
	{
		pageRight() ;
	}

	if (a.keyCode === 98)	
	{
		clean() ;
	}
}

function pageLeft()
{
	clean() ;
	let element = document.getElementsByTagName("body")[0] ;
	element.classList.toggle("col-4") ;
}
	
function pageCenter()
{
	clean() ;
	let element = document.getElementsByTagName("body")[0] ;
	element.classList.toggle("offset-md-4") ;
	element.classList.toggle("col-4") ;
}

function pageRight()
{
	clean() ;
	let element = document.getElementsByTagName("body")[0] ;
	element.classList.toggle("offset-md-8") ;
	element.classList.toggle("col-4") ;
}

function clean()
{
	let element = document.getElementsByTagName("body")[0] ;
	element.classList = "" ;
}
//**************************************************************************************************

//Préparation des évènements.

//Exercice 1
let element = document.getElementsByTagName("footer")[0];
element.addEventListener('click', displayClick) ;

//Exercice 2
element = document.getElementsByClassName("navbar-toggler")[0];
element.addEventListener('click', toggleCollapse)  ;

//Exercice 3
element = document.getElementsByClassName("card")[0];
btnElmt = element.getElementsByClassName("btn-outline-secondary")[0];
btnElmt.addEventListener('click', redColor)  ;


//Exercice 4
element = document.getElementsByClassName("card")[1];
btnElmt = element.getElementsByClassName("btn-outline-secondary")[0];
btnElmt.addEventListener('click', greenToggle)  ;

//Exercice 5
element = document.getElementsByTagName("header")[0];
element.addEventListener('dblclick', removeBootstrap)  ;

//Exercice 6
cards = document.getElementsByClassName("card") ;

for (let index = 0 ; index < 6 ; index++  )     //change
{
	card = document.getElementsByClassName("card")[index] ;
	btnElmt = card.getElementsByClassName("btn-success")[0];
	btnElmt.addEventListener('mouseover', cardReduce)  ;
}


//Exercice 7
element = document.getElementsByClassName("btn-secondary")[0] ;
element.addEventListener('click', toRight) ;

//Exercice 8
element = document.getElementsByClassName("btn-primary")[0] ;
element.addEventListener('click', toLeft) ;

//Exercice 9
element = document.getElementsByTagName("strong")[0].parentNode;
element.addEventListener('keypress', logKey) ;


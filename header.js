
const script3=document.createElement('script');
script3.setAttribute('src','jquery-3.4.1.slim.min.js');
document.querySelector('head').appendChild(script3);
const script=document.createElement('script');
script.setAttribute('src','materialize.min.js');
script.setAttribute('type','text/javascript');
document.querySelector('head').appendChild(script);

const navTemplate=document.createElement('template');

	

navTemplate.innerHTML=`

 <slot name="dropdown"></slot>

`

class Header extends HTMLElement{
	
	constructor(){
		super();
	
		var shadow= this.attachShadow({mode:'open'});
		shadow.appendChild(navTemplate.content.cloneNode(true));
	
		
	}
	connectedCallback(){
		const script2=document.createElement('script');
script2.setAttribute('src','material.js');
  document.querySelector('head').appendChild(script2);		
	
	this.innerHTML=`
	<style scoped>
@import url('materialize.css');
</style>



<nav slot="dropdown">
  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
      <!-- Dropdown Trigger -->
      <li><a class="dropdown-trigger"  data-target="dropdown1">Dropdown</a></li>
    </ul>
  </div>
</nav>
<!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>


	
	`}
}
window.customElements.define('drop-header', Header);

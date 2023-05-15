


export default function Navbar() {
	let hamburger
	return (
		<header>
			<nav>
        <h3 ><i class="fa-solid fa-piggy-bank"></i></h3>
        <h3>
          money-bank
        </h3>
        <span>  
	        <h3>
	        	<i
	        		ref={hamburger} 
	          	style="cursor: pointer"
	          	class="fa-solid fa-bars"
	        	></i>
	        </h3>
      	</span>
    	</nav>
		</header>
	)
}
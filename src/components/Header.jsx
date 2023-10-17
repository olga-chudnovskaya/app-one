import React from 'react'

function Header(){
	return(
<div className="header container">
			<h1 className="header-title">Наша планета</h1>
			<div className="planet-facts">
				<div className="facts-left">
					<h2 className="left-title">Несколько фактов о нашей планете</h2>
				</div>
				<div className="facts-right">
					<ul className="right-content">
						<li>Это наш дом</li>
						<li>Это дом братьев наших меньших</li>
						<li>Она требует бережного отношения</li>
					</ul>
				</div>
			</div>
		</div>
        )
    }
    
    export default Header;
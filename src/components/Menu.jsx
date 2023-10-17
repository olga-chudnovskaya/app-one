import React from 'react'
import planet from "./images/planet.svg"
import plant from "./images/plant.svg"
import news from "./images/news.svg"
import recycle from "./images/recycle.svg"
import fire from "./images/fire.svg"

function Menu(){
	return(
		<div className="menu">
			<a href="#" className="logo">
				<img src={planet} />
				<span>Планета!</span>
			</a><div className="nav">
				<a href="#plants">
					<img src={plant} />
				</a>
				<a href="#news">
					<img src={news} />
				</a>
				<a href="#recycle">
					<img src={recycle} />
				</a>
				<a href="#form">
					<img src={fire} />
				</a>
			</div>
		</div>

	)
}

export default Menu
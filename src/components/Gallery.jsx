import React from 'react'
import plant from "./images/plant.svg"
import plant0 from "./images/plant0.jpg"
import plant1 from "./images/plant1.jpg"
import plant2 from "./images/plant2.jpg"
import plant3 from "./images/plant3.jpg"
import plant4 from "./images/plant4.jpg"


function Gallery(){
	return(
    <div className="gallery container" id="plants">
		<h2 className="section-title">
			А что такое растения?
			<img className ="title-icon"src={plant} alt="plant-emoji" />
		</h2>
		<div className="gallery-content">
			<div className="gallery-item">
				<img src={plant0} />
				<p className="gal-item-text">Растение - это...</p>
				<p className="gal-item-text"> ...дыхание</p>
		    </div>

			<div className="gallery-item">
				<img src={plant1} />
				<p className="gal-item-text">Растение - это...</p>
				<p className="gal-item-text"> ...изящество</p>
			</div>

			<div className="gallery-item">
				<img src={plant2} />
				<p className="gal-item-text">Растение - это...</p>
				<p className="gal-item-text"> ...жизнь</p>
			</div>
			<div className="gallery-item">
				<img src=
                    {plant3} />
				<p className="gal-item-text">Растение - это...</p>
				<p className="gal-item-text"> ...уют</p>
			</div>

			<div className="gallery-item">
				<img src={plant4} />
				<p className="gal-item-text">Растение - это...</p>
				<p className="gal-item-text"> ...искусство</p>
			</div>
		</div>
	</div>
    )
}

export default Gallery
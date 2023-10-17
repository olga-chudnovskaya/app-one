import React from 'react'
import recycle from "./images/recycle.svg"
import bottle from "./images/bottle.svg"

function Recicle(){
	return(
        <div className="recycle-info container" id="recycle">
			<h2 className="section-title">
				Узнать об экологичном образе жизни 
				<img className ="title-icon" src={recycle} />
			</h2>
			<div className="recycle-content">
				<div className="recycle-content-img">
					<img src={bottle} />
				</div>
				<p className="recycle-text">
					Если вы начали или планируете сортировать отходы, стоит разобраться, что можно сдавать на переработку в вашем городе, а что нет. Гринпис сделал краткий гид, который поможет понять, что значат цифры или буквы в треугольниках на упаковке и товарах. <br />
					Треугольники на упаковке с цифрами внутри — ваш верный помощник. Цифра помогает понять, какой это вид упаковки и можно ли его сдать на переработку. Буквенная аббревиатура под треугольникам обозначает тип материала, например PP (полипропилен) или GL (стекло).
				</p>
			</div>
		</div>
        )
}

export default Recicle
import React from 'react'
import fire from "./images/fire.svg"

function Form(){
return(
        <div className="form container" id="form">
			<h2 className="section-title">Давай беречь планету вместе!<img className ="title-icon" src={fire} /></h2>
			<form className="contact-form" action="#">
				<input type="text" placeholder="Имя" />
				<input type="email" placeholder="Почта" />
				<button>Подписаться на рассылку</button>
            </form>
	    </div>
        )
}

export default Form
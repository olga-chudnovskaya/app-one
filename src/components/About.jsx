import React from 'react'
import news from "./images/news.svg"

function About(){
	return(
        <div className="about container" id="news">
			<h2 className="section-title">
				Где узнать об экологии?<img className ="title-icon"src={news} />
			</h2>
			<div className="about-content">
				<p className="about-content-item ab-item1">Интернет</p>
				<p className="about-content-item ab-item2">Мероприятия</p>
				<p className="about-content-item ab-item3">Друзья</p>
			</div>
		</div>
        )
    }
    
    export default About

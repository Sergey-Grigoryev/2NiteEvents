import React from "react";
import Image from "../../assets/images/event.png"

function Home() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">Welcome to 2Nite Events</h1>
			</div>
			<div className="center">
                <img src={Image} className="photo" style={{ width: "500px", height:"500px" }} alt="event"></img>
			</div>
        </section>
    );
}

export default Home;
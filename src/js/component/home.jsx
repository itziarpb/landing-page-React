import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="d-flex my-5">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			
			<Footer />
		</>
	);
};

export default Home;

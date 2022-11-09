import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";


const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div className="d-flex m-auto">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			
			<Footer />
		</>
	);
};

export default Home;

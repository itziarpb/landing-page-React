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
				<div className="d-flex my-5 row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 mx-auto justify-content-center">
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

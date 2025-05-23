import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/new-contact">
						<button className="btn btn-primary">Add a new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
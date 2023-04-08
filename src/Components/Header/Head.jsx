import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Head() {
	const cartitem = useSelector((state) => state.user);
	return (
		<>
			<div className="">
				<nav className="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
					<Link to="/">
						<span className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300">
							Home
						</span>
					</Link>
					<span className="text-gray-600 ml-3 dark:text-gray-300 text-xl">
						{/* <Link to="/cart"> <MdShoppingCart/>  {cartitem.length>0?(cartitem.length): 0 }</Link> */}
						<Link to="/cart">
							<MdShoppingCart />{" "}
							{cartitem.length > 0 ? cartitem.length : 0}
						</Link>
					</span>

					<div className="lg:hidden">
						<button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
							<svg
								className="block h-4 w-4 fill-current"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Mobile menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
							</svg>
						</button>
					</div>
					<ul className="hidden lg:flex lg:items-center grow mx-10 space-x-4">
						<li></li>
						<li className="text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								className="w-4 h-4 current-fill"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</li>
						<li>
							<a
								className="text-sm text-indigo-600 font-bold"
								href="#"
							>
								About Us
							</a>
						</li>
						<li className="text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								className="w-4 h-4 current-fill"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</li>
						<li>
							<a
								className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300"
								href="#"
							>
								Services
							</a>
						</li>
						<li className="text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								className="w-4 h-4 current-fill"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</li>
						<li>
							<a
								className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300"
								href="#"
							>
								Pricing
							</a>
						</li>
						<li className="text-gray-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								stroke="currentColor"
								className="w-4 h-4 current-fill"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>
						</li>
						<li>
							<a
								className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-300"
								href="#"
							>
								Contact
							</a>
						</li>
					</ul>

					<div className="space-x-2 hidden lg:block">
						<span className="relative inline-block">
							<img
								className="h-10 w-10 rounded-full"
								src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
								alt="John Doe"
							/>
							<span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-600 ring-2 ring-white"></span>
						</span>
					</div>
				</nav>
			</div>
		</>
	);
}

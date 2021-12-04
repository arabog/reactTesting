import './App.css';

import Home from "./components/Home/Home"
import Account from './components/Account/Account';

import { useEffect, useState } from "react"
import axios from 'axios';

const url = `https://jsonplaceholder.typicode.com/users`;


function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [users, setUsers] = useState([]);
	// const [error, setError] = useState(false)


	useEffect(()=> {
		const getData = async () => {
			const res = await axios.get(url)

			setUsers(res.data)
			setIsLoading(false)
		}

		getData()
	}, [])


	return (
		<div className="App">
			<h1> Display Active Users Account Details </h1>

			{
				!isLoading 
					? (
						users.map(user => (
							<Account  key={user.id} user={user} />
						))

					) : (
						<h3> Fetching Users...</h3>
					)
			}
			
			<Home />
		</div>
	);
}


export default App;

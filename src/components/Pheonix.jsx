import { useEffect, useState } from 'react'
import classes from './Pheonix.module.css'

const Pheonix = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((err) => {
				console.log(err)
			})
	}

	console.log(users)
	return (
		<>
			<div className={classes.container}>
				{users.map((users) => (
					<div className={classes.main}>
						<div className={classes.elem}>
							<h5>{users.id}</h5>
							<h3>{users.title}</h3>
							<img src={users.thumbnailUrl} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
export default Pheonix

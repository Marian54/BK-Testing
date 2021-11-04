import Rating from '@mui/material/Rating';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Book Parking Lot</h1>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<Rating name='read-only' value={5} readOnly />
			</header>
		</div>
	);
}

export default App;

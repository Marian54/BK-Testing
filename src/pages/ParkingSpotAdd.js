import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddParkingSpotModal from '../components/AddParkingSpot/AddParkingSpotModal';
import YellowButton from '../commonComponents/YellowButton';

const useStyles = makeStyles(() => ({
	backdrop: {
		position: 'fixed',
		zIndex: '1',
		backgroundColor: '#33333380',
		width: '100%',
		height: '100vh',
		top: '0',
		left: '0',
	},
}));
function ParkingSpotAdd() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const classes = useStyles();
	const selectHandler = () => {
		setModalIsOpen(true);
	};
	const closeModalHandler = () => {
		setModalIsOpen(false);
	};
	return (
		<div>
			{modalIsOpen && <AddParkingSpotModal onClose={closeModalHandler} />}
			{modalIsOpen && <div className={classes.backdrop} />}
			<YellowButton text='Add new parking spot' click={selectHandler} />
		</div>
	);
}

export default ParkingSpotAdd;

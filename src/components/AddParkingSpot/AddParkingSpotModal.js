import { Button, FormControl, Grid, IconButton, MenuItem } from '@mui/material';
import CloseIcon from '@material-ui/icons//Close';
import { useState } from 'react';
import Select from '@mui/material/Select';
import useStyles from './AddParkingSpotStyles';

function AddParkingSpotModal(props) {
	const selectType = [
		{ id: 1, title: 'Regular' },
		{ id: 2, title: 'Special' },
	];
	const classes = useStyles();
	const [selectedType, setSelected] = useState('');
	const listTypes = selectType.map((type) => (
		<MenuItem value={type.title} key={type.id}>
			{type.title}
		</MenuItem>
	));
	const { onClose } = props;
	return (
		<div className={classes.modal}>
			<Grid container direction='column' pt={1}>
				<Grid item container justifyContent='flex-end'>
					<IconButton aria-label='close' onClick={onClose}>
						<CloseIcon style={{ color: 'red' }} />
					</IconButton>
				</Grid>
				<Grid item>
					<p className={classes.customP}>Select a type for parking spot</p>
				</Grid>
				<Grid container alignItems='center'>
					<Grid item xs={12}>
						<FormControl className={classes.formControl}>
							<Select
								value={selectedType}
								onChange={(e) => {
									setSelected(e.target.value);
								}}
							>
								{listTypes}
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} pt={2}>
						<Button
							className={classes.submitButton}
							onClick={onClose}
							variant='outlined'
							disabled={!selectedType}
						>
							Ok
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default AddParkingSpotModal;

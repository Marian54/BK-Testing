import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	customButton: {
		'&.MuiButtonBase-root': {
			color: '#210837',
			background: '#FCD93B',
			borderRadius: '5px',
			width: '234px',
			height: '40px',
			fontWeight: '600',
			fontSize: '15px',
			lineHeight: '27px',
			textTransform: 'uppercase',
			fontFamily: 'Segoe UI Semibold',
		},
		'&.MuiButtonBase-root:hover': {
			background: '#FCD93B',
		},
	},
}));

function YellowButton(props) {
	const { text, click } = props;
	const classes = useStyles();
	return (
		<Button
			className={classes.customButton}
			variant='contained'
			onClick={click}
		>
			{text}
		</Button>
	);
}

export default YellowButton;

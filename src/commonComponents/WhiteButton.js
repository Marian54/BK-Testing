import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles(() => ({
	customButton: {
		'&.MuiButtonBase-root': {
			color: '#210837',
			borderRadius: '5px',
			fontFamily: 'Segoe UI',
			fontSize: '12px',
			textTransform: 'uppercase',
			border: '1px',
			borderColor: '#210837',
			borderStyle: 'solid',
			marginRight: '5px',
		},
	},
}));
function WhiteButton(props) {
	const { text, click, disabled } = props;
	const classes = useStyles();
	return (
		<Button
			size='small'
			className={classes.customButton}
			onClick={click}
			disabled={disabled}
		>
			{text}
		</Button>
	);
}

export default WhiteButton;

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	customP: { color: '#210837', fontFamily: 'Segoe UI', fontSize: '18px' },
	formControl: {
		maxWidth: 250,
		minWidth: 100,
		width: '50%',
		textAlign: 'left',
	},
	addButton: {
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
		},
		'&.MuiButtonBase-root:hover': {
			background: '#FCD93B',
		},
	},
	submitButton: {
		'&.MuiButtonBase-root': {
			color: '#210837',
			borderRadius: '5px',
			width: '50px',
			height: '40px',
			fontWeight: 'regular',
			fontSize: '15px',
			lineHeight: '27px',
			textTransform: 'uppercase',
			border: '1px',
			borderColor: '#210837',
			borderStyle: 'solid',
		},
	},
	modal: {
		boxShadow: '0 1px 4px rgba(0, 0, 0, 0.2)',
		borderRadius: '5px',
		backgroundColor: '#FFFFFF',
		textAlign: 'center',
		width: '35%',
		height: '40%',
		zIndex: '10',
		position: 'absolute',
		top: '30%',
		right: '32%',

		color: '#210837',
		fontFamily: 'Segoe UI',
		letterSpacing: '0',
		fontSize: '20px',
		lineHeight: '27px',
	},
	closeButton: {
		backgroundColor: 'transparent',
		border: 'none',
		position: 'absolute',
		top: '0.5rem',
		right: '0rem',
	},
}));

export default useStyles;

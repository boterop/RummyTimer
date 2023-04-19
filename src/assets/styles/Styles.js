import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	background: {
		backgroundColor: '#000000',
		height: '100%',
		width: '100%',
	},
	center: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	restartButton: {
		backgroundColor: '#0000AB',
		borderRadius: 90,
		width: 200,
		height: 200,
	},
	pauseButton: {
		height: '30%',
	},
	clockButton: {},
	buttonIcon: {
		color: '#ffffff',
		fontSize: 50,
	},
	clock: {
		height: '30%',
		marginVertical: 50,
	},
	clockTimer: {
		color: '#ffffff',
		padding: 10,
		paddingBottom: 0,
		fontSize: 100,
		fontWeight: 'bold',
	},
	inline: {
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
});

export default Styles;

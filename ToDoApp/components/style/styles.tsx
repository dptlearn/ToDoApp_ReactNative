import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	lightContainer: {
		backgroundColor: '#fff',
		flex: 1
	},
	
	darkContainer: {
		backgroundColor: 'black',
		flex: 1
	},
	
	darkTextContainer: {
		color: 'black'
	},
	
	lightTextContainer: {
		color: '#fff'
	},
	
	basicContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	
	topSpaceMarginContainer: {
		marginTop: 50,
		
	},
	
	headerTextContainer: {
		fontWeight: 'bold',
		fontStyle: 'italic',
		fontSize: 32,
	},
	
	headerTextContainer2: {
		fontWeight: 'bold',
		fontSize: 15,
	},
	
	buttonContainer: {
		backgroundColor: 'grey',
		width: 100,
		height: 50,
		borderRadius: 50,
		marginRight: 30
	},
	
	lightBorderContainer: {
		borderColor: '#fff',
		flexDirection: 'row',
		borderWidth: 3,
		width: '80%', 
		height: '80%',
		marginBottom: 30,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	
	darkBorderContainer: {
		borderColor: 'black',
		flexDirection: 'row',
		borderWidth: 3,
		width: '80%',
		height: '80%',
		marginBottom: 30,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	
	modalOverlayContainer: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	
	modalDarkContainer: {
		width: '80%',
		height: '80%',
		backgroundColor: '#eee',
		alignItems: 'center',
		borderRadius: 50
	},
	
	modalLightContainer: {
		width: '80%',
		height: '80%',
		backgroundColor: 'black',
		alignItems: 'center',
		borderRadius: 50
	},
	
	textInputContainerLight: {
		borderColor: 'black',
		borderWidth: 2,
		width: '80%',
		height: '30%',
		borderRadius: 30,
		alignItems: 'center',
		fontWeight: 'bold',
		fontStyle: 'italic',
		textAlign: 'center',
		color: 'black'
	},
	
	textInputContainerDark: {
		borderColor: '#fff',
		borderWidth: 2,
		width: '80%',
		height: '30%',
		borderRadius: 30,
		alignItems: 'center',
		fontWeight: 'bold',
		fontStyle: 'italic',
		textAlign: 'center',
		color: '#fff'
	},
	
	capitaliseTextContainer: {
		fontWeight: 'bold',
	},
	
	colorSelectionContainerLight: {
		marginTop: 30,
		borderWidth: 2,
		borderColor: 'black',
		width: '80%',
		height: '15%',
		borderRadius: 30,
		alignItems: 'center'
	},
	
	colorSelectionContainerDark: {
		marginTop: 30,
		borderWidth: 2,
		borderColor: '#fff',
		width: '80%',
		height: '15%',
		borderRadius: 30,
		alignItems: 'center'
	},
	
	colorContainerRed: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'red',
		borderRadius: 30,
		backgroundColor: 'red',
		marginRight: 15
	},
	
	colorContainerYellow: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'yellow',
		borderRadius: 30,
		backgroundColor: 'yellow', 
		marginRight: 15
	},
	
	colorContainerBlue: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'blue',
		borderRadius: 30,
		backgroundColor: 'blue', 
		marginRight: 15
	},
	
	colorContainerGreen: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'green',
		borderRadius: 30,
		backgroundColor: 'green', 
		marginRight: 15
	},
	
	colorContainerOrange: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'orange',
		borderRadius: 30,
		backgroundColor: 'orange', 
		marginRight: 15
	},
	
	colorContainerPurple: {
		borderWidth: 2,
		height: '600%',
		width: '8%',
		borderColor: 'purple',
		borderRadius: 30,
		backgroundColor: 'purple', 
		marginRight: 15
	},
	
	selectedColorContainerDark: {
		borderWidth: 2,
		borderColor: 'black'
	},
	
	selectedColorContainerLight: {
		borderWidth: 2,
		borderColor: '#fff'
	},
	
	colorContainerEmpty: {
		borderWidth: 2,
		height: '60%',
		width: '8%',
		borderRadius: 30,
	}
	
	
});

export default styles;
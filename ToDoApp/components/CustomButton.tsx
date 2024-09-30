import { TouchableOpacity, Text, View, Appearance } from 'react-native';
import React, { useState, useEffect } from 'react';

import styles from './style/styles';

const CustomButton = ({ name, handlePress }) => {
	const [theme, setTheme] = useState(Appearance.getColorScheme());
	
	useEffect(() => {
		const listener = Appearance.addChangeListener(({ colorScheme }) => {
			setTheme(colorScheme);
		});
		
		return () => listener.remove();
	}, []);

	return(
		<TouchableOpacity
			style={styles.buttonContainer}
			onPress={handlePress}
		>	
			<View style={styles.basicContainer}>
					<Text style={{color: '#ddd', fontWeight: 'bold'}}>{ name }</Text>
			</View>
		</TouchableOpacity>
	);
};

export default CustomButton;
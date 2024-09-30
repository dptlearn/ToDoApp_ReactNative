import { Text, View, SafeAreaView, ScrollView, Appearance, TouchableOpacity, Modal, TextInput, Alert, Button, StatusBar, Dimensions, Platform } from "react-native";
import React, { useState, useEffect } from 'react';

import styles from '../components/style/styles';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AntDesign from '@expo/vector-icons/AntDesign';

const getStatusBarHeight = () => {
	const { height } = Dimensions.get('window');
	
	if(Platform.OS === 'ios')
	{
		return 50;
	}
	else
	{
		return StatusBar.currentHeight || 0;
	}
};

export default function Index() {
	const [theme, setTheme] = useState(Appearance.getColorScheme());
	const [toDoList, setToDoList] = useState([{ id: 2, name: 'work out', color: 'red' }, { id: 1, name: 'clean up', color: 'red' }]);
	const [modalVisible, setModalVisible] = useState(false);
	const [textInputChange, setTextInputChange] = useState('');
	const [numOfToDo, setNumOfToDo] = useState(1);
	const [colorTag, setColorTag] = useState(null);
	
	
	const addToDo = (newToDo, newColor) => {
		if(newToDo.trim() === '')
		{
			Alert.alert('Error: Empty Field!', 'New ToDo cannot be empty');
		}
		else
		{
			let arrayLength = toDoList.length;
		
			let newId = arrayLength + 1;
			let newArray = {id: newId, name: newToDo, color: newColor}
			
			const updatedList = [newArray, ...toDoList];
			
			setToDoList(updatedList);	
			saveToDo(updatedList);
			setModalVisible(false);
			setTextInputChange('');
			setColorTag(null);
			setNumOfToDo(updatedList.length);
		}
		
	};
	
	const handleColorPress = (color) => {
		setHighlightColor(color);
	};
	
	const loadToDo = async() => {
		try {
			const loadToDoList = await AsyncStorage.getItem('toDoList');
			if(loadToDoList !== null)
			{
				setToDoList(JSON.parse(loadToDoList));
				let arrayLength = JSON.parse(loadToDoList).length;
				setNumOfToDo(arrayLength);
			}
		} catch(error) {
			console.error(error);
		}
	};
	
	const saveToDo = async(newList) => {
		try {
			await AsyncStorage.setItem('toDoList', JSON.stringify(newList));
		} catch(error) {
			console.error(error);
			Alert.alert('Error 300!', 'Unable to save ToDoList!');
		}
	};
	
	const removeToDo = (postId) => {
		const newArrayList = toDoList.filter(item => item.id !== postId);
		setToDoList(newArrayList);
		saveToDo(newArrayList);
		let arrayLength = newArrayList.length;
		setNumOfToDo(arrayLength);
	};
	
	const handleColorTag = (color) => {
		setColorTag(color);
	};

	
	useEffect(() => {
		const listener = Appearance.addChangeListener(({ colorScheme }) => {
			setTheme(colorScheme);
		});
		
		loadToDo();
		return() => listener.remove();
	}, []);
	
	const statusBarPadding = getStatusBarHeight();

	return (
		
		
		<SafeAreaView style={ theme === 'dark'? styles.darkContainer : styles.lightContainer }>
			<StatusBar 
				barStyle={ theme === 'dark'? 'light-content' : 'dark-content' }
			/>
			<ScrollView contentContainerStyle={{flexGrow: 1, paddingTop: statusBarPadding }}>
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: statusBarPadding }}>
						<Text style={ theme === 'dark'? styles.lightTextContainer : styles.darkTextContainer }>
							<Text style={styles.headerTextContainer}>ToDoApp</Text>
						</Text>
					
					<View style={styles.topSpaceMarginContainer}>
						<Text style={ theme === 'dark'? styles.lightTextContainer : styles.darkTextContainer }>
							<CustomButton 
								name={'Add To Do'}
								handlePress={() => setModalVisible(true)}
								
							/>
						</Text>
					</View>
				</View>
					
				<Modal
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => setModalVisible(false)}
				>
					<View style={styles.modalOverlayContainer}>
						<View style={ theme === 'dark'? styles.modalDarkContainer : styles.modalLightContainer }>
							<View style={{marginTop: 30, marginBottom: 30}}>
								<Text style={styles.headerTextContainer}>
									<Text style={ theme === 'dark'? styles.darkTextContainer : styles.lightTextContainer }>Add To Do</Text>
								</Text>
							</View>
						
							<TextInput 
								style={ theme === 'dark'? styles.textInputContainerLight : styles.textInputContainerDark }
								multiline={false}
								placeholder={'YOUR NEW TODO'}
								placeholderTextColor={'grey'}
								onChangeText={(e) => setTextInputChange(e)}
								editable
							/>
							{ /* Color Selection Container */ }
							<View style={{marginTop: 15, justifyContent: 'flex-start'}}>
								<Text>Tags: </Text>
							</View>
							
							<View style={{flexDirection: 'row', marginTop: 15, alignItems: 'center'}}>
								{ /* Actual color */ }
								<TouchableOpacity 
									style={[styles.colorContainerRed, colorTag === 'red'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]} 
									onPress={() => handleColorTag('red')}>
								</TouchableOpacity>
								
								<TouchableOpacity 
									style={[styles.colorContainerYellow, colorTag === 'yellow'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]}
									onPress={() => handleColorTag('yellow')}>
								</TouchableOpacity>
								
								<TouchableOpacity 
									style={[styles.colorContainerBlue, colorTag === 'blue'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]}
									onPress={() => handleColorTag('blue')}>
								</TouchableOpacity>
								
								<TouchableOpacity 
									style={[styles.colorContainerGreen, colorTag === 'green'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]}
									onPress={() => handleColorTag('green')}>
								</TouchableOpacity>
								
								<TouchableOpacity 
									style={[styles.colorContainerOrange, colorTag === 'orange'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]}
									onPress={() => handleColorTag('orange')}>
								</TouchableOpacity>
								
								<TouchableOpacity 
									style={[styles.colorContainerPurple, colorTag === 'purple'? (theme === 'dark'? styles.selectedColorContainerDark : styles.selectedColorContainerLight) : null ]}
									onPress={() => handleColorTag('purple')}>
								</TouchableOpacity>
								
							</View>
							
								
							<View style={{marginTop: 30, flexDirection: 'row'}}>
								<CustomButton 
									name={'Cancel'}
									handlePress={() => setModalVisible(false)}
								/>
								
								
								<CustomButton 
									name={'Add'}
									handlePress={() => addToDo(textInputChange, colorTag)}
								/>
							</View>
						</View>
					</View>
				</Modal>
					
				<View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: statusBarPadding }}>
					<Text style={styles.headerTextContainer2}>
						<Text style={{color: 'red'}}>Number of Items: { numOfToDo }</Text>
					</Text>
				</View>
					
				<View style={{ alignItems: 'center' }}>
					{/*Create the border for each TODO*/}
					{toDoList.map((post) => {
						return <View key={post.id} style={{ flexDirection: 'row', marginTop: 30 }}>
									<View style={ theme === 'dark'? styles.lightBorderContainer : styles.darkBorderContainer }>
										<View style={[styles.colorContainerEmpty, {borderColor: post.color, backgroundColor: post.color}]} />
										<Text style={ theme === 'dark'? styles.lightTextContainer : styles.darkTextContainer }>{ post.name }</Text>
										
										<TouchableOpacity
											onPress={() => removeToDo(post.id)}
										>
											<AntDesign 
												name={'delete'}
												size={23}
												color={ theme === 'dark'? 'white' : 'black' }
											/>
										</TouchableOpacity>
									</View>
								</View>
					})}
				</View>
			</ScrollView>
		</SafeAreaView>
  );
}

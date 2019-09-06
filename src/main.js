import React from "react";
import {View, Text, Button} from "react-native";

class Main extends React.Component {
	render() {
		return(
			<View>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				
					
					<Text>Vegan</Text>
					<Button
					  //onPress={onPressLearnMore}
					  title="See All >"
					  color="#000000"
					/>
				
				
				<Text>Drugstore</Text>
					<Button
					  //onPress={onPressLearnMore}
					  title="See All >"
					  color="#000000"
					/>
				
				
				<Text>Luxury</Text>
					<Button
					  //onPress={onPressLearnMore}
					  title="See All >"
					  color="#000000"
					/>
				
				<Button
					  //onPress={onPressLearnMore}
					  title="Videos"
					  color="#841584"
					  
				/>
				<Button
					  //onPress={onPressLearnMore}
					  title="Home"
					  color="#841584"
					  
				/>
				<Button
					  //onPress={onPressLearnMore}
					  title="Profile"
					  color="#841584"
					  
				/>
			</View>
			);
	}


}

export default Main
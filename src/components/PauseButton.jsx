import React from 'react';
import { Pressable, Text } from 'react-native';
import { Styles } from '../assets/styles';

const PauseButton = ({ looping, setLooping }) => (
	<Pressable style={Styles.pauseButton} onPress={() => setLooping(!looping)}>
		<Text style={Styles.pauseButtonIcon}>{looping ? 'PAUSE' : 'START'}</Text>
	</Pressable>
);

export default PauseButton;

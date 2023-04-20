import React from 'react';
import { Pressable } from 'react-native';
import { Styles } from '../assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

const RestartButton = ({ reset, setReset }) => (
	<Pressable
		style={[Styles.restartButton, Styles.center]}
		onPress={() => setReset(!reset)}>
		<FontAwesomeIcon style={Styles.buttonIcon} icon={faArrowsRotate} />
	</Pressable>
);

export default RestartButton;

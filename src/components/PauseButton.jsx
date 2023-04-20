import React from 'react';
import { Pressable } from 'react-native';
import { Styles } from '../assets/styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const PauseButton = ({ looping, setLooping }) => (
	<Pressable
		style={[Styles.pauseButton, Styles.center]}
		onPress={() => setLooping(!looping)}>
		{looping ? (
			<FontAwesomeIcon style={Styles.buttonIcon} icon={faPause} />
		) : (
			<FontAwesomeIcon style={Styles.buttonIcon} icon={faPlay} />
		)}
	</Pressable>
);

export default PauseButton;

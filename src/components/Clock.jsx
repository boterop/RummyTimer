import React, { useEffect, useState } from 'react';
import { Styles } from '../assets/styles';
import { Pressable, Text, TextInput, View } from 'react-native';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

let currentTime;

const format = time => {
	let minutes = parseInt(time / 60);
	let seconds = parseInt(time % 60);
	let minutesString = minutes < 10 ? '0' + minutes : minutes.toString();
	let secondsString = seconds < 10 ? '0' + seconds : seconds.toString();

	return minutesString + ':' + secondsString;
};

const toSeconds = text => {
	const time = text.split(':');
	const minutes = parseInt(time[0]);
	const seconds = parseInt(time[1]);
	const totalSeconds = minutes * 60 + seconds;

	currentTime = isNaN(totalSeconds) ? 0 : totalSeconds;
};

const Clock = ({ time, setClock, setLooping }) => {
	const [isSaveButtonVisible, setIsSaveButtonVisible] = useState(false);
	const timer = format(time);

	useEffect(() => {
		if (isSaveButtonVisible) {
			setLooping(false);
		}
	}, [isSaveButtonVisible]);

	return (
		<View style={Styles.clock}>
			<TextInput
				style={Styles.clockTimer}
				onEndEditing={() => {
					setClock(currentTime);
					setIsSaveButtonVisible(false);
				}}
				onChangeText={text => {
					toSeconds(text);
					setIsSaveButtonVisible(text !== timer);
				}}>
				{timer}
			</TextInput>
			{isSaveButtonVisible ? (
				<Pressable
					style={Styles.center}
					onPress={() => {
						setClock(currentTime);
						setIsSaveButtonVisible(false);
					}}>
					<FontAwesomeIcon style={Styles.buttonIcon} icon={faFloppyDisk} />
				</Pressable>
			) : null}
		</View>
	);
};

export default Clock;

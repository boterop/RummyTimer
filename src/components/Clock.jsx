import React from 'react';
import { Text } from 'react-native';
import { Styles } from '../assets/styles'

const format = time => {
	let minutes = parseInt(time/60);
	let seconds = parseInt(time % 60);
	let minutesString = minutes < 10 ? "0" + minutes : minutes.toString();
	let secondsString = seconds < 10 ? "0" + seconds : seconds.toString();
	return minutesString + ":" + secondsString;
}

const Clock = ({ time, setClock }) => (<Text style={Styles.clock}>{format(time)}</Text>);

export default Clock;
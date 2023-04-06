import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Clock, PauseButton, RestartButton } from '../components';
import { Media } from '../services';
import { Styles } from '../assets/styles';

const Home = () => {
	const SOUND_PATH = "../assets/sounds/sound.wav";

	const [clock, setClock] = useState(120);
	const [time, setTime] = useState(120);
	const [looping, setLooping] = useState(true);
	const [reset, setReset] = useState(true);
	const [timeoutId, setTimeoutId] = useState(null);

	const [audioPlayer, setAudioPlayer] = useState(null);
	const [songStatus, setSongStatus] = useState(undefined);

	useEffect(async () => {
		if (isInitialMount.current) {
			isInitialMount.current = false;

			if (await Media.getPermission()) {
				const { playback, status } = await Media.play(SOUND_PATH);
				setAudioPlayer(playback);
				setSongStatus(status);
				console.log(playback);
				console.log(status);
			}
		}

		setTime(clock);
	}, [clock]);

	useEffect(() => {
		if (time <= 0) {
			playSound();
		} else if (looping) {
			setTimeoutId(setTimeout(() => setTime(time - 1), 1000));
		}
	}, [time]);

	useEffect(() => {
		if (time < clock) {
			clearTimeout(timeoutId);
			setLooping(true);
			setTime(clock);
		}
	}, [reset]);

	useEffect(() => {
		if (!looping) {
			clearTimeout(timeoutId);
		} else {
			setTimeoutId(setTimeout(() => setTime(time - 1), 1000));
		}
	}, [looping]);

	const playSound = async () => {
		setSongStatus(await audioPlayer.setStatusAsync({ shouldPlay: true }))
	};

	return (
		<View>
			<StatusBar hidden />
			<Clock time={time} setClock={() => setClock} />
			<View style={Styles.inline}>
				<RestartButton reset={reset} setReset={setReset} />
				<PauseButton looping={looping} setLooping={setLooping} />
			</View>
		</View>
	);
};

export default Home;

import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Clock, PauseButton, RestartButton } from '../components';
import { Styles } from '../styles';

const Home = ({ initialTime = 120, mockMedia = null }) => {
	const SOUND_PATH = mockMedia
		? 'MOCK_SOUND_PATH'
		: require('../assets/sounds/sound.wav');

	const isInitialMount = useRef(true);

	const mediaPlayer = mockMedia || require('../services/Media').default;
	const BackgroundTimer = mockMedia
		? require('../__mocks__/BackgroundTimer').default
		: require('react-native-background-timer').default;

	const [clock, setClock] = useState(initialTime);
	const [time, setTime] = useState(initialTime);
	const [looping, setLooping] = useState(false);
	const [update, setUpdate] = useState(false);
	const [reset, setReset] = useState(true);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;

			mediaPlayer.init(SOUND_PATH);
		}
	}, []);

	useEffect(() => {
		setLooping(false);
		setTime(clock);
	}, [clock]);

	useEffect(() => {
		if (time <= 0) {
			setLooping(false);
			playSound();
		}
	}, [time]);

	useEffect(() => {
		if (time < clock) {
			BackgroundTimer.stopBackgroundTimer();

			setLooping(true);
			setUpdate(!update);
			setTime(clock);
		}
	}, [reset]);

	useEffect(() => {
		if (!looping) {
			BackgroundTimer.stopBackgroundTimer();
		} else if (time > 0) {
			BackgroundTimer.runBackgroundTimer(() => setTime(time => time - 1), 1000);
		}
	}, [looping, update]);

	const playSound = () => mediaPlayer.play();

	return (
		<View style={[Styles.background, Styles.center]}>
			<StatusBar hidden />
			<Clock time={time} setClock={setClock} setLooping={setLooping} />
			<View>
				<RestartButton reset={reset} setReset={setReset} />
				<PauseButton looping={looping} setLooping={setLooping} />
			</View>
		</View>
	);
};

export default Home;

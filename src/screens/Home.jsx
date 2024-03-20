import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, View } from 'react-native';
import { Clock, PauseButton, RestartButton } from '../components';
import { Styles } from '../styles';

const Home = ({ initialTime = 120, mockMedia = null }) => {
	const SOUND_PATH = mockMedia
		? 'MOCK_SOUND_PATH'
		: require('../assets/sounds/sound.wav');

	const isInitialMount = useRef(true);

	const mediaPlayer = mockMedia || require('../services/Media');
	const [clock, setClock] = useState(initialTime);
	const [time, setTime] = useState(initialTime);
	const [looping, setLooping] = useState(false);
	const [reset, setReset] = useState(true);
	const [timeoutId, setTimeoutId] = useState(null);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
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
		} else if (time > 0) {
			setTimeoutId(setTimeout(() => setTime(time - 1), 1000));
		}
	}, [looping]);

	const playSound = () => {
		mediaPlayer.play(SOUND_PATH);
	};

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

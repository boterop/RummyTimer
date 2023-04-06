import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';

const getPermission = async () => {
	const permission = await MediaLibrary.getPermissionsAsync();
	if (!permission.granted) {
		const { status } = await MediaLibrary.requestPermissionsAsync();
		return status === 'granted';
	}
	return 'denied';
};

const Media = {
	getPermission,
	play: async uri => {
		const playback = new Audio.Sound();
		const status = await playback.loadAsync({ uri: uri }, { shouldPlay: true });

		return { playback, status };
	},
};

export default Media;
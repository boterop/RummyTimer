import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';

let playback = null;

const getPermission = async () => {
	const permission = await MediaLibrary.getPermissionsAsync();
	let response;
	if (!permission.granted) {
		response = await MediaLibrary.requestPermissionsAsync();
	}
	return response.status === 'granted';
};

const Media = {
	getPermission,
	play: async uri => {
		if (playback == null) {
			const { sound } = await Audio.Sound.createAsync(uri);
			playback = sound;
			playback.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate);
		}
		await playback.playAsync();
	},
};

_onPlaybackStatusUpdate = async playbackStatus => {
	if (playbackStatus.didJustFinish) {
		await playback.stopAsync();
	}
};

export default Media;

import { Audio } from 'expo-av';
import * as MediaLibrary from 'expo-media-library';

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
		const { sound } = await Audio.Sound.createAsync(uri);
		await sound.playAsync();
	},
};

export default Media;

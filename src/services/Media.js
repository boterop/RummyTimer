import Sound from 'react-native-sound';

let sound = null;

const getPermission = async () => true;

const Media = {
	getPermission,
	play: async uri => {
		if (sound == null) {
			sound = new Sound(uri, Sound.MAIN_BUNDLE);
		}
		sound.play()
	},
};

export default Media;

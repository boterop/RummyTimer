import Sound from 'react-native-sound';

let sound = null;

const Media = {
	play: async uri => {
		if (sound == null) {
			sound = new Sound(uri, Sound.MAIN_BUNDLE);
		}
		sound.play();
	},
};

export default Media;

import Sound from 'react-native-sound';

let sound = null;

const Media = {
	init: uri => {
		sound = new Sound(uri, Sound.MAIN_BUNDLE);
		sound.setVolume(1);
	},
	play: () => {
		if (sound !== null) {
			sound.play();
		}
	},
};

export default Media;

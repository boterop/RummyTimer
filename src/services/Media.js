import Sound from 'react-native-sound';

let sound = null;

const Media = {
	play: uri => {
		if (sound !== null) {
			sound.play();
			return;
		}
		sound = new Sound(uri, Sound.MAIN_BUNDLE);
		sound.setVolume(1);
		setTimeout(() => sound.play(), 1000);
	},
};

export default Media;

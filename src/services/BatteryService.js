import { BatteryOptEnabled } from 'react-native-battery-optimization-check';
import { Linking } from 'react-native';

const isOptimized = () => BatteryOptEnabled();
const openSettings = () => Linking.openSettings();

const BatteryService = {
	isOptimized,
	openSettings,
};

export default BatteryService;

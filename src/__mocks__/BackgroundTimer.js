let timeoutId = -1;

const BackgroundTimer = {
	runBackgroundTimer: jest.fn((callback, ms) => {
		const timer = () => {
			callback();
			timeoutId = setTimeout(timer, ms);
		};
		timeoutId = setTimeout(timer, ms);
	}),
	stopBackgroundTimer: jest.fn(() => clearTimeout(timeoutId)),
};

export default BackgroundTimer;

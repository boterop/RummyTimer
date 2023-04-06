import React from 'react';
import { Home } from '../src/screens';
import { create } from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-reanimated', () => {
	const Reanimated = require('react-native-reanimated/mock');

	Reanimated.default.call = () => {};

	return Reanimated;
});

it('Home should be the first screen', async () => {
	const result = create(<App />).toJSON();
	const home = create(<Home />).toJSON();

	expect(JSON.stringify(result)).toMatch(JSON.stringify(home));
});

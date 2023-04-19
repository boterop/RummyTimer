import React from 'react';
import { Home } from '../src/screens';
import { create } from 'react-test-renderer';
import App from '../App';

it('Home should be the first screen', () => {
	const result = create(<App />).toJSON();
	const home = create(<Home />).toJSON();

	expect(JSON.stringify(result)).toMatch(JSON.stringify(home));
});

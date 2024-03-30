import React from 'react';
import { Home } from '../src/screens';
import { create } from 'react-test-renderer';
import App from '../src/App';
import MockMedia from '../src/__mocks__/Media';

it('Home should be the first screen', () => {
	const result = create(<App mockMedia={MockMedia} />).toJSON();
	const home = create(<Home mockMedia={MockMedia} />).toJSON();

	expect(JSON.stringify(result)).toMatch(JSON.stringify(home));
});

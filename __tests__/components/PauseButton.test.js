import React from 'react';
import { PauseButton } from '../../src/components';
import { act, create } from 'react-test-renderer';
import { Pressable } from 'react-native';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

describe('Pause correctly the clock', () => {
    const START = faPlay.icon[4];
    const PAUSE = faPause.icon[4];

    it('With the clock looping', () => {
        let looping = true;
        const component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />).toJSON();

        const expectedStatus = PAUSE;

        expect(JSON.stringify(component)).toContain(expectedStatus);
    });

    it('With the clock paused', () => {
        let looping = false;
        const component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />).toJSON();

        const expectedStatus = START;

        expect(JSON.stringify(component)).toContain(expectedStatus);
    });

    it('Check button functionality', () => {
        let looping = true;

        let component;

        act(() => {
            component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />);
        });

        const expectedStatus = PAUSE;
        const expectedStatusAfterClick = START;

        expect(JSON.stringify(component)).toContain(expectedStatus);

        const {props} = component.root.findByType(Pressable);
        props.onPress();

        act(() => {
            component.update(<PauseButton looping={looping} setLooping={loop => looping = loop} />);
        });

        expect(JSON.stringify(component)).toContain(expectedStatusAfterClick);
    })
})

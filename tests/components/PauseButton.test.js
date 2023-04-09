import React from 'react';
import { PauseButton } from '../../src/components';
import { create } from 'react-test-renderer';
import { Pressable } from 'react-native';

describe('Pause correctly the clock', () => {
    const START = "START";
    const PAUSE = "PAUSE";

    it('With the clock looping', () => {
        let looping = true;
        const component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />).toJSON();

        const expectedStatus = PAUSE

        expect(JSON.stringify(component)).toMatch("{\"type\":\"View\",\"props\":{\"accessible\":true,\"focusable\":true,\"style\":{},\"collapsable\":false},\"children\":[{\"type\":\"Text\",\"props\":{\"style\":{}},\"children\":[\"" + expectedStatus + "\"]}]}");
    });

    it('With the clock paused', () => {
        let looping = false;
        const component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />).toJSON();

        const expectedStatus = START

        expect(JSON.stringify(component)).toMatch("{\"type\":\"View\",\"props\":{\"accessible\":true,\"focusable\":true,\"style\":{},\"collapsable\":false},\"children\":[{\"type\":\"Text\",\"props\":{\"style\":{}},\"children\":[\"" + expectedStatus + "\"]}]}");
    });

    it('Check button functionality', () => {
        let looping = true;
    
        const component = create(<PauseButton looping={looping} setLooping={loop => looping = loop} />);

        const expectedStatus = PAUSE
        const expectedStatusAfterClick = START

        expect(JSON.stringify(component)).toMatch("{\"type\":\"View\",\"props\":{\"accessible\":true,\"focusable\":true,\"style\":{},\"collapsable\":false},\"children\":[{\"type\":\"Text\",\"props\":{\"style\":{}},\"children\":[\"" + expectedStatus + "\"]}]}");

        const props = component.root.findByType(Pressable).props;
        props.onPress();

        component.update(<PauseButton looping={looping} setLooping={loop => looping = loop} />);
        
        expect(JSON.stringify(component)).toMatch("{\"type\":\"View\",\"props\":{\"accessible\":true,\"focusable\":true,\"style\":{},\"collapsable\":false},\"children\":[{\"type\":\"Text\",\"props\":{\"style\":{}},\"children\":[\"" + expectedStatusAfterClick + "\"]}]}");
    })
})

import React from 'react';
import { RestartButton } from '../../src/components';
import { create } from 'react-test-renderer';
import { Pressable } from 'react-native';

describe('Pause correctly the clock', () => {
    it('Check button functionality', () => {
        let reset = true;
        const expectedStatus = false;
        
        const component = create(<RestartButton reset={reset} setReset={resp => reset = resp} />);

        const props = component.root.findByType(Pressable).props;
        props.onPress();

        expect(reset).toBe(expectedStatus);
    });

    it('Check text', () => {
        let reset = true;
        
        const component = create(<RestartButton reset={reset} setReset={resp => reset = resp} />);

        expect(JSON.stringify(component)).toContain("RESET");
    });
})

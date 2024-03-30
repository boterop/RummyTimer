import React from 'react';
import { RestartButton } from '../../src/components';
import { create } from 'react-test-renderer';
import { Pressable } from 'react-native';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

describe('Restart correctly the clock', () => {
    const RESET = faArrowsRotate.icon[4];

    it('Check button functionality', () => {
        let reset = true;
        const expectedStatus = false;
        
        const component = create(<RestartButton reset={reset} setReset={resp => reset = resp} />);

        const {props} = component.root.findByType(Pressable);
        props.onPress();

        expect(reset).toBe(expectedStatus);
    });

    it('Check text', () => {
        let reset = true;
        
        const component = create(<RestartButton reset={reset} setReset={resp => reset = resp} />);

        expect(JSON.stringify(component)).toContain(RESET);
    });
})

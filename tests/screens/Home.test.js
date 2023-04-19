import React from 'react';
import { Home } from "../../src/screens";
import { Clock, PauseButton } from '../../src/components';
import { act, create } from 'react-test-renderer';
import { Pressable, TextInput } from 'react-native';

it("Clock renders with correct time", () => {
    const wrapper = create(<Home initialTime={120} />);
    const clock = wrapper.root.findByType(Clock);
    expect(clock.props.time).toEqual(120);
});

it("Looping updates time every second", () => {
    jest.useFakeTimers();
    
    const Media = {};

    Media.getPermission = jest.fn(() => true);

    let wrapper;

    act(() => {
        wrapper = create(<Home />);
    });

    const clock = wrapper.root.findByType(Clock);
    const pauseButton = wrapper.root.findByType(PauseButton);

    const props = pauseButton.findByType(Pressable).props;
    act(() => {
        props.onPress();
    });

    expect(JSON.stringify(clock.findByType(TextInput).props)).toContain("02:00");

    act(() => jest.advanceTimersByTime(1000));

    expect(JSON.stringify(clock.findByType(TextInput).props)).toContain("01:59");
    
    jest.useRealTimers();
});

import React from 'react';
import { Clock } from '../../src/components';
import { create } from 'react-test-renderer';

describe('Show correctly the seconds in minutes:seconds', () => {
    it('01:00', () => {
        const time = 60;
        const expectedHour = "01:00";
        const component = create(<Clock time={time} />).toJSON();

        expect(JSON.stringify(component)).toMatch("{\"type\":\"Text\",\"props\":{},\"children\":[\"" + expectedHour + "\"]}");
    });

    it('01:59', () => {
        const time = 119;
        const expectedHour = "01:59";
        const component = create(<Clock time={time} />).toJSON();

        expect(JSON.stringify(component)).toMatch("{\"type\":\"Text\",\"props\":{},\"children\":[\"" + expectedHour + "\"]}");
    });

    it('02:05', () => {
        const time = 125;
        const expectedHour = "02:05";
        const component = create(<Clock time={time} />).toJSON();

        expect(JSON.stringify(component)).toMatch("{\"type\":\"Text\",\"props\":{},\"children\":[\"" + expectedHour + "\"]}");
    });
    
    it('10:00', () => {
        const time = 600;
        const expectedHour = "10:00";
        const component = create(<Clock time={time} />).toJSON();

        expect(JSON.stringify(component)).toMatch("{\"type\":\"Text\",\"props\":{},\"children\":[\"" + expectedHour + "\"]}");
    });
})

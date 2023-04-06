import React from 'react';
import { Pressable, Text } from 'react-native';
import { Styles } from '../assets/styles'

const RestartButton = ({ reset, setReset }) => (
    <Pressable style={Styles.restartButton} onPress={() => setReset(!reset)}>
        <Text style={Styles.restartButtonIcon}>RESET</Text>
    </Pressable>
);

export default RestartButton;
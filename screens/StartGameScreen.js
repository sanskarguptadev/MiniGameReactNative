import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        //Shadow for ios & Android
        elevation: 8, //Android only property
        //Ios shadow property
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.5
    }
});
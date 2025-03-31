import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <View>
                <Text>Higher</Text>
            </View>
            <View>
                <Text>Logs</Text>
            </View>
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 25
    },
});
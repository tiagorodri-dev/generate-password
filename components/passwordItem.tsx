import { View, Text, StyleSheet, Pressable} from 'react-native';

interface infoPassword {
    data: any,
    removePassword: () => void;
}

export default function PasswordItem({ data, removePassword}: infoPassword) {
    return (
        <Pressable onLongPress={removePassword} style={styles.container}>
            <Text style={styles.text}>{data}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text:{
        color: "#FFF"
    }
});
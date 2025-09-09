import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, useWindowDimensions } from "react-native";


const RESTAURANTS = [
{ id: '1', name: 'Pasta Palace', cuisine: 'Italian', image: require('../../assets/sample/restaurant1.png') },
{ id: '2', name: 'Curry Corner', cuisine: 'Pakistani', image: require('../../assets/sample/restaurant2.png') },
{ id: '3', name: 'Sushi Spot', cuisine: 'Japanese', image: require('../../assets/sample/restaurant3.png') },
];


export default function HomeScreen() {
const { width } = useWindowDimensions();


const renderItem = ({ item }) => (
<TouchableOpacity style={[styles.card, { width: width * 0.9 }]}>
<Image source={item.image} style={styles.cardImage} resizeMode="cover" />
<View style={styles.cardBody}>
<Text style={styles.cardTitle}>{item.name}</Text>
<Text style={styles.cardSubtitle}>{item.cuisine}</Text>
</View>
</TouchableOpacity>
);


return (
<View style={styles.container}>
<Text style={styles.header}>Nearby Restaurants</Text>
<FlatList data={RESTAURANTS} renderItem={renderItem} keyExtractor={(i) => i.id} contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }} />
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#fff' },
header: { fontSize: 20, fontWeight: '700', margin: 16 },
card: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', marginVertical: 10, elevation: 2 },
cardImage: { width: '100%', height: 160 },
cardBody: { padding: 12 },
cardTitle: { fontSize: 16, fontWeight: '700' },
cardSubtitle: { color: '#666', marginTop: 4 },
});
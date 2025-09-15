import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import RatingDisplay from "../components/RatingDisplay";

const RECENTS = ["Burger", "Sandwich", "Pizza", "Sandwich"];
const RECOMMENDED = [
  { id: "1", name: "Koel Cafe", rating: 4.7, image: require("../../assets/sample/restaurant1.png") },
  { id: "2", name: "Cafe Flo", rating: 4.3, image: require("../../assets/sample/restaurant2.png") },
  { id: "3", name: "Sync Cafe", rating: 4.0, image: require("../../assets/sample/restaurant3.png") },
];

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState("");
  const topInset = Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 0;
  const filteredData = query.length > 0
    ? RECOMMENDED.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
    : [];
  return (
    <SafeAreaView style={[styles.container, { paddingTop: topInset }]}> 
      {/* Header */}
      <Header 
        title="Search"
        onBackPress={() => navigation.goBack()}
        showAvatar={true}
        avatarSource={require("../../assets/sample/restaurant1.png")}
      />

      {/* Search input */}
      <SearchInput
        placeholder="Search cafes"
        value={query}
        onChangeText={setQuery}
        onClear={() => setQuery("")}
        containerStyle={styles.searchBox}
      />

      {/* Recent keywords */}
      <Text style={styles.section}>Recent Keywords</Text>
      <View style={styles.chipsRow}>
        {RECENTS.map((t, idx) => (
          <TouchableOpacity key={`${t}-${idx}`} style={styles.chip} onPress={() => setQuery(t)}>
            <Text style={styles.chipText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Results only after user searches */}
      {query.length > 0 && (
        <>
          <Text style={[styles.section, { marginTop: 12 }]}>Results</Text>
          <FlatList
            data={filteredData}
            keyExtractor={(i) => i.id}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <View style={styles.resultRow}>
                <Image source={item.image} style={styles.thumb} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.resultTitle} numberOfLines={1}>{item.name}</Text>
                  <RatingDisplay 
                    rating={item.rating} 
                    size={12} 
                    containerStyle={{ marginTop: 2 }}
                  />
                </View>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text style={[styles.section, { marginTop: 4 }]}>No results</Text>}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  searchBox: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  section: { fontSize: 14, color: "#6B7280", marginTop: 8, marginBottom: 8, paddingHorizontal: 16 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16 },
  chip: { backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 8, marginBottom: 8 },
  chipText: { color: '#374151' },
  resultRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  thumb: { width: 44, height: 44, borderRadius: 8, marginRight: 12 },
  resultTitle: { fontWeight: '600', color: '#111' },
  divider: { height: 1, backgroundColor: '#EEE' },
});



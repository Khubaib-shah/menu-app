import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity, SafeAreaView, Platform, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={styles.headerRow}>
        <View style={{ width: 46 }}>
          <TouchableOpacity style={styles.backPill} onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={17} color="#333" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Search</Text>
        <Image source={require("../../assets/sample/restaurant1.png")} style={styles.avatar} />
      </View>

      {/* Search input */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={16} color="#E63946" />
        <TextInput
          placeholder="Search cafes"
          placeholderTextColor="#9AA0A6"
          value={query}
          onChangeText={setQuery}
          returnKeyType="search"
          style={styles.input}
          selectionColor="#E63946"
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => {}}
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={() => setQuery("")}> 
            <Ionicons name="close-circle" size={18} color="#E53935" />
          </TouchableOpacity>
        )}
      </View>

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
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                    <Ionicons name="star" size={12} color="#E63946" style={{ marginRight: 4 }} />
                    <Text style={styles.resultRating}>{item.rating}</Text>
                  </View>
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
  headerRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16, paddingTop: 8, paddingBottom: 8, height: 49 },
  backPill: { width: 46, height: 45, borderRadius: 50, backgroundColor: "#EEF1F4", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: '#E3E5E8' },
  headerTitle: { fontWeight: "600", flex: 1, textAlign: 'center' },
  avatar: { width: 40, height: 40, borderRadius: 32, borderWidth: 1, borderColor: '#E3E5E8' },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E3E5E8",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    height: 40,
    marginHorizontal: 16,
    marginBottom: 12,
  },
  input: { flex: 1, marginLeft: 8, color: '#111', fontSize: 16, paddingTop: 0, paddingBottom: 0, includeFontPadding: false, textAlignVertical: 'center' },
  section: { fontSize: 14, color: "#6B7280", marginTop: 8, marginBottom: 8, paddingHorizontal: 16 },
  chipsRow: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 16 },
  chip: { backgroundColor: '#F3F4F6', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 16, marginRight: 8, marginBottom: 8 },
  chipText: { color: '#374151' },
  resultRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 10 },
  thumb: { width: 44, height: 44, borderRadius: 8, marginRight: 12 },
  resultTitle: { fontWeight: '600', color: '#111' },
  resultRating: { color: '#374151', fontSize: 12 },
  divider: { height: 1, backgroundColor: '#EEE' },
});



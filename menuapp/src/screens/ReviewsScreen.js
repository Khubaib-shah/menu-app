import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Modal, TextInput, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function ReviewsScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(4);
  const [text, setText] = useState("");

  const REVIEWS = useMemo(() => (
    [1,2,3].map((i) => ({
      id: String(i),
      name: "John Peter",
      avatar: "https://i.pravatar.cc/100?img=" + (10 + i),
      time: "1 day ago",
      rating: 4,
      text: "This app has a clean, intuitive interface and made my workflow so much smoother. I especially liked how easy it was to navigate between features. Looking forward to future updates!",
    }))
  ), []);

  const renderStars = (value) => (
    <View style={{ flexDirection: "row" }}>
      {[1,2,3,4,5].map((i) => (
        <Text key={i} style={{ color: i <= value ? "#f4b400" : "#ccc", marginRight: 2 }}>★</Text>
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: item.avatar }} style={styles.avatar} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.reviewerName}>{item.name}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {renderStars(item.rating)}
              <Text style={styles.scoreText}>{item.rating.toFixed(1)}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      <Text style={styles.reviewText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.panel}>
        <Header title="Reviews" onBackPress={() => navigation.goBack()} />

        <View style={styles.headerCard}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          <Text style={styles.bigScore}>4.0</Text>
          {renderStars(4)}
          <Text style={styles.basedText}>Based on 23 reviews</Text>
        </View>

        <FlatList
          data={REVIEWS}
          keyExtractor={(i) => i.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          ListFooterComponent={
            <View style={styles.seeAllRow}>
              <Text style={styles.seeAllText}>see all</Text>
            </View>
          }
        />

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.reviewButton} onPress={() => setIsModalVisible(true)}>
            <Text style={styles.reviewButtonText}>Write a Review</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent visible={isModalVisible} animationType="fade" onRequestClose={() => setIsModalVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalBackdrop} />
        </TouchableWithoutFeedback>
        <View style={styles.modalSheetWrapper}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Give Feedback</Text>
            <Text style={styles.label}>Give Ratings</Text>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
              {[1,2,3,4,5].map((i) => (
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                  <Text style={{ fontSize: 24, marginRight: 6, color: i <= rating ? "#f4b400" : "#e0e0e0" }}>★</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={styles.label}>Write your Review</Text>
            <TextInput
              style={styles.textArea}
              placeholder="This is a great app ....."
              placeholderTextColor="#9E9E9E"
              value={text}
              onChangeText={setText}
              multiline
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },
  headerCard: {
    margin: 16,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  sectionTitle: { fontSize: 16, fontWeight: "700", color: "#111", marginBottom: 6 },
  bigScore: { fontSize: 40, fontWeight: "800", color: "#111", marginVertical: 4 },
  basedText: { color: "#888", fontSize: 12, marginTop: 6 },

  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  reviewHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  avatar: { width: 28, height: 28, borderRadius: 14 },
  reviewerName: { fontSize: 12, color: "#111", fontWeight: "700" },
  scoreText: { marginLeft: 6, fontSize: 12, color: "#444" },
  timeText: { fontSize: 10, color: "#9E9E9E" },
  reviewText: { fontSize: 12, color: "#444", lineHeight: 18 },

  seeAllRow: { alignItems: "flex-end", marginRight: 16, marginTop: 6 },
  seeAllText: { color: "#9E9E9E", fontSize: 12 },

  bottomBar: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16 },
  reviewButton: { backgroundColor: "#e53935", borderRadius: 12, alignItems: "center", paddingVertical: 14 },
  reviewButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },

  modalBackdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.3)", justifyContent: "flex-end" },
  modalCard: { backgroundColor: "#fff", padding: 16, borderTopLeftRadius: 18, borderTopRightRadius: 18 },
  modalTitle: { fontSize: 18, fontWeight: "800", color: "#111", textAlign: "center", marginBottom: 8 },
  label: { fontSize: 12, color: "#111", marginTop: 6, marginBottom: 6 },
  textArea: {
    minHeight: 110,
    borderRadius: 12,
    backgroundColor: "#F1F1F1",
    padding: 12,
    textAlignVertical: "top",
  },
  submitButton: { backgroundColor: "#e53935", marginTop: 12, borderRadius: 12, alignItems: "center", paddingVertical: 12 },
  submitText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});



import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { employees } from "../../data/employees";

export default function PersonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const person = employees.find((e) => e.id === id);

  if (!person) return null;

  return (
    <View style={styles.container}>
      <Image source={person.image} style={styles.image} />
      <Text style={styles.name}>{person.name}</Text>
      <Text style={styles.role}>{person.role}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bio</Text>
        <View style={styles.divider} />
        <Text style={styles.cardText}>{person.bio}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Fun Fact</Text>
        <View style={styles.divider} />
        <Text style={styles.cardText}>{person.funfact}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>← Gå tilbage</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    paddingTop: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  role: {
    color: "#ccc",
    fontSize: 14,
    marginTop: 4,
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 10,
    width: "80%",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ffffff40",
    marginVertical: 6,
  },
  cardText: {
    color: "#ccc",
    fontSize: 12,
    lineHeight: 18,
  },
  backButton: {
    marginTop: 12,
    backgroundColor: "#3a3f47",
    padding: 10,
    borderRadius: 8,
  },
  backText: {
    color: "#fff",
    fontSize: 14,
  },
});

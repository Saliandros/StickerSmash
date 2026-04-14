import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { employees } from "../../data/employees";

export default function AboutScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mød vores seje kolleger</Text>
      <View style={styles.divider} />

      {employees.map((employee) => (
        <TouchableOpacity
          key={employee.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/person/[id]",
              params: {
                id: employee.id,
                name: employee.name,
                role: employee.role,
              },
            })
          }
        >
          <Image source={employee.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{employee.name}</Text>
          <View style={styles.cardDivider} />
          <Text style={styles.cardText}>{employee.role}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#fff",
    marginTop: 8,
  },
  card: {
    backgroundColor: "#3a3f47",
    borderRadius: 12,
    padding: 16,
    width: "80%",
    marginTop: 16,
    // Skygge på iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Skygge på Android
    elevation: 5,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDivider: {
    width: "100%",
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 8,
  },
  cardText: {
    color: "#ccc",
    fontSize: 14,
  },
});

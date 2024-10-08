import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../layout/Screen";

import initialModules from "../../data/modules";

export default ModuleListScreen = () => {
  //initialisation
  const modules = initialModules;
  //state
  //handlers
  const handleSelect = () => alert("Selected");
  //view
  return (
    <Screen>
      <ScrollView style={styles.container}>
        {modules.map((module) => {
          return (
            <Pressable key={module.ModuleCode} onPress={handleSelect}>
              <View style={styles.item}>
                <Text style={styles.text}>
                  {module.ModuleCode} {module.ModuleName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
});

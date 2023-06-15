import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import { styles } from "../styles/LoginScreen";
import { useState } from "react";

const LoginScreen = () => {
  const [value, setValue] = useState([]);
  const handlePressButton = () => console.log("press button");
  const changeInput = () => console.log("change input");

  return (
    <View>
      <Text style={styles.title}>Увійти</Text>
      <TextInput
        style={styles.input}
        onChange={changeInput}
        placeholder="Адреса електронної пошти"
        placeholderTextColor={"#BDBDBD"}
      />
      <TextInput
        style={styles.input}
        onChange={changeInput}
        placeholder="Пароль"
        placeholderTextColor={"#BDBDBD"}
        secureTextEntry
      />
      <Button
        borderRadius={100}
        backgroundColor="#FF6C00"
        title="Зареєстуватися"
        onPress={handlePressButton}
      />
      <Text>Вже є акаунт? Увійти</Text>
    </View>
  );
};

export default LoginScreen;

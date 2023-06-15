import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import RegistrationScreen from "./RegistrationScreen";

const PostsScreen = () => {
  // const handlePressButton = () => console.log("press button");
  return (
    <ScrollView>
      <RegistrationScreen />
      {/* <Text>Реєстрація</Text> */}
      {/* <Button title="Зареєстуватися" onPress={handlePressButton} /> */}
      {/* <Text>Вже є акаунт? Увійти</Text> */}
    </ScrollView>
  );
};

export default PostsScreen;

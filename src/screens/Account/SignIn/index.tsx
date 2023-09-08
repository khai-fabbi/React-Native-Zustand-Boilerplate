import { Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import createStyles from "./SignIn.style";
import { LogoPrimary } from "@shared-components/common";
import { EyeIcon, EyeOffIcon } from "@shared-components/icons";
import { InputBase } from "@shared-components/input";
import { ButtonBase } from "@shared-components/button";
import { SCREENS } from "@shared-constants";
import { ButtonLoginSocial } from "../components";

interface SignInProps {
  navigation: any;
}
const SignIn = (props: SignInProps) => {
  const { navigation } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [isShowPass, setIsShowPass] = useState(false);
  const handleToggleEye = () => setIsShowPass(!isShowPass);
  return (
    <View style={styles.wrapper}>
      <LogoPrimary
        containerStyle={{
          position: "absolute",
          top: 24,
          left: 24,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subTitle}>
          Do not have an account?{" "}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() => navigation.navigate(SCREENS.SIGNUP)}
          >
            Sign up
          </Text>
        </Text>
        <ButtonLoginSocial
          title="Sign in with google"
          style={{ marginTop: 25, width: "100%" }}
        />
        <View style={styles.inputWrapper}>
          <InputBase label="Email *" placeholder="example@gmail.com" />
          <InputBase
            label="Password *"
            placeholder="Enter password"
            secureTextEntry={!isShowPass}
            iconRight={
              isShowPass ? (
                <EyeIcon onPress={handleToggleEye} />
              ) : (
                <EyeOffIcon onPress={handleToggleEye} />
              )
            }
          />
          <TouchableOpacity style={styles.textForgotPass}>
            <Text style={styles.textForgotPass}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <ButtonBase
          title="Sign in"
          style={{ marginTop: 25, width: "100%" }}
          onPress={() => navigation.navigate(SCREENS.TAB)}
        />
      </View>
    </View>
  );
};

export default SignIn;

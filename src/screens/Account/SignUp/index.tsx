import { Text, View } from "react-native";
import React, { useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import createStyles from "./SignUp.style";
import { LogoPrimary } from "@shared-components/common";
import { EyeIcon, EyeOffIcon } from "@shared-components/icons";
import { InputBase } from "@shared-components/input";
import { ButtonBase } from "@shared-components/button";
import { SCREENS } from "@shared-constants";
import { ButtonLoginSocial, CheckboxPolicy } from "../components";

interface SignUpProps {
  navigation: any;
}
const SignUp = (props: SignUpProps) => {
  const { navigation } = props;
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [isShowPass, setIsShowPass] = useState(false);
  const [isCheckPolicy, setIsCheckPolicy] = useState(false);
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
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subTitle}>
          Already have an account?{" "}
          <Text
            style={{ color: theme.colors.primary }}
            onPress={() => navigation.navigate(SCREENS.LOGIN)}
          >
            Sign in
          </Text>
        </Text>
        <ButtonLoginSocial
          title="Sign up with google"
          style={{ marginTop: 25, width: "100%" }}
        />
        <Text
          style={[
            styles.subTitle,
            { marginTop: 15, color: theme.colors.text2 },
          ]}
        >
          Or sign up with email
        </Text>
        <View style={styles.inputWrapper}>
          <InputBase label="Full Name *" placeholder="Enter you fullname" />
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
          <CheckboxPolicy
            value={isCheckPolicy}
            onValueChange={(v) => setIsCheckPolicy(v)}
          />
        </View>
        <ButtonBase
          title="Create my account"
          style={{ marginTop: 25, width: "100%" }}
          onPress={() => navigation.navigate(SCREENS.TAB)}
        />
      </View>
    </View>
  );
};

export default SignUp;

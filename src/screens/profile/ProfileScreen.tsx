import React, { useMemo, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import createStyles from "./ProfileScreen.style";
import { Header } from "@shared-components/common";
import { ButtonEditProfile } from "./components";
import { ButtonBase } from "@shared-components/button";
import { InputBase } from "@shared-components/input";
import { CalendarIcon } from "@shared-components/icons";

interface ProfileScreenProps {}

type FormInfoName = "firstName" | "lastName" | "dateOfBirth" | "phoneNumber";

interface FormValueInfoItem {
  label: string;
  name: FormInfoName;
}
const formValueInfo: FormValueInfoItem[] = [
  {
    label: "First Name*",
    name: "firstName",
  },
  {
    label: "Last Name*",
    name: "lastName",
  },
  {
    label: "Date of Birth*",
    name: "dateOfBirth",
  },
  {
    label: "Mobile Number*",
    name: "phoneNumber",
  },
];
type InfoValueType = { [key in FormInfoName]: string };
const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const theme = useTheme();
  // const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [infoValue, setInfoValue] = useState<InfoValueType>({
    firstName: "Quang Khai",
    lastName: "Vu",
    dateOfBirth: "22-12-1998",
    phoneNumber: "0339365888",
  });
  const [isEditAccount, setIsEditAccount] = useState(false);
  const [isChangedAccount, setIsChangedAccount] = useState(false);
  const handleChangeValueInfo = (value: string, name: FormInfoName) => {
    if (!isChangedAccount) setIsChangedAccount(true);
    setInfoValue({ ...infoValue, [name]: value });
  };
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Account Information</Text>
          <Text style={styles.subTitle}>Update your account information</Text>
        </View>
        <View style={styles.editWrapper}>
          <View style={styles.infoWrapper}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.titleInfo}>Personal Information</Text>
              <ButtonEditProfile
                onPress={() => setIsEditAccount(!isEditAccount)}
              />
            </View>
            <FlatList
              data={formValueInfo}
              style={{ marginTop: 20 }}
              contentContainerStyle={{ rowGap: 15 }}
              keyExtractor={(_, idx) => idx.toString()}
              renderItem={({ item, index }) => (
                <InputBase
                  autoFocus={isEditAccount && index === 0}
                  editable={isEditAccount}
                  label={item.label}
                  value={infoValue[item.name]}
                  iconRight={<CalendarIcon />}
                  onChangeText={(text) =>
                    handleChangeValueInfo(text, item.name)
                  }
                />
              )}
            />
            {isEditAccount && (
              <ButtonBase
                disabled={!isChangedAccount}
                title="Update"
                style={{ width: 128, marginTop: 25 }}
              />
            )}
          </View>

          <View style={styles.infoWrapper}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.titleInfo}>Credentials</Text>
              <ButtonEditProfile />
            </View>

            {/* input */}
            {/* <ButtonBase title="Update" style={{ width: 128, marginTop: 20 }} /> */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

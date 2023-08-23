/* eslint-disable react/no-unescaped-entities */
import { View, Text, StyleSheet, Image, ViewProps } from "react-native";
import React, { useMemo } from "react";
import { FolderIcon } from "@shared-components/icons";
import { useTheme, ExtendedTheme } from "@react-navigation/native";
import { ProgressBase } from "@shared-components/progress";
interface IProps extends ViewProps {}
const CardCampaign = ({ style, ...props }: IProps) => {
  const theme = useTheme();
  //   const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.wrapper, style]} {...props}>
      <Image
        style={styles.imageYourCampaign}
        alt="Image"
        source={{
          // eslint-disable-next-line max-len
          uri: "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        }}
      />
      <View style={styles.contentWrapper}>
        <View style={styles.nameCategory}>
          <FolderIcon />
          <Text style={styles.nameDetailCategory}>Architecture</Text>
        </View>
        <Text style={styles.nameCampaingn}>
          Remake - We Make architecture exhibition
        </Text>
        <Text style={styles.description}>
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </Text>

        <ProgressBase progress={0.5} style={{ marginVertical: 16 }} />
        <View style={styles.info}>
          <View style={[{ flex: 1 }]}>
            <Text style={styles.textInfoItem}>$2,000</Text>
            <Text style={styles.textInfoDescription}>Raised of $2,500</Text>
          </View>
          <View>
            <Text style={styles.textInfoItem}>17</Text>
            <Text style={styles.textInfoDescription}>Total backers</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardCampaign;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: colors.white,
      borderRadius: 15,
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    contentWrapper: {
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    imageYourCampaign: {
      width: "100%",
      height: 200,
      borderRadius: 15,
    },
    nameCategory: {
      flexDirection: "row",
      columnGap: 10,
      alignItems: "center",
    },
    nameDetailCategory: {
      color: colors.text3,
      fontSize: 14,
      fontWeight: "500",
    },
    nameCampaingn: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      lineHeight: 26,
    },
    description: {
      marginTop: 10,
      color: colors.text3,
      fontSize: 12,
      lineHeight: 18,
    },
    info: {
      flexDirection: "row",
      columnGap: 30,
    },
    textInfoItem: {
      color: colors.text2,
      fontWeight: "600",
      fontSize: 16,
      lineHeight: 26,
    },
    textInfoDescription: {
      color: colors.text4,
      fontSize: 14,
      lineHeight: 22,
    },
  });
  return styles;
};

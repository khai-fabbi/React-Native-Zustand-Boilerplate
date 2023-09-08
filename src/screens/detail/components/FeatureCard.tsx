import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { ChipBase } from "@shared-components/chip";
import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View, ViewProps } from "react-native";
import { formatToUsd } from "utils";

interface CardFeatureInfo {
  id: number;
  name: string;
  imgUrl: string;
  price: number;
  priceOld: number;
  estimatedShipping: Date;
  claimed: number;
  localShip: string;
}
interface IProps extends ViewProps {
  cardInfo: CardFeatureInfo;
}
const FeatureCard = ({ style, cardInfo, ...props }: IProps) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.container, style]} {...props}>
      <Image
        resizeMode="cover"
        borderRadius={10}
        source={{
          uri: cardInfo.imgUrl,
        }}
        style={styles.img}
      />
      <View style={styles.contentWrapper}>
        <ChipBase title="Featured" />
        <Text style={{ marginTop: 12, fontWeight: "600", fontSize: 14 }}>
          {cardInfo.name}
        </Text>
        <Text style={{ marginTop: 12, fontWeight: "600", fontSize: 14 }}>
          {formatToUsd(cardInfo.price)}
          {"  "}
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: colors.error,
              textDecorationLine: "line-through",
            }}
          >
            {formatToUsd(cardInfo.priceOld)}
          </Text>
        </Text>
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: "500", lineHeight: 22 }}>
            Estimated Shipping
          </Text>
          <Text style={{ marginTop: 4, fontSize: 12, color: colors.text2 }}>
            {cardInfo.estimatedShipping.toDateString()}
          </Text>
        </View>
        <Text style={{ marginTop: 12, color: colors.text2, fontSize: 12 }}>
          <Text
            style={{ color: colors.text, fontWeight: "500", fontSize: 12 }}
          >{`${
            cardInfo.claimed < 10
              ? "0" + cardInfo.claimed
              : "" + cardInfo.claimed
          } `}</Text>
          claimed
        </Text>
        <Text style={{ marginTop: 12, fontSize: 12, color: colors.text2 }}>
          {cardInfo.localShip}
        </Text>
      </View>
    </View>
  );
};

export default FeatureCard;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 10,
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
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    img: {
      width: "100%",
      aspectRatio: 16 / 9,
    },
  });
  return styles;
};

import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { ButtonBack, ButtonMethodPayment } from "@shared-components/button";
import { HeaderSecondary } from "@shared-components/common";
import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const METHOAD_PAYMENT_LIST = [
  {
    id: 1,
    name: "paypal",
  },
  {
    id: 2,
    name: "payoneer",
  },
];
const Checkout = () => {
  const theme = useTheme();
  //   const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [methodPaymentActiveId, setMethodPaymentActiveId] = useState(1);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <HeaderSecondary />
      <View style={styles.contentContainer}>
        <ButtonBack />
        <Text style={styles.title}>Payment</Text>
        <View style={styles.methodPayment}>
          {METHOAD_PAYMENT_LIST.map(({ id, name }) => (
            <ButtonMethodPayment
              key={id}
              isActive={id === methodPaymentActiveId}
              onPress={() => setMethodPaymentActiveId(id)}
            >
              <Text>{name}</Text>
            </ButtonMethodPayment>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      backgroundColor: colors.background,
    },
    contentContainer: {
      marginTop: 20,
      rowGap: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 30,
    },
    methodPayment: {
      flexDirection: "row",
      columnGap: 15,
    },
  });
  return styles;
};

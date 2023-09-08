import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { ReactNode, useMemo } from "react";
import Modal, { ModalProps } from "react-native-modal";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import { CloseIcon } from "@shared-components/icons";

const { width, height } = Dimensions.get("screen");
interface IProps extends Partial<ModalProps> {
  isVisible: boolean;
  children: ReactNode;
  title: ReactNode;
  onCloseModal: () => void;
}
const ModalBase = ({
  isVisible,
  onCloseModal,
  title,
  children,
  ...props
}: IProps) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return (
    <Modal
      {...props}
      isVisible={isVisible}
      backdropOpacity={0.5}
      deviceHeight={height}
      deviceWidth={width}
      style={styles.modal}
      onBackdropPress={onCloseModal}
      useNativeDriver
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating
    >
      <ScrollView style={styles.container}>
        <View style={styles.headerModal}>
          {typeof title === "string" ? (
            <Text style={styles.titleModal}>{title}</Text>
          ) : (
            title
          )}
          <TouchableOpacity style={styles.iconBox} onPress={onCloseModal}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.bodyModal}>{children}</View>
      </ScrollView>
    </Modal>
  );
};

export default ModalBase;

const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;
  const styles = StyleSheet.create({
    modal: {
      flex: 1,
    },
    container: {
      maxHeight: "75%",
      position: "relative",
      backgroundColor: colors.white,
      minHeight: 100,
      width: "100%",
      padding: 20,
      paddingTop: 10,
      paddingHorizontal: 15,
      paddingBottom: 25,
      borderRadius: 15,
      zIndex: 100,
    },
    iconBox: {
      width: 48,
      height: 34,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F9E3E3",
      borderRadius: 5,
    },
    headerModal: {
      flexDirection: "row",
      columnGap: 10,
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleModal: {
      fontWeight: "600",
    },
    bodyModal: {
      marginTop: 20,
    },
  });
  return styles;
};

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ExtendedTheme, useTheme } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal, { ModalProps } from "react-native-modal";

interface ModalTimePickerProps extends Partial<ModalProps> {
  title?: string;
  isVisible: boolean;
  handleClose: () => void;
  onSelect?: (date: Date) => void;
  dayOfBirth?: Date;
}
const { width, height } = Dimensions.get("screen");
const ModalTimePicker = ({
  title = "Select",
  isVisible,
  handleClose,
  dayOfBirth = new Date(),
  onSelect,
  ...props
}: ModalTimePickerProps) => {
  const theme = useTheme();
  // const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [date, setDate] = useState<Date>(dayOfBirth);

  const onChange = (_: DateTimePickerEvent, value: Date | undefined) => {
    if (!value) return;
    setDate(value);
    if (Platform.OS === "android") {
      handleClose();
    }
  };

  return (
    <Modal
      {...props}
      isVisible={isVisible}
      backdropOpacity={0.5}
      coverScreen={true}
      style={styles.modal}
      deviceHeight={height}
      deviceWidth={width}
      onBackdropPress={handleClose}
      useNativeDriver
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating
    >
      <View style={[styles.container]}>
        <View style={styles.handleBar} />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.titleModal}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              onSelect?.(date);
              handleClose();
            }}
          >
            <Text style={styles.buttonSelectDate}>Done</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onChange}
        />
      </View>
    </Modal>
  );
};
export default ModalTimePicker;

export const createStyles = (theme: ExtendedTheme) => {
  const { colors } = theme;

  const styles = StyleSheet.create({
    modal: {
      flex: 1,
      justifyContent: "flex-end",
      margin: 0,
    },
    container: {
      backgroundColor: colors.white,
      width: "100%",
      paddingTop: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
    },
    buttonSelectDate: {
      color: colors.primary,
      fontSize: 17,
      lineHeight: 22,
      fontWeight: "600",
      marginTop: 20,
      marginBottom: 10,
    },
    handleBar: {
      width: 50,
      height: 5,
      borderRadius: 20,
      backgroundColor: "gray",
      alignSelf: "center",
    },
    titleModal: {
      color: colors.text,
      fontSize: 17,
      lineHeight: 22,
      fontWeight: "600",
      marginTop: 20,
      marginBottom: 10,
    },
  });
  return styles;
};

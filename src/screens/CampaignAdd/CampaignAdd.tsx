import React, { useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "@react-navigation/native";
/**
 * ? Local Imports
 */
import createStyles from "./CampaignAdd.style";
/**
 * ? Shared Imports
 */
import Header from "@shared-components/common/Header";
import { ButtonBase } from "@shared-components/button";
import { InputBase } from "@shared-components/input";
import { DropdownCountry, DropdownPrimary } from "@shared-components/dropdown";
import { DropDownItem } from "@services/models";
import { FormDataTypeEnum } from "@shared-constants";
import { ModalTimePicker } from "@shared-components/modal";
import { CalendarIcon } from "@shared-components/icons";

type FormDataName =
  | "title"
  | "category"
  | "shortDescription"
  | "goal"
  | "raisedAmount"
  | "amountPrefilled"
  | "video"
  | "method"
  | "startDate"
  | "endDate"
  | "country";
type FormValueType = {
  [key in FormDataName]: string;
};

interface FormDataItem {
  label: string;
  name: FormDataName;
  placeholder: string;
  type: FormDataTypeEnum;
  helpText?: string;
  dataOptions?: DropDownItem[];
}

const categoryOptions: DropDownItem[] = [
  { label: "Education", value: "1" },
  { label: "Camera", value: "2" },
  { label: "Music", value: "3" },
];
const FORM_DATA: FormDataItem[] = [
  {
    label: "Campaign Title *",
    name: "title",
    placeholder: "Write a title",
    type: FormDataTypeEnum.TEXT_FIELD,
  },
  {
    label: "Select a category *",
    name: "category",
    placeholder: "Select a category",
    type: FormDataTypeEnum.SELECT,
    dataOptions: categoryOptions,
  },
  {
    label: "Short Description *",
    name: "shortDescription",
    placeholder: "Write a short Description",
    type: FormDataTypeEnum.TEXT_AREA,
  },
  {
    label: "Goal *",
    name: "goal",
    placeholder: "$0.00 USD",
    type: FormDataTypeEnum.TEXT_FIELD,
  },
  {
    label: "Raised Amount*",
    name: "raisedAmount",
    placeholder: "Amount Prefilled",
    type: FormDataTypeEnum.TEXT_FIELD,
  },
  {
    label: "Amount Prefilled",
    name: "amountPrefilled",
    placeholder: "Amount Prefilled",
    type: FormDataTypeEnum.TEXT_FIELD,
    helpText:
      "It will help fill amount box by click, place each amount by comma, ex: 10,20,30,40",
  },
  {
    label: "Video",
    name: "video",
    placeholder: "Video",
    type: FormDataTypeEnum.TEXT_FIELD,
    helpText: "Place Youtube or Vimeo Video URL",
  },
  {
    label: "Campaign End Method",
    name: "method",
    placeholder: "Select one",
    type: FormDataTypeEnum.SELECT,
    dataOptions: categoryOptions,
  },
  {
    label: "Country",
    name: "country",
    placeholder: "Select a country",
    type: FormDataTypeEnum.SELECT_COUNTRY,
    // dataOptions: categoryOptions,
  },
  {
    label: "Start Date",
    name: "startDate",
    placeholder: "Start Date",
    type: FormDataTypeEnum.DATE_PICKER,
  },
  {
    label: "End Date",
    name: "endDate",
    placeholder: "End Date",
    type: FormDataTypeEnum.DATE_PICKER,
  },
];
interface SelectedItemDatePickerType {
  label: string;
  name: FormDataName;
}
interface HomeScreenProps {}
const CampaignAdd: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [formValue, setFormValue] = useState<FormValueType>({
    title: "",
    category: "",
    shortDescription: "",
    goal: "",
    amountPrefilled: "",
    raisedAmount: "",
    video: "",
    method: "",
    startDate: "",
    endDate: "",
    country: "1",
  });
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [selectedItemDatePicker, setSelectItemDatePicker] =
    useState<SelectedItemDatePickerType>();
  const handleChangeValue = (value: string, name: FormDataName) => {
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formValue);
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 28 }}
    >
      <Header />
      <View style={styles.contentContainer}>
        <ButtonBase
          title="Start a Campaign"
          disabled
          style={{
            height: 50,
            backgroundColor: "#F9F9FA",
            shadowColor: colors.transparent,
            width: 180,
            alignSelf: "center",
          }}
          textStyle={{ color: colors.text2 }}
        />
        <View style={styles.inputWrapper}>
          {FORM_DATA.map(
            ({ label, name, placeholder, type, helpText, dataOptions }) => {
              switch (type) {
                case FormDataTypeEnum.TEXT_FIELD:
                  return (
                    <View key={name}>
                      {name === "goal" && (
                        <ButtonBase
                          title="You will get 90% of total raised"
                          disabled
                          style={{
                            backgroundColor: colors.secondary,
                            height: 50,
                            marginBottom: 15,
                          }}
                          textStyle={{ fontSize: 12 }}
                        />
                      )}
                      <InputBase
                        key={name}
                        value={formValue[name]}
                        label={label}
                        placeholder={placeholder}
                        helpText={helpText}
                        onChangeText={(text) => handleChangeValue(text, name)}
                      />
                    </View>
                  );
                case FormDataTypeEnum.SELECT:
                  return (
                    <DropdownPrimary
                      key={name}
                      label={label}
                      options={dataOptions || []}
                      placeholder={placeholder}
                      value={formValue[name]}
                      onChangeValue={(item) =>
                        handleChangeValue(item.value, name)
                      }
                    />
                  );
                case FormDataTypeEnum.SELECT_COUNTRY:
                  return (
                    <DropdownCountry
                      key={name}
                      label={label}
                      placeholder={placeholder}
                      value={formValue[name]}
                      onChangeValue={(v) => handleChangeValue(v, name)}
                    />
                  );
                case FormDataTypeEnum.TEXT_AREA:
                  return (
                    <InputBase
                      key={name}
                      label={label}
                      placeholder={placeholder}
                      value={formValue[name]}
                      multiline
                      style={styles.inputArea}
                      numberOfLines={4}
                      helpText={helpText}
                      onChangeText={(text) => handleChangeValue(text, name)}
                    />
                  );
                case FormDataTypeEnum.DATE_PICKER:
                  return (
                    <InputBase
                      key={name}
                      label={label}
                      placeholder={placeholder}
                      value={formValue[name].split("T")[0]}
                      iconRight={
                        <CalendarIcon
                          onPress={() => {
                            setSelectItemDatePicker({
                              label,
                              name,
                            });
                            setIsOpenDatePicker(true);
                          }}
                        />
                      }
                    />
                  );

                default:
                  return;
              }
            },
          )}
        </View>
        <ButtonBase
          style={{ marginTop: 15, alignSelf: "center" }}
          title="Submit new campaign "
          onPress={handleSubmit}
        />
      </View>
      <ModalTimePicker
        title={selectedItemDatePicker?.label}
        isVisible={isOpenDatePicker}
        handleClose={() => setIsOpenDatePicker(false)}
        dayOfBirth={new Date()}
        onSelect={(date) => {
          if (!selectedItemDatePicker) return;
          handleChangeValue(date.toISOString(), selectedItemDatePicker.name);
        }}
      />
    </ScrollView>
  );
};

export default CampaignAdd;

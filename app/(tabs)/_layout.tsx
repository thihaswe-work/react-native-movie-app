import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";

const TabIcon = ({
  icon,
  title,
  focused,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  title: string;
}) => {
  return focused ? (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
    >
      <Image source={icon} tintColor="#151312" className="size-5" />
      <Text className="text-secondary text-base">{title}</Text>
    </ImageBackground>
  ) : (
    <View className="size-full justify-center items-center rounded-full mt-4">
      <Image source={icon} tintColor="#a8b5db" className="size-5" />
    </View>
  );
};
const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0d23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon={icons.home} title={"Home"} />
          ),
        }}
      ></Tabs.Screen>

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon={icons.search} title={"Search"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon={icons.save} title={"Saved"} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon focused={focused} icon={icons.person} title={"Profile"} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default _Layout;

const styles = StyleSheet.create({});

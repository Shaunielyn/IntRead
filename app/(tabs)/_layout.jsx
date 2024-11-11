import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }} 
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.home} 
          color={color} />,
        }}
      />
      <Tabs.Screen
    name="books"
    options={{
      title: 'Library',
      headerShown: false,
      tabBarIcon: ({ color, focused }) => (
        <TabIcon
          icon={icons.books}
          color={color}
          name="books"
          focused={focused}
        />
      ),
    }}
  />
      <Tabs.Screen
        name="download"
        options={{
          title: 'Download',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.download} 
          color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => 
          <TabIcon 
          icon={icons.user} 
          color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
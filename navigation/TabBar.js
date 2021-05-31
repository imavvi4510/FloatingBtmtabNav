import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome as Icon } from '@expo/vector-icons';
import  TabBarAdvancedButton  from '../components/TabBarAdvance';
import  EmptyScreen  from '../screens/EmptyScreen';
import { IS_IPHONE_X } from '../utlis/index';
import AddButton from '../animatedButton/animatedButton';

const BottomBar = createBottomTabNavigator();


const TabBar = (barColor) => {
  return (
    <NavigationContainer>
    <BottomBar.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar
            {...props}
          />
          {IS_IPHONE_X && (
            <View style={[styles.xFillLine, {
              backgroundColor: barColor
            }]}/>
          )}
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: barColor
        }
      }}
    >
      <BottomBar.Screen
        name="Home"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="user"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name=" "
        component={EmptyScreen}
        options={{
          tabBarIcon: () => (
            <AddButton/>
          )
        }}
      />
      <BottomBar.Screen
        name="Messages"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="wechat"
              size={24}
              color={color}
            />
          )
        }}
      />
      <BottomBar.Screen
        name="Settings"
        component={EmptyScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="gear"
              size={24}
              color={color}
            />
          )
        }}
      />
    </BottomBar.Navigator>
  </NavigationContainer>
  )
}

export default TabBar

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34
  }
});
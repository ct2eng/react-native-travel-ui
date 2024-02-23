import React from 'react';
import {Platform, StyleSheet, View, Text, Image, TouchableOpacity, Button} from 'react-native';
import { createStackNavigator, createBottomTabNavigator,TabBarComponent } from 'react-navigation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/FontAwesome';
// https://oblador.github.io/react-native-vector-icons/

import List from '../screens/List';
import Article from '../screens/Article';
import userInfo from '../screens/userInfo'
import editTravel from '../screens/editTravel'


const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    columns: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    header: {
        backgroundColor: '#fff',
        paddingHorizontal: 36,
        paddingTop: 48,
        paddingBottom: 18

    },
    avatar: {
        width:36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    header2: {
        backgroundColor: 'transparent',
        paddingHorizontal: 36,
        paddingTop: 48,
        justifyContent:'space-between'
  
    }
})

// 大包 -> 包含 旅遊List 以及各個 主題Article 
const Travel = createStackNavigator(
    {
        List:{
            screen: List,
            navigationOptions:{
                headerTransparent: true
            //     header: (
            //         <View style={[styles.flex, styles.row, styles.header, {
            //             justifyContent: "space-between", // 讓下面兩個block往左有分開
            //             alignItems: "center", // 讓所有block裡的東西置中
            //         }]}>
            //         <View>
            //             <Text>Search for place</Text>
            //             <Text style={{fontSize: 24}}>Destination</Text>
            //         </View>
            //         <View>
            //             <Image style={styles.avatar} source={require('../assets/image/user/adam.jpg')}></Image>
            //         </View>
            //         </View>
            //     )
            }
        },
        Article:{
            screen: Article,
            navigationOptions: ({ navigation }) => ({
                headerLeft: (
                    <TouchableOpacity style={{ marginLeft:30, width:30,height:30}} onPress={() => navigation.goBack()}>
                        <FontAwesome name="chevron-left" color="#FFF" />
                    </TouchableOpacity>
                ),
                headerRight: (
                    <TouchableOpacity style={{ marginRight:15, width:30,height:30}} onPress={() => navigation.goBack()}>
                        <FontAwesome name="ellipsis-v" color="#FFF" />
                    </TouchableOpacity>
                ),
                // header: (
                //     <View style={[styles.flex, styles.row, styles.header2]}>
                //         {/* 
                //         this.props.navigation.navigate('List') 
                //         在static這裡不能使用，必須要參數進來(navigation)
                //         */}
                //         <TouchableOpacity style={{width:30,height:30}} onPress={() => navigation.goBack()}>
                //           <FontAwesome name="chevron-left" color="#FFF" />
                //         </TouchableOpacity>
                //         <TouchableOpacity onPress={() => navigation.goBack()}>
                //           <FontAwesome name="ellipsis-v" color="#FFF" />
                //         </TouchableOpacity>
                //     </View>
                // ),
                headerTransparent: true
            })
        }
    },
    {
        initialRouteName: "List",
        // defaultNavigationOptions: {
        //     headerStyle: {
        //         borderBottomColor: 'transparent',
        //         // marginTop: 24,
        //         // backgroundColor: 'green'
        //     }
        // }
    }
);

const tabs = createBottomTabNavigator({
    MainPage: {
        screen: Travel,
        navigationOptions:{
            tabBarLabel: '列表',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name={focused ? 'align-justify' : 'list'}
                    size={25}
                    style={{color:tintColor}}
            />
            )
        }
    },
    editTravel: {
        screen: editTravel,
        navigationOptions:{
            tabBarLabel: '新增',
            tabBarIcon: ({tintColor, focused}) => (
                <View style={{color:'red'}}>
                <FontAwesome
                    name={focused ? 'pencil' : 'edit'}
                    size={25}
                    style={{color:tintColor}}
                />
                </View>
            )
        }
    },
    userInfo:{
        screen: userInfo,
        navigationOptions:{
            tabBarLabel: '個人資訊',
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name={focused ? 'odnoklassniki' : 'child'}
                    size={25}
                    style={{color:tintColor}}
            />
            )
        }
    }
    
},{
    initialRouteName: 'userInfo',
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#7190A9' : '#7190A9',
        // inactiveTintColor: Platform.OS === 'ios' ? '#7190A9' : '#7190A9',
    }
});




export default(tabs);
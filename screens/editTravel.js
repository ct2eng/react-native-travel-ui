import React, { Component } from 'react'
import { Alert, Button, AlertIOS, TouchableOpacity, Text, Animated, StyleSheet, View, ScrollView, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import LinearGradient from "react-native-linear-gradient";
//https://github.com/react-native-community/react-native-linear-gradient

import AwesomeButton from 'react-native-really-awesome-button';
//https://github.com/rcaferati/react-native-really-awesome-button

import { Fumi } from 'react-native-textinput-effects';
//https://github.com/halilb/react-native-textinput-effects

import { addItem } from '../model/add';
import { db } from '../config/db';
import * as firebase from 'firebase';
// import ImagePicker from 'react-native-image-crop-picker';
import { ImagePicker } from 'expo';
import { Permissions } from 'expo';



// dimensions 取的當前手機寬度
const { width, height } = Dimensions.get('screen');

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
        paddingBottom: 18,
        width:width

    }
})

class editTravel extends Component{

    constructor(props){
        super(props);

        this.state={
            location:'',
            temperature:'',
            title:'',
            description:'',
            rating:'',
            reviews:''
        };

        this.submit = this.submit.bind(this);

    }

    submit(){
        addItem(this.state);
        AlertIOS.alert(
            'saved successfully'
        );
    }

    async componentDidMount() {
        const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (permission.status !== 'granted') {
            const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (newPermission.status === 'granted') {
              //its granted.
            }
        } else {
            
        }
      }

    
    onChooseImagePress = async () => {
        //let result = await ImagePicker.launchCameraAsync();
        let result = await ImagePicker.launchImageLibraryAsync();
    
        if (!result.cancelled) {
            console.log('result', result);
          this.uploadImage(result.uri, "test-image")
            .then(() => {
              Alert.alert("Success");
            })
            .catch((error) => {
              Alert.alert(error);
            });
        }
      }
    
      uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        console.log('response:', response);
        const blob = await response.blob();
    
        var ref = firebase.storage().ref().child("images/" + imageName);

        var metadata = {
            contentType: 'image/jpeg',
          };
        return ref.put(blob, metadata);
      }
    
    renderInput(){
        return(
            <View style={[styles.flex, {marginTop:130}]}>
                <View style={[styles.flex]}>
                {/* <Button title="Choose image..." onPress={this.onChooseImagePress} /> */}
                    <Text style={{fontSize:36}}>新增列表</Text>
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'location'}
                        iconClass={Entypo}
                        iconName={'location'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.location}
                        onChangeText={(val)=>this.setState({location:val})}
                    />
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'temperature'}
                        iconClass={MaterialCommunityIcons}
                        iconName={'temperature-celsius'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.temperature}
                        onChangeText={(val)=>this.setState({temperature:val})}
                    />
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'title'}
                        iconClass={FontAwesome}
                        iconName={'flag-o'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.title}
                        onChangeText={(val)=>this.setState({title:val})}
                    />
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'description'}
                        iconClass={FontAwesome}
                        iconName={'file-text-o'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.description}
                        onChangeText={(val)=>this.setState({description:val})}
                    />
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'rating'}
                        iconClass={FontAwesome}
                        iconName={'star'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.rating}
                        onChangeText={(val)=>this.setState({rating:val})}
                    />
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'reviews'}
                        iconClass={Entypo}
                        iconName={'eye'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.reviews}
                        onChangeText={(val)=>this.setState({reviews:val})}
                    />
                </View>
                <View style={[styles.flex, styles.row, {justifyContent:'center'}]}>
                    <AwesomeButtonRick 
                        backgroundColor= "#E5F2FC"
                        backgroundDarker= "#A2D4FF"
                        backgroundActive= "#E5F2FC"
                        textColor= "#7190A9"
                        width={width*0.7}
                        style={{width:width*0.7}}
                        onPress={this.submit}
                    >
                        submit
                    </AwesomeButtonRick>
                </View>
            </View>
            
        )
    }

    render(){
        return(
            <View style={[styles.flex, styles.row, styles.header, {
                alignItems: "center", // 讓所有block裡的東西置中
                
            }]}>
                <ScrollView style={{height:height}}>
                    {this.renderInput()}
                </ScrollView>
            </View>
        )
    }

}

export default(editTravel);
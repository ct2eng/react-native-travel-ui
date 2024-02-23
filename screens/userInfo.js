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
import { DangerZone } from 'expo';
const { Lottie } = DangerZone;



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

    },
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }
})

class userInfo extends Component{

    state = {
        animation: null,
      };

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

        // this.submit = this.submit.bind(this);

    }

    componentWillMount() {
        this._playAnimation();
      }
    
    renderInput(){
        return(
            <View style={[styles.flex, {marginTop:130}]}>
                
                <View style={[styles.flex]}>
                <View style={styles.animationContainer}>
                    {this.state.animation &&
                    <Lottie
                        ref={animation => {
                        this.animation = animation;
                        }}
                        style={{
                        width: 400,
                        height: 250,
                        }}
                        source={require('./car.json')}
                    />}
                </View>
                    <Fumi
                        passiveIconColor={'#7190A9'}
                        label={'title'}
                        iconClass={FontAwesome}
                        iconName={'user'}
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
                        iconName={'key'}
                        iconColor={'#59A9FD'}
                        iconSize={20}
                        iconWidth={40}
                        inputPadding={16}
                        value={this.state.description}
                        onChangeText={(val)=>this.setState({description:val})}
                    />
                </View>
                {/* <View style={[styles.flex, styles.row, {justifyContent:'center'}]}>
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
                </View> */}
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

    _playAnimation = () => {
        if (!this.state.animation) {
          this._loadAnimationAsync();
        } else {
          this.animation.reset();
          this.animation.play();
        }
      };
    
      _loadAnimationAsync = async () => {
        let result = await fetch(
          'https://cdn.rawgit.com/airbnb/lottie-react-native/635163550b9689529bfffb77e489e4174516f1c0/example/animations/Watermelon.json'
        );
    
        this.setState(
          { animation: JSON.parse(result._bodyText) },
          this._playAnimation
        );
      };

}

export default(userInfo);
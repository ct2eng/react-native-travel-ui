import React, { Component } from 'react'
import { Button, TouchableOpacity, Text, Animated, StyleSheet, View, ScrollView, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
      backgroundColor: 'transparent',
      paddingHorizontal: 36,
      paddingTop: 48,
      justifyContent:'space-between'

  },
  content:{
    backgroundColor:'#FFF',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12
  },
  dots: {
    width: 10,
    height: 10,
    backgroundColor: '#DDE1E9',
    borderRadius: 5,
    borderWidth: 0,
    marginHorizontal: 6,
    borderColor: 'transparent',
  }
})


class Article extends Component {

  scrollX = new Animated.Value(0);

  // static navigationOptions = ({navigation})=> ({
  //   header: (
  //       <View style={[styles.flex, styles.row, styles.header]}>
  //           {/* 
  //           this.props.navigation.navigate('List') 
  //           在static這裡不能使用，必須要參數進來(navigation)
  //           */}
  //           <TouchableOpacity style={{width:30,height:30}} onPress={() => navigation.goBack()}>
  //             <FontAwesome name="chevron-left" color="#FFF" />
  //           </TouchableOpacity>
  //           <TouchableOpacity onPress={() => navigation.goBack()}>
  //             <FontAwesome name="ellipsis-v" color="#FFF" />
  //           </TouchableOpacity>
  //       </View>
  //   ),
  //   //header 透明
  //   headerTransparent: true
  // })

  renderDots() {

    const article = this.props.navigation.getParam('Article');
    
    const dotPosition = Animated.divide(this.scrollX, width);
    console.log('dotPosition: ', dotPosition);
    return(
      <View style={[styles.flex, styles.row, 
      { justifyContent:'center', alignItems:'center'}]}>
      {article.images.map((item, index)=>{
          // 選中位置的透明度
          const opacity = dotPosition.interpolate({
              inputRange: [index-1, index, index+1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp'
          });
          return(
              <Animated.View 
              // borderWidth :opacity 選中位置borderWidth的透明度
              style={[styles.dots, {opacity}]}
              />
          )
      })}
      </View>
    )
  }

  render() {

    const article = this.props.navigation.getParam('Article');
    
    return (
      <View style={styles.flex}>
        <View style={[styles.flex, {justifyContent: 'flex-end'}]}>
          <ScrollView
            style={{overflow: 'visible'}}
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.scrollX}}}])} 
          >
            {
              article.images.map( (img, index)=>(
                <Image source={{uri:img}} style={{width,height:width*0.75}} />
              ))
            }
            
          </ScrollView>
          {this.renderDots()}
        </View>
        <View style={styles.flex}>
          <Text> content </Text>
        </View>
      </View>
    )
  }
}



export default Article;


import React, { Component } from 'react'
import { TouchableOpacity, Text, Animated, StyleSheet, View, ScrollView, FlatList, ImageBackground, Image, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

// dimensions 取的當前手機寬度
const { width, height } = Dimensions.get('screen');

// 資料集
const marks = [
    {
        id: 1,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        // description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        description: 'Santorini description',
        rating: 3.5,
        reviews: 3212,
        preview: 'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        images: [
            'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131772/pexels-photo-2131772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        ]
    },
    {
        id: 2,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        // description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        description: 'Santorini description',
        rating: 2.3,
        reviews: 3212,
        preview: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?cs=srgb&dl=arc-de-triomphe-architecture-cars-161901.jpg&fm=jpg',
        images: [
            'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?cs=srgb&dl=arc-de-triomphe-architecture-cars-161901.jpg&fm=jpg',
            'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?cs=srgb&dl=arc-de-triomphe-architecture-cars-161901.jpg&fm=jpg',
            'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?cs=srgb&dl=arc-de-triomphe-architecture-cars-161901.jpg&fm=jpg',
            'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?cs=srgb&dl=arc-de-triomphe-architecture-cars-161901.jpg&fm=jpg',
        ]
    },
    {
        id: 3,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        // description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        description: 'Santorini description',
        rating: 4.3,
        reviews: 3212,
        preview: 'https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        images: [
            'https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/2131623/pexels-photo-2131623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        ]
    },
    {
        id: 4,
        user: {
            name: 'Lelia Chavez',
            avatar: 'https://randomuser.me/api/portraits/women/82.jpg',
        },
        saved: true,
        location: 'Santorini, Greece',
        temperature: 34,
        title: 'Santorini',
        // description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
        description: 'Santorini description',
        rating: 5,
        reviews: 3212,
        preview: 'https://images.pexels.com/photos/1896021/pexels-photo-1896021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        images: [
            'https://images.pexels.com/photos/1896021/pexels-photo-1896021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1896021/pexels-photo-1896021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1896021/pexels-photo-1896021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            'https://images.pexels.com/photos/1896021/pexels-photo-1896021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        ]
    }
]

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
        backgroundColor: '#F6FAFD',
        paddingHorizontal: 36,
        paddingTop: 48,
        paddingBottom: 18,
        zIndex:99,
        position: "absolute",
        top: 0,
        width:width

    },
    articles: {
        // paddingHorizontal: left & right 36
        // paddingHorizontal: 36
    },
    destinstions: {
        flex:1,
        // justifyContent: 'space-between'
    },
    destinstion: {
        // 銀幕寬度 - (paddingLeft:36 + paddingRight:36 ) = 剛好一個block
        width: width - (36 * 2),
        height: width - (36 * 4),
        marginHorizontal: 36,
        paddingHorizontal: 36,
        paddingVertical: 24,
        borderRadius: 12,
        // backgroundColor: 'pink',
        // position: 'relative'
    },
    destinstionInfo: {
        position: 'absolute',
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 12,
        bottom: -36,
        right: 36,
        left: 36,
        justifyContent: 'space-between',
    },
    shadow: {
        // Android
        elevation: 2,

        // iOS
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
        height: 5,
        width: 5,
        },
    },
    renecommended: {
        padding: 36
    },
    renecommendation: {
        width: (width - (36 * 2)) / 2, 
        marginRight: 10,
        borderRadius:12,
        backgroundColor: '#FFF', // 記得要加底色才又辦法加陰影，要不然會變成字加陰影
    },
    renecommendationImage: {
        width: (width - (36 * 2)) / 2,
        height: (width - (36 * 2)) / 2,
        padding:16,
        justifyContent:"space-between", 
        overflow:'hidden',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12
    },
    avatar: {
        width:36,
        height: 36,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#FFF',
        right: 0
    },
    rating: {
        fontSize: 24,
        color: 'white', 
        fontWeight: 'bold'
    },
    dots: {
        width: 10,
        height: 10,
        backgroundColor: '#DDE1E9',
        borderRadius: 5,
        borderWidth: 0,
        marginHorizontal: 6,
        borderColor: 'transparent',
    },
    activeDot: {
        borderWidth: 1.5,
        borderColor: '#007BFA',
    }
})

class Articles extends Component {

  //构造函数中初始化一个带动画属性的值用于旋转动画的初始值
  scrollX = new Animated.Value(0);

//   static navigationOptions = {
//       header: (
//           <View style={[styles.flex, styles.row, styles.header, {
//               justifyContent: "space-between", // 讓下面兩個block往左有分開
//               alignItems: "center", // 讓所有block裡的東西置中
//           }]}>
//             <View>
//                 <Text>Search for place</Text>
//                 <Text style={{fontSize: 24}}>Destination</Text>
//             </View>
//             <View>
//                 <Image style={styles.avatar} source={require('../assets/image/user/adam.jpg')}></Image>
//             </View>
//           </View>
//       )
//   }

  homeHeader(){
      return(
        <View style={[styles.flex, styles.row, styles.header, {
            justifyContent: "space-between", // 讓下面兩個block往左有分開
            alignItems: "center", // 讓所有block裡的東西置中
        }]}>
            <View>
                <Text>Search for place</Text>
                <Text style={{fontSize: 24}}>Destination</Text>
            </View>
            <View>
                <Image style={styles.avatar} source={require('../assets/image/user/adam.jpg')}></Image>
            </View>
        </View>
    )
  }

  //星星數
  renderStars(itemStars){
    const stars = new Array(5).fill(0);
    return(
      stars.map((value, index)=>{
        const activeStars = index+1 <= Math.round(itemStars);
        return(
            <FontAwesome
            name="star"
            size={10}
            color={activeStars?'#007BFA':'gray'}
            style={{width:10}}
            />
        )
      })
    )

  }


  // 切換輪播的點點 
  renderDots() {
      const { destinations } = this.props;
      
      const dotPosition = Animated.divide(this.scrollX, width);
      console.log(dotPosition);
      return(
        <View style={[, styles.row, { flex:0.1, justifyContent:"center", marginTop:(36*2)}]}>
        {destinations.map((item, index)=>{
            // 選中位置的透明度
            const opacity = dotPosition.interpolate({
                inputRange: [index-1, index, index+1],
                outputRange: [0, 2, 0],
                extrapolate: 'clamp'
            });
            return(
                <Animated.View 
                // key={`step-$(item.id)-d`}
                // borderWidth :opacity 選中位置borderWidth的透明度
                style={[styles.dots, styles.activeDot, {borderWidth :opacity}]}
                />
            )
        })}
        </View>
      )
  }

  // 多個旅遊景點
  renderDestinations = () => {
      return (
          <View style={[styles.flex, styles.destinstions, {marginTop:130}]}>
            <FlatList 
            /*
            * 避免destinstionInfo無法顯示，使用visible
            * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow
            */
            style={{overflow: 'visible'}}
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            scrollEventThrottle={16}
            snapToAlignment="center"
            data={this.props.destinations}
            // keyExtractor={(item, index)=>`$(item.id)-a`}
            onScroll={Animated.event(
                [{nativeEvent: {contentOffset: {x: this.scrollX}}}])} 
            renderItem={({ item }) => this.renderDestination(item)}
            />
            {this.renderDots()}
          </View>
      );
  }

  // 單一旅遊景點 由 renderDestinations 包覆
  renderDestination = item => {
      return (
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Article',{Article: item})}>
            <ImageBackground
            style={[styles.flex, styles.destinstion]}
            imageStyle={{borderRadius: 12}}
            source={{uri:item.preview}}
            >
                <View style={[styles.row]}>
                    <View style={{width:36, height:36}}>
                        <Image source={{uri:item.user.avatar}} style={styles.avatar} />
                    </View>
                    <View style={[ styles.columns, {flex:3, paddingHorizontal: 10}]}>
                        <Text style={{color:'#fff', fontWeight: 'bold'}}>{item.user.name}</Text>
                        <Text style={{color:'#fff'}}><EvilIcons name="location" size={14} color="#FFF" />{item.location}</Text>
                    </View>
                    <View style={[styles.flex, {justifyContent:'center', alignItems:'flex-end'}]}>
                        <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                    {/* <Text>{title.title}</Text> */}
                </View>
                <View style={[styles.columns, styles.destinstionInfo, styles.shadow]}>
                    <Text style={{fontSize:18, fontWeight:'500', paddingVertical:8}}>{item.title}</Text>
                    
                    <View style={[styles.row, {alignItems:'center', justifyContent:'space-between'}]}>
                        <Text style={{color: 'grey'}}>{item.description}</Text>
                        <FontAwesome name="chevron-right" size={10} color="grey" />
                    
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
      );
  }

  renderRecommended = () => {
      return (
          <View style={[styles.flex, styles.columns, styles.renecommended]}>
            <View style={[styles.row, {justifyContent:"space-between", alignItems:"flex-end", marginBottom: 18}]}>
                <Text style={{fontSize:18}}>Recommended</Text>
                <Text style={{color:'grey'}}>More</Text>
            </View>
            <View style={[styles.columns, styles.renecommendedList]}>
                <FlatList 
                /*
                * 避免destinstionInfo無法顯示，使用visible
                * https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow
                */
                style={{overflow: 'visible'}}
                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                data={this.props.destinations}
                // keyExtractor={(item, index)=>`$(item.id)`}
                renderItem={({ item, index }) => this.renderRecommendation(item, index)}
                />
            </View>
          </View>
      );
  }

  renderRecommendation = (item, index) => {
    
    const { destinations } = this.props;
    console.log('HI', {index, lenght:destinations.length})

    return(
        <View style={[styles.flex,  styles.columns, styles.renecommendation, styles.shadow ]}>
            <View style={styles.flex}>
                <ImageBackground
                    style={[styles.flex, styles.row, styles.renecommendationImage]}
                    source={{uri:item.preview}}
                >
                    <Text style={{color:'#FFF'}}>{item.temperature}&#8451;</Text>
                    <FontAwesome name="bookmark" size={16} color="#FFF" />
                    {/* <Text style={{color:'#FFF'}}>|_|</Text> */}
                </ImageBackground>
            </View>
            <View style={[styles.flex, styles.columns,{padding:18}]}>
                <Text style={{fontSize:18, fontWeight:'500', paddingBottom:8}}>{item.title}</Text>
                <Text style={{color: 'grey'}}>{item.location}</Text>
                <View style={[styles.row, {justifyContent:'space-between',paddingTop:10}]}>
                    <Text>{this.renderStars(item.rating)}</Text>
                    <Text style={{color: '#007BFA'}}>{item.rating}</Text>
                </View>
            </View>
        </View>
    )
  }

  render() {
    return (   
        <View style={{backgroundColor:'#F6FAFD'}}>  
            {this.homeHeader()}
            <ScrollView>
                {this.renderDestinations()}
                {this.renderRecommended()}
            </ScrollView>
        </View>
    )
  }
}

// 設定初始參數properties
Articles.defaultProps = {
    destinations: marks
}

export default Articles;

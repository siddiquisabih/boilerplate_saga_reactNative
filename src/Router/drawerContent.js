import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Thumbnail, Button, Body, Right, Switch } from 'native-base';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { userLogoutSuccess } from "../store/Actions/userAction"
import { stopService } from "../store/Actions/backgroundActions"
import { connect } from 'react-redux'
import RouteKey from './routeKeys';
import LinearGradient from 'react-native-linear-gradient';
import ColorsApp from '../utils/colorsApp';
import AntIcon from 'react-native-vector-icons/AntDesign'
import Utils from '../utils/globalFunc';

var styles = require('../assets/files/Styles');

class DrawerContent extends Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor(props) {
        super(props)
        this.state = {
            menu: [
                { title: "Home", iconLeft: "home", iconRight: "arrow-right", routeKey: RouteKey.HOME },
                // { title: "Search", iconLeft: "magnifier", iconRight: "arrow-right", routeKey: RouteKey.SEARCH },
                // { title: "Map", iconLeft: "location-pin", iconRight: "arrow-right", routeKey: "" },
                // { title: "CRM Profiles", iconLeft: "user-following", iconRight: "arrow-right", routeKey: RouteKey.CRM_CATEGORY },
                // { title: "Servey", iconLeft: "notebook", iconRight: "arrow-right", routeKey: RouteKey.SURVEY_SELECTION },
                // { title: "Notification", iconLeft: "paper-plane", iconRight: "arrow-right", routeKey: "" },
                // { title: "Unsent", iconLeft: "minus", iconRight: "arrow-right", routeKey: "" },
                // { title: "Settings", iconLeft: "settings", iconRight: "arrow-right", routeKey: "" },
                // { title: "Help", iconLeft: "question", iconRight: "arrow-right", routeKey: "" },
                { title: "Runs Notification", iconLeft: "bell", iconRight: "arrow-right", routeKey: RouteKey.RUNS_NOTIFICATION },
                { title: "Settings", iconLeft: "settings", iconRight: "arrow-right", routeKey: RouteKey.SETTINGS_CONFIG },
                { title: "About", iconLeft: "info", iconRight: "arrow-right", routeKey: RouteKey.ABOUT_US },
                { title: "Contact", iconLeft: "earphones", iconRight: "arrow-right", routeKey: RouteKey.CONTACT_US },
                { title: "Logout", iconLeft: "logout", iconRight: "arrow-right", routeKey: RouteKey.LOGIN },
            ]
        }
    }


    componentDidMount() {
        console.log(this.props.userData)

    }
    search = (string) => {
        //   this.props.navigation.navigate('SearchScreen', { string: '' });    
    }
    navigatePage = (routeKey, title) => {

        if (title.toLowerCase() !== 'logout' && routeKey) {
            this.props.navigation.navigate(routeKey)
            return null
        }
        if (title.toLowerCase() === 'logout') {
            this.props.userLogoutSuccess()
            this.props.navigation.replace(RouteKey.SPLASH)
            return null
        }
    }

    render() {
        return (
            <Container style={[styles.container_menu,]}>

                <LinearGradient colors={[ColorsApp.PRIMARY, ColorsApp.SECOND]} style={{ flex: 1 }}>


                    <View style={[styles.sideMenu, { flexDirection: "row", justifyContent: "flex-start" }]}>
                        <Thumbnail source={require('../assets/userImage.jpg')} />
                        <View style={{ paddingLeft: 10 }}>

                            <Text style={[styles.nameText, { color: "white" }]}>{this.props.userData?.name}</Text>
              
                            <Text style={[styles.nameText, { color: "white", marginTop: 0 }]}>{this.props.userData?.phone_number} </Text>
                        </View>
                    </View>


                    <ScrollView>
                        {
                            this.state.menu.map((m, v) => {
                                return (
                                    <ListItem key={v} style={styles.item_menu} icon onPress={() => { this.navigatePage(m.routeKey, m.title) }} >
                                        {/* <ListItem key={v} style={styles.item_menu} icon onPress={() => { m.routeKey ? this.props.navigation.navigate(m.routeKey) : null }} > */}
                                        <Left style={{ borderBottomWidth: 0 }}>
                                            <Icon name={m.iconLeft} style={styles.iconSidemenu} />
                                        </Left>
                                        <Body style={{ borderBottomWidth: 0 }}>
                                            <Text style={styles.text_menu}>{m.title}</Text>
                                        </Body>
                                        <Right style={{ borderBottomWidth: 0 }} >
                                            <Icon name={m.iconRight} style={styles.icon_menu} />
                                        </Right>
                                    </ListItem>
                                )
                            })
                        }
                    </ScrollView>


                    <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: "center", }}>
                        <Text style={{ color: "white", }}> Version {Utils.getApplicationLocalVersion()}</Text>
                    </View>
                    {/* <View style={{ flexDirection: 'row', marginBottom: 20, justifyContent: "center", }}>
                        <Text style={{ color: "white", }}>CROWNSOFT INTERNATIONAL</Text>
                        <AntIcon name="trademark" color="white" style={{ position: "relative", bottom: 2 }} />
                    </View> */}



                </LinearGradient>

            </Container>
        );
    }
}

const actions = { userLogoutSuccess, stopService }
const mapStateToProps = ({ user, backgroundReducer }) => ({
    userData: user.userData,
    backgroundReducer
})

export default connect(
    mapStateToProps,
    actions
)(DrawerContent)



















// import React, { Component } from 'react'
// import { Text, View,SafeAreaView,Button, StyleSheet } from 'react-native'
// import RouteKey from './routeKeys'
// import { Actions } from 'react-native-router-flux'
// import {CustomButton} from "../containers"

// import {userLogoutSuccess} from "../store/Actions/userAction"
// import { connect } from 'react-redux'


//   class DrawerContent extends Component {
//     render() {
//         return (
//             <SafeAreaView>






//               <CustomButton  title="Home" buttonEvent={() => Actions[RouteKey.HOME]()} />
//               <CustomButton  title="Search" buttonEvent={() => Actions[RouteKey.SEARCH]()} />
//               <CustomButton  title="Map"  />
//               <CustomButton  title="CRM Profiles" />
//               <CustomButton  title="Servey Selection" />
//               <CustomButton  title="Notification" />
//               <CustomButton  title="Unsent Records" />
//               <CustomButton  title="Settings" />
//               <CustomButton  title="Help Center" />
//               <CustomButton  title="Contact Us" />
//               <CustomButton  title="About" />
//               <CustomButton  title="Notification" />
//               <CustomButton  title="Logout" buttonEvent={() => {this.props.userLogoutSuccess()}} />




//             </SafeAreaView>
//         )
//     }
// }


// const actions = { userLogoutSuccess }

// const mapStateToProps = ({ user }) => ({
//     userData: user
// })

// export default connect(
//     mapStateToProps,
//     actions
// )(DrawerContent)
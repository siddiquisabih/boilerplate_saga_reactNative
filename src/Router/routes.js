import React, { Component, useState, useEffect } from 'react'
import { Dimensions, Image, Text, View, Animated } from 'react-native'
import Home from '../components/Home/home'
import GetFreeCash from '../components/Home/getFreeCash'
import RouteKey from "./routeKeys"
import Login from '../components/authentication/login'
import UserWaiting from '../components/authentication/userWaiting'
import Splash from '../components/Splash/splash'
import DrawerContent from "./drawerContent"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import AntDesign from "react-native-vector-icons/AntDesign"
// import CRMCategory from '../components/CRM/categroy'
import { connect } from 'react-redux'
import ForgetPassword from "../components/authentication/forgetPassword"

import TestForm from './testForm'
import SurveyJsTemplate from './surveyJsTemp'
import { QR, LaithMechanicQR, ScanableItemList } from '../components/QRCode'
import MAP from '../components/Map/map'
import SurveyList from '../components/survey/surveyList'
import ProfileDetail from '../components/modals/innerSearchProfile/profileDetail'
import SurveySelection from '../components/survey/surveySelection'
import AddNewProfile from '../components/CRM/addNewProfile'


// new navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import OTP from '../components/otp/OTP'
import RegionListSearch from '../components/CRM/listAndSearch/regionList'
import CityList from '../components/CRM/listAndSearch/cityList'
import AreaList from '../components/CRM/listAndSearch/areaList'
import MarketList from '../components/CRM/listAndSearch/marketList'
import SubCategoryList from '../components/CRM/listAndSearch/subCategoryList'
import CategoryList from '../components/CRM/listAndSearch/categoryList'

import { LodgeComplaint, SuccessComplaint, ComplaintSoon, ComplaintProductList, ComplaintForm, ComplaintList, ComplaintDetail, ComplaintType, ComplaintSubType, } from '../components/complaint'
import { ClaimSoon, ClaimHome, ClaimScanProduct, ClaimDetail, ClaimList } from '../components/claim&return'
import { FixSoon } from '../components/fixService'
import { BrandingHome, BrandingRequestForm, brandRequestSuccess, FreeGifts, BrandingRequestList, BrandingRequestDetail, BrandingStatusDetail, BoardShopRequest, BrandingWarning, BrandingSuccess, ShutterPaintRequest, CounterPastingRequest } from '../components/brandingRequest'





import RegionSearchProfile from '../components/modals/innerSearchProfile/regionSearchProfile'
import CitySearchProfile from '../components/modals/innerSearchProfile/citySearchProfile'
import AreaSearchProfile from '../components/modals/innerSearchProfile/areaSearchProfile'
import MarketSearchProfile from '../components/modals/innerSearchProfile/marketSearchProfile'
import SearchedProfiles from '../components/modals/innerSearchProfile/searchedProfiles'
import FormBuilding from '../components/survey/formSubmision/formBuilding'

import GeneralSurveyList from '../components/survey/generalSurveyList'
import ProfileSurveyList from '../components/survey/profileSurveyList'
import DefaultSuvreyList from '../components/survey/defaultSuvreyList'
import ProfileForms from '../components/survey/formSubmision/profileForms'
import ProfileUpdationList from '../components/survey/profileUpdates/profileUpdationList'
import ProfileUpdate from '../components/survey/profileUpdates/profileUpdate'
import RequestType from '../components/survey/profileUpdates/updateInner/requestType'
import RequestSubType from '../components/survey/profileUpdates/updateInner/requestSubType'
import ProfileComplaintTypes from '../components/survey/profileUpdates/complaintInner/profileComTypes'
import ProfileComplaintSubType from '../components/survey/profileUpdates/complaintInner/profileComSubType'
import ProfileComplaintRequest from '../components/survey/profileUpdates/profileComplaint'

import { ContactUs, AboutUs, SettingConfig, LocationSetting, RunsNotification } from '../components/settings'
import UserDashboard from '../components/Home/userDashboard'
import { IdentityCheck, ChooseCategory, SignupForm, SignupLocation, MarketSignupLocation, GroupSignup, CategorySignup, SignupOTP } from '../components/authentication/signupProcess'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Rewards from '../components/rewards/rewards'
import Transfer from '../components/transfer/transfer'
import LoginOtp from '../components/otp/loginOtp'
import { Alerts, RetailerRunsAlertDetail, AlertHome, BrandingAlertList, RunsRequestAlertList, NewProfileAlertList, GeneralAlertList, RunsRequestAlertDetail, BrandingAlertDetail, GeneralAlertDetail, NewProfileAlertDetail, } from '../components/alert'


import { SendRuns, RunsDashboard, ConfirmSendRuns, SuccessRunsSend, CashDashboard, SendCash, ConfirmCashRuns, SuccessCashSend, RunsSearchTabs, CashRetailerSearchTabs, } from '../components/Runs'

import { CpPriceList } from '../components/cpPrice'

import { RunsLedger, CashLedger, MechanicCashLedger, RunsLedgerCustomer, CashLedgerCustomer, CashLedgerMechanicCustomer } from '../components/ledger'
import { SchemeHome } from '../components/scheme'

import {
    MechanicCashDashboard,
    SendCashRequest,
    MechanicConfifmCash, MechanicSuccessCash,
    CashSearchTabs
} from '../components/mechanic'
import LottieView from 'lottie-react-native';

import RunsCalculator from "../components/Runs/calculator/runsCalculator"

import { UserProfile, FixbroProfile, FixCategory, FixLocation, FixTypes, FixGroups, AboutApplication, ChangePortalPass, PortalOTP, SuccessPortalPass } from '../components/userProfile'
import Contacts from '../components/contacts/contacts'

import { FixGuruHome, GuruServiceList, FixChooseService, GuruServiceTypes, FixGuruModelSelection } from '../components/fixGuru'
import { SpinAndWinHome } from '../components/spinAndWin'
import { OrderHome, NewOrderHome, OrderSuccess, OrderHistoryHome, ViewOrder, CheckOffer, HistoryConfirmOrder, ViewVariety, AcceptedOffer, ReceivedOrdersList, ReceiveOrderView, ConfirmReceivedOrder, SuccessReceivedOrder, OfferHistory, OfferDetail, NewOrderItemList, NewOrderConfirm } from '../components/order'

import { NewScheme, NewSchemeConfirm, SchemeBuyingSource, NewSchemeSuccess, EasyLoadHome, EasyLoadHistory, NewEasyLoad, EasyLoadConfirm, EasyLoadSuccess, SchemeHistoryHome, SchemeHistoryViewOrder, SchemePendingOrderHome, PendingSchemeDetail, PendingSchemeConfirm, ApprovalHistoryHome, ApprovalHistoryDetail, SchemeMenu, ApprovalHistoryCustomers, SchemeHistoryCustomerWise } from "../components/order/scheme"
import { DeliverForm, DeliverySuccess, ViewDeliveryDetial } from "../components/order/scheme/delivery"
import PendingSchemeSuccess from '../components/order/scheme/schemePendingOrders/pendingSchemeSuccess'
import { BundleBuyingSource, BundleSchemes, ViewBundles, ConfirmBundles, BundleSuccess, BundleHistoryList, BundleHistoryDetail, ReceiveBundleList, ReceiveBundleDetail, ReceiveBundleConfirm, ReceiveBundleSuccess, BundleSellerHistory, BundleCustomerWise, BundleSellerHistoryDetail, BundleHistoryCustomerWise } from '../components/order/scheme/bundleScheme'
import ColorsApp from '../utils/colorsApp'
import { BundleDeliverForm, BundleViewDeliveryDetail, BundleDeliverySuccess } from '../components/order/scheme/bundleScheme/bundleDelivery'
import I18next from 'i18next'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();





function BuyersTabs() {

    return (

        <Tabs.Navigator initialRouteName={RouteKey.SCHEME_HISTORY_HOME}



            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, }) => {
                    let animated

                    if (route.name === RouteKey.SCHEME_HISTORY_HOME) {
                        animated = <MaterialCommunityIcons name="check-decagram" size={20} color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} />

                    }

                    if (route.name === RouteKey.BUNDLE_SCHEME_HISTORY_LIST) {
                        animated = <MaterialIcon name="cases" color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} size={22} />
                    }


                    return animated
                }


            })}

            tabBarOptions={{
                activeTintColor: ColorsApp.RED_LOGIN_COLOR,
                inactiveTintColor: ColorsApp.GRAY_100,
                allowFontScaling: true,
                tabStyle: { alignItems: "center", },
                style: { height: 70, borderTopWidth: 1, paddingVertical: 5 },
                showLabel: true,
                labelStyle: { fontSize: 16, fontWeight: 'bold', paddingBottom: 10 }

            }} >

            <Tabs.Screen name={RouteKey.SCHEME_HISTORY_HOME} component={SchemeHistoryHome} options={{ headerShown: true, title: I18next.t("SCHEMES") }} />
            <Tabs.Screen name={RouteKey.BUNDLE_SCHEME_HISTORY_LIST} component={BundleHistoryList} options={{ headerShown: true, title: I18next.t("BUNDLES")}} />
        </Tabs.Navigator >
    )
}

function ReceiveTabs() {

    return (

        <Tabs.Navigator initialRouteName={RouteKey.SCHEME_PENDING_ORDER_HOME}



            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, }) => {
                    let animated

                    if (route.name === RouteKey.SCHEME_PENDING_ORDER_HOME) {
                        animated = <MaterialCommunityIcons name="check-decagram" size={20} color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} />
                    }

                    if (route.name === RouteKey.BUNDLE_SCHEME_HISTORY_LIST) {
                        animated = <MaterialIcon name="cases" color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} size={22} />
                    }
                    return animated
                }
            })}
            tabBarOptions={{
                activeTintColor: ColorsApp.RED_LOGIN_COLOR,
                inactiveTintColor: ColorsApp.GRAY_100,
                allowFontScaling: true,
                tabStyle: { alignItems: "center", },
                style: { height: 70, borderTopWidth: 1, paddingVertical: 5 },
                showLabel: true,
                labelStyle: { fontSize: 16, fontWeight: 'bold', paddingBottom: 10 }

            }} >

            <Tabs.Screen name={RouteKey.SCHEME_PENDING_ORDER_HOME} component={SchemePendingOrderHome} options={{ headerShown: true, title: I18next.t("SCHEMES") }} />
            <Tabs.Screen name={RouteKey.BUNDLE_SCHEME_HISTORY_LIST} component={ReceiveBundleList} options={{ headerShown: true, title: I18next.t("BUNDLES") }} />
        </Tabs.Navigator >
    )
}

function sellerTabs() {

    return (

        <Tabs.Navigator initialRouteName={RouteKey.SCHEME_APPROVAL_HISTORY_HOME}



            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, }) => {
                    let animated

                    if (route.name === RouteKey.SCHEME_APPROVAL_HISTORY_HOME) {
                        animated = <MaterialCommunityIcons name="check-decagram" size={20} color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} />
                    }

                    if (route.name === RouteKey.BUNDLE_SELLER_HISTORY_LIST) {
                        animated = <MaterialIcon name="cases" color={focused ? ColorsApp.RED_LOGIN_COLOR : ColorsApp.GRAY_100} size={22} />
                    }
                    return animated
                }
            })}
            tabBarOptions={{
                activeTintColor: ColorsApp.RED_LOGIN_COLOR,
                inactiveTintColor: ColorsApp.GRAY_100,
                allowFontScaling: true,
                tabStyle: { alignItems: "center", },
                style: { height: 70, borderTopWidth: 1, paddingVertical: 5 },
                showLabel: true,
                labelStyle: { fontSize: 16, fontWeight: 'bold', paddingBottom: 10 }

            }} >

            <Tabs.Screen name={RouteKey.SCHEME_APPROVAL_HISTORY_HOME} component={ApprovalHistoryHome} options={{ headerShown: true, title: I18next.t("SCHEMES") }} />
            <Tabs.Screen name={RouteKey.BUNDLE_SELLER_HISTORY_LIST} component={BundleSellerHistory} options={{ headerShown: true, title: I18next.t("BUNDLES") }} />
        </Tabs.Navigator >
    )
}



function TabsNavigator() {

    const animatedValue = new Animated.Value(0)

    function animateIcon() {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        })
            .start()
    }

    return (

        <Tabs.Navigator initialRouteName={RouteKey.HOME}
            // <Tabs.Navigator initialRouteName={RouteKey.ORDER_HOME}


            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, }) => {
                    let animated

                    if (route.name === RouteKey.HOME) {
                        animateIcon()
                        animated = focused
                            ? <LottieView source={require('../assets/animation/footerTabs/HomeAnimation.json')} progress={animatedValue}
                                style={{ height: 35, width: 35 }}
                            />
                            : <Image source={require('../assets/appImages/footerIcons/home.png')} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    }

                    if (route.name === RouteKey.REWARDS) {
                        animated = focused
                            ? <LottieView source={require('../assets/animation/footerTabs/Reward.json')} progress={animatedValue} style={{ height: 35, width: 35 }} />
                            : <Image source={require('../assets/appImages/footerIcons/rewards.png')} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    }
                    if (route.name === RouteKey.USER_PROFILE) {
                        animated = focused
                            ? <LottieView source={require('../assets/animation/footerTabs/Contacts.json')} progress={animatedValue} style={{ height: 40, width: 40 }} />
                            : <Image source={require('../assets/appImages/footerIcons/user.png')} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    }

                    if (route.name === RouteKey.ALERT_HOME) {
                        animated = focused
                            ? <LottieView source={require('../assets/animation/footerTabs/Notify.json')} progress={animatedValue} style={{ height: 40, width: 40 }} />
                            : <Image source={require('../assets/appImages/footerIcons/alerts.png')} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    }


                    if (route.name === RouteKey.ORDER_HOME) {
                        animated = focused
                            ? <LottieView source={require('../assets/animation/footerTabs/Carts.json')} progress={animatedValue} style={{ height: 40, width: 40 }} />
                            : <Image source={require('../assets/appImages/footerIcons/purchase.png')} style={{ height: 35, width: 35 }} resizeMode="contain" />
                    }

                    return animated
                    // return <LottieView source={require('../assets/animation/footerTabs/HomeAnimation.json')}   />

                },


            })}

            tabBarOptions={{
                activeTintColor: "#FF7700",
                inactiveTintColor: "black",
                allowFontScaling: true,
                tabStyle: { alignItems: "center", },
                style: { height: 70, paddingBottom: 5, borderTopWidth: 1, },
                showLabel: false
            }} >
            <Tabs.Screen name={RouteKey.HOME} component={Home} />
            <Tabs.Screen name={RouteKey.REWARDS} component={Rewards} />
            <Tabs.Screen name={RouteKey.USER_PROFILE} component={UserProfile} />
            <Tabs.Screen name={RouteKey.ALERT_HOME} component={AlertHome} />
            <Tabs.Screen name={RouteKey.ORDER_HOME} component={OrderHome} />
        </Tabs.Navigator>
    )
}

function DrawerNavigator() {
    return (
        // width: Dimensions.get('window').width/2 
        <Drawer.Navigator drawerStyle={{}} initialRouteName={RouteKey.HOME} drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name={RouteKey.HOME} component={Home} />
            <Drawer.Screen name={RouteKey.USER_DASHBOARD} component={UserDashboard} options={{ headerShown: true, title: "Home" }} />
            {/* <Drawer.Screen component={CRMCategory} name={RouteKey.CRM_CATEGORY} /> */}
            <Drawer.Screen component={ContactUs} name={RouteKey.CONTACT_US} />
            <Drawer.Screen component={AboutUs} name={RouteKey.ABOUT_US} />
            <Drawer.Screen component={SurveySelection} name={RouteKey.SURVEY_SELECTION} />
            <Drawer.Screen component={SettingConfig} name={RouteKey.SETTINGS_CONFIG} options={{ headerShown: true, title: "Settings" }} />
            <Drawer.Screen component={RunsNotification} name={RouteKey.RUNS_NOTIFICATION} options={{ headerShown: true, title: "Runs Notification" }} />
        </Drawer.Navigator>
    )
}

function AuthNavigator() {
    return (
        <Stack.Navigator>

            {/* <Stack.Screen name={"testFormSurvey"} component={SurveyJsTemplate} options={{ headerShown: true, }} />
            <Stack.Screen name={RouteKey.FORM_BUILDING} component={FormBuilding} options={{ headerShown: true, }} /> */}
            {/* <Stack.Screen name={"test"} component={TestForm} options={{ headerShown: false, }} /> */}


            <Stack.Screen name={RouteKey.SPLASH} component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.LOGIN} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.USER_WAITING} component={UserWaiting} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.HOME} component={TabsNavigator} options={{ headerShown: false, }} />
            <Stack.Screen name={RouteKey.CHOOSE_CATEGORY} component={ChooseCategory} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.IDENTITY_CHECK} component={IdentityCheck} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SIGNUP_FORM} component={SignupForm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SIGNUP_LOCATION} component={SignupLocation} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.MARKET_SIGNUP} component={MarketSignupLocation} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.GROUP_CATEGORY_SIGNUP} component={GroupSignup} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CATEGORY_SIGNUP} component={CategorySignup} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SIGNUP_OTP} component={SignupOTP} options={{ headerShown: false }} />




            <Stack.Screen name={RouteKey.LOGIN_OTP} component={LoginOtp} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RUNS_ENCASHMENT} component={RunsNavigator} options={{ headerShown: false }} />
            {/* <Stack.Screen name={RouteKey.MECHANIC_CASH_DASHBOARD} component={CashNavigator} options={{ headerShown: false }} /> */}



            <Stack.Screen name={RouteKey.RUNS_LEDGER} options={{ headerShown: false, title: "Runs Ledger" }} component={RunsLedger} />
            <Stack.Screen name={RouteKey.CASH_LEDGER} options={{ headerShown: false, title: "Cash Ledger" }} component={CashLedger} />
            <Stack.Screen name={RouteKey.MECHANIC_CASH_LEDGER} options={{ headerShown: false, title: "Cash Ledger" }} component={MechanicCashLedger} />
            <Stack.Screen name={RouteKey.RUNS_LEDGER_CUSTOMER} options={{ headerShown: false, title: "Runs Ledger" }} component={RunsLedgerCustomer} />
            <Stack.Screen name={RouteKey.CASH_LEDGER_CUSTOMER} options={{ headerShown: false, title: "Cash Ledger" }} component={CashLedgerCustomer} />
            <Stack.Screen name={RouteKey.MECHANIC_CASH_LEDGER_CUSTOMER} options={{ headerShown: false, title: "Cash Ledger" }} component={CashLedgerMechanicCustomer} />


            <Stack.Screen name={RouteKey.SEND_RUNS} component={SendRuns} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RUNS_SEARCH_TABS} component={RunsSearchTabs} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CASH_RETAILER_SEARCH_TABS} component={CashRetailerSearchTabs} options={{ headerShown: false }} />


            {/* <Stack.Screen name={RouteKey.SEARCH_BY_HISTORY_RUNS} component={RunsHistory} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SEARCH_BY_SCANQR_RUNS} component={RunsSearchByQR} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SEARCH_BY_CONTACT_RUNS} component={RunsContactList} options={{ headerShown: false }} /> */}



            <Stack.Screen name={RouteKey.CONFIRM_SEND_RUNS} component={ConfirmSendRuns} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SUCCESS_RUNS_SEND} component={SuccessRunsSend} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.SEND_CASH} component={SendCash} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CONFIRM_SEND_CASH} component={ConfirmCashRuns} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SUCCESS_CASH_SEND} component={SuccessCashSend} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.MECHANIC_SEND_CASH} component={SendCashRequest} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.MECHANIC_SEARCH_TABS} component={CashSearchTabs} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CONFIRM_MECHANIC_CASH} component={MechanicConfifmCash} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SUCCESS_MECHANIC_CASH} component={MechanicSuccessCash} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RUNS_CALCULATOR} component={RunsCalculator} options={{ title: "Runs Calculator", headerShown: false }} />
            <Stack.Screen name={RouteKey.CONTACT_LIST} component={Contacts} options={{ title: "Contact List", headerShown: false }} />
            <Stack.Screen name={RouteKey.LAITH_MECHANIC_QR_SCAN} component={LaithMechanicQR} options={{ title: "Scan QR", headerShown: false }} />
            <Stack.Screen name={RouteKey.SCANABLE_ITEM_LIST} component={ScanableItemList} options={{ title: "Scanable QR List", headerShown: false }} />

            <Stack.Screen name={RouteKey.COMPLAINT_SOON} component={ComplaintSoon} options={{ title: "Coming Soon", headerShown: false }} />

            <Stack.Screen name={RouteKey.FIX_SOON} component={FixSoon} options={{ title: "Coming Soon", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_NAVIGATION} component={BrandingNavigation} options={{ title: "Coming Soon", headerShown: false }} />
            <Stack.Screen name={RouteKey.FREE_GIFTS} component={FreeGifts} options={{ title: "Free Gifts", headerShown: false }} />
            <Stack.Screen name={RouteKey.ALERT_HOME} component={AlertHome} options={{ title: "Free Gifts", headerShown: false }} />


            <Stack.Screen name={RouteKey.FIX_BRO_PROFILE} component={FixServiceNavigation} options={{ title: "Profile", headerShown: false }} />
            <Stack.Screen name={RouteKey.ABOUT_APPLICATION} component={AboutApplication} options={{ title: "About", headerShown: false }} />
            <Stack.Screen name={RouteKey.FREE_CASH} component={GetFreeCash} options={{ title: "Get Free Cash", headerShown: false }} />

            {/* old down */}

            <Stack.Screen name={RouteKey.FORM_BUILDING} component={FormBuilding} options={{ headerShown: true, title: "Survey Form" }} />
            <Stack.Screen name={RouteKey.PROFILE_FORMS} component={ProfileForms} options={{ headerShown: true, title: "Survey Form" }} />
            <Stack.Screen name={RouteKey.GENERAL_SURVEY_LIST} component={GeneralSurveyList} options={{ title: "General Survey" }} />
            <Stack.Screen name={RouteKey.PROFILE_SURVEY_LIST} component={ProfileSurveyList} options={{ title: "Profile Survey" }} />
            <Stack.Screen name={RouteKey.PROFILE_UPDATION_LIST} component={ProfileUpdationList} options={{ title: "Profile Actions" }} />
            <Stack.Screen name={RouteKey.PROFILE_UPDATE_REQUEST} component={ProfileUpdate} options={{ title: "Update Request" }} />
            <Stack.Screen name={RouteKey.PROFILE_REQUEST_TYPE} component={RequestType} options={{ title: "Request Type" }} />
            <Stack.Screen name={RouteKey.PROFILE_REQUEST_SUB_TYPE} component={RequestSubType} options={{ title: "Request Sub-Type" }} />

            <Stack.Screen name={RouteKey.PROFILE_COMPLAINT_TYPES} component={ProfileComplaintTypes} options={{ title: "Complaint Type" }} />
            <Stack.Screen name={RouteKey.PROFILE_COMPLAINT_SUB_TYPE} component={ProfileComplaintSubType} options={{ title: "Complaint Sub-Type" }} />
            <Stack.Screen name={RouteKey.PROFILE_COMPLAINT_REQUEST} component={ProfileComplaintRequest} options={{ title: "Complaint" }} />


            <Stack.Screen name={RouteKey.DEFAULT_SURVEY_LIST} component={DefaultSuvreyList} options={{ title: "Default Survey" }} />
            <Stack.Screen name={RouteKey.CP_PRICE_LIST} component={CpPriceList} options={{ title: "CP-Price", headerShown: false }} />

            <Stack.Screen name={RouteKey.COMPLAINT_REQUEST_HOME} component={ComplaintNavigation} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.CLAIM_NAVIGATION} component={ClaimNavigation} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.SCHEME_NAVIGATOR} component={SchemeNavigator} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.ADD_NEW_PROFILE} component={AddNewProfile} options={{ gestureEnabled: false }} />
            <Stack.Screen name={RouteKey.FORGET_PASSWORD} component={ForgetPassword} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.OTP} component={OTP} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SURVEY_LIST} component={SurveyList} />
            <Stack.Screen name={RouteKey.QR_SCREEN} component={QR} />
            <Stack.Screen name={RouteKey.MAP} component={MAP} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.REGION_LIST_SEARCH} component={RegionListSearch} />
            <Stack.Screen name={RouteKey.CITY_LIST_SEARCH} component={CityList} />
            <Stack.Screen name={RouteKey.AREA_LIST_SEARCH} component={AreaList} />
            <Stack.Screen name={RouteKey.MARKET_LIST_SEARCH} component={MarketList} />
            <Stack.Screen name={RouteKey.CATEGORY_LIST_SEARCH} component={CategoryList} />
            <Stack.Screen name={RouteKey.SUB_CATEGORY_SEARCH} component={SubCategoryList} />

            {/* search profiles */}
            <Stack.Screen name={RouteKey.SEARCH_REGION_FILTER} component={RegionSearchProfile} />
            <Stack.Screen name={RouteKey.SEARCH_CITY_FILTER} component={CitySearchProfile} />
            <Stack.Screen name={RouteKey.SEARCH_AREA_FILTER} component={AreaSearchProfile} />
            <Stack.Screen name={RouteKey.SEARCH_MARKET_FILTER} component={MarketSearchProfile} />
            <Stack.Screen name={RouteKey.SEARCHED_PROFILES} component={SearchedProfiles} />
            <Stack.Screen name={RouteKey.PROFILE_DETAIL} component={ProfileDetail} />



            {/* settings */}
            <Stack.Screen name={RouteKey.LOCATION_SETTING_FILTER} component={LocationSetting} options={{ headerShown: true, title: "Location" }} />



            {/* alert screens */}
            <Stack.Screen name={RouteKey.RETAILER_RUNS_ALERT_DETAIL} component={RetailerRunsAlertDetail} options={{ headerShown: false }} />



            <Stack.Screen name={RouteKey.BRANDING_ALERT_LIST} component={BrandingAlertList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.GENERAL_ALERT_LIST} component={GeneralAlertList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_PROFILE_ALERT_LIST} component={NewProfileAlertList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RUN_TRANSFER_ALERT_LIST} component={RunsRequestAlertList} options={{ headerShown: false }} />



            <Stack.Screen name={RouteKey.BRANDING_ALERT_DETAIL} component={BrandingAlertDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.GENERAL_ALERT_DETAIL} component={GeneralAlertDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_PROFILE_ALERT_DETAIL} component={NewProfileAlertDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RUN_TRANSFER_ALERT_DETAIL} component={RunsRequestAlertDetail} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.CHANGE_PORTAL_PASSWORD} component={ChangePortalPass} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.PORTAL_PASS_OTP} component={PortalOTP} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.PORTAL_PASS_SUCCESS} component={SuccessPortalPass} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.FIX_GURU_NAVIGATION} component={FixGuruNavigation} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.SPIN_AND_WIN_HOME} component={SpinAndWinHome} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.NEW_ORDER_HOME} component={NewOrderHome} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_ORDER_ITEM_LIST} component={NewOrderItemList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_ORDER_CONFIRM} component={NewOrderConfirm} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.ORDER_SUCCESS} component={OrderSuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.ORDER_HISTORY_HOME} component={OrderHistoryHome} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.VIEW_HISTORY_ORDER} component={ViewOrder} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CHECK_HISTORY_ORDER_OFFER} component={CheckOffer} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.HISTORY_CONFIRM_ORDER} component={HistoryConfirmOrder} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.HISTORY_VIEW_VARIETY} component={ViewVariety} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.HISTORY_ACCEPTED_OFFER} component={AcceptedOffer} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RECEIVED_ORDERS_LIST} component={ReceivedOrdersList} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.RECEIVED_ORDER_VIEW} component={ReceiveOrderView} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CONFIRM_RECEIVED_ORDER} component={ConfirmReceivedOrder} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SUCCESS_RECEIVED_ORDER} component={SuccessReceivedOrder} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.OFFER_HISTORY_HOME} component={OfferHistory} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.OFFER_DETAIL} component={OfferDetail} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.NEW_SCHEME} component={NewScheme} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_BUYING_SOURCES} component={SchemeBuyingSource} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_SCHEME_CONFIRM} component={NewSchemeConfirm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_SCHEME_SUCCESS} component={NewSchemeSuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.EASY_LOAD_HOME} component={EasyLoadHome} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.EASY_LOAD_HISTORY} component={EasyLoadHistory} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.NEW_EASY_LOAD} component={NewEasyLoad} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.EASY_LOAD_CONFIRM} component={EasyLoadConfirm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.EASY_LOAD_SUCCESS} component={EasyLoadSuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_MENU} component={SchemeMenu} options={{ headerShown: false }} />
            {/* <Stack.Screen name={RouteKey.SCHEME_HISTORY_HOME} component={SchemeHistoryHome} options={{ headerShown: false }} /> */}
            <Stack.Screen name={RouteKey.SCHEME_HISTORY_HOME} component={BuyersTabs} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SCHEME_HISTORY_DETAIL} component={BundleHistoryDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RECEIVE_BUNDLE_DETAIL} component={ReceiveBundleDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RECEIVE_BUNDLE_CONFIRM} component={ReceiveBundleConfirm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.RECEIVE_BUNDLE_SUCCESS} component={ReceiveBundleSuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_HISTORY_VIEW_ORDER} component={SchemeHistoryViewOrder} options={{ headerShown: false }} />
            {/* <Stack.Screen name={RouteKey.SCHEME_PENDING_ORDER_HOME} component={SchemePendingOrderHome} options={{ headerShown: false }} /> */}
            <Stack.Screen name={RouteKey.SCHEME_PENDING_ORDER_HOME} component={ReceiveTabs} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_PENDING_ORDER_DETAIL} component={PendingSchemeDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_PENDING_ORDER_CONFIRM} component={PendingSchemeConfirm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_PENDING_ORDER_SUCCESS} component={PendingSchemeSuccess} options={{ headerShown: false }} />
            {/* <Stack.Screen name={RouteKey.SCHEME_APPROVAL_HISTORY_HOME} component={ApprovalHistoryHome } options={{ headerShown: false }} /> */}
            <Stack.Screen name={RouteKey.SCHEME_APPROVAL_HISTORY_HOME} component={sellerTabs} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_APPROVAL_CUSTOMER_WISE} component={ApprovalHistoryCustomers} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_HISTORY_CUSTOMER_WISE} component={SchemeHistoryCustomerWise} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SELLER_CUSTOMER_WISE} component={BundleCustomerWise} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SELLER_HISTORY_DETAIL} component={BundleSellerHistoryDetail} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SCHEME_HISTORY_CUSTOMER_WISE} component={BundleHistoryCustomerWise} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SCHEME_APPROVAL_HISTORY_DETAIL} component={ApprovalHistoryDetail} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.DELIVERY_FORM} component={DeliverForm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.DELIVERY_SUCCESS} component={DeliverySuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.VIEW_DELIVERY_DETAIL} component={ViewDeliveryDetial} options={{ headerShown: false }} />

            {/* bundle down */}
            <Stack.Screen name={RouteKey.BUNDLE_BUYING_SOURCE} component={BundleBuyingSource} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SCHEMES} component={BundleSchemes} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.VIEW_BUNDLES} component={ViewBundles} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.CONFIRM_BUNDLES} component={ConfirmBundles} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_SUCCESS} component={BundleSuccess} options={{ headerShown: false }} />


            <Stack.Screen name={RouteKey.BUNDLE_DELIVERY_FORM} component={BundleDeliverForm} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_DELIVERY_SUCCESS} component={BundleDeliverySuccess} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.BUNDLE_DELIVERY_DETAIL} component={BundleViewDeliveryDetail} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}

function RunsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteKey.RUNS_ENCASHMENT} options={{ headerShown: false, title: "Runs Encashment" }} component={RunsDashboard} />
            <Stack.Screen name={RouteKey.CASH_DASHBOARD} options={{ headerShown: false, title: "Encashment" }} component={CashDashboard} />
        </Stack.Navigator>
    )
}

function CashNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteKey.MECHANIC_CASH_DASHBOARD} component={MechanicCashDashboard} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}


function SchemeNavigator() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name={RouteKey.SCHEME_HOME} component={SchemeHome} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
function ClaimNavigation() {
    return (
        <Stack.Navigator  >
            <Stack.Screen name={RouteKey.CLAIM_HOME} component={ClaimHome} options={{ title: "Claim Home", headerShown: false }} />
            <Stack.Screen name={RouteKey.CLAIM_SOON} component={ClaimSoon} options={{ title: "Coming Soon", headerShown: false }} />
            <Stack.Screen name={RouteKey.CLAIM_SCAN_PRODUCT} component={ClaimScanProduct} options={{ title: "Claim Scan", headerShown: false }} />

            <Stack.Screen name={RouteKey.CLAIM_LIST} component={ClaimList} options={{ title: "Claim List", headerShown: false }} />
            <Stack.Screen name={RouteKey.CLAIM_DETAIL} component={ClaimDetail} options={{ title: "Claim Detail", headerShown: false }} />
        </Stack.Navigator>
    )
}


function ComplaintNavigation() {
    return (
        // <Stack.Navigator initialRouteName={RouteKey.COMPLAINT_LIST}>
        <Stack.Navigator >
            <Stack.Screen name={RouteKey.COMPLAINT_LIST} component={ComplaintList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.COMPLAINT_PRODUCT_LIST} component={ComplaintProductList} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.COMPLAINT_FORM} component={ComplaintForm} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.LODGE_COMPLAINT} component={LodgeComplaint} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.SUCCESS_COMPLAINT} component={SuccessComplaint} options={{ headerShown: false }} />



            <Stack.Screen name={RouteKey.COMPLAINT_DETAIL} component={ComplaintDetail} options={{ headerShown: false }} />

            <Stack.Screen name={RouteKey.COMPLAINT_TYPE} component={ComplaintType} options={{ headerShown: false }} />
            <Stack.Screen name={RouteKey.COMPLAINT_SUB_TYPE} component={ComplaintSubType} options={{ headerShown: false }} />



        </Stack.Navigator>
    )
}

function FixServiceNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteKey.FIX_BRO_PROFILE} component={FixbroProfile} options={{ title: "Profile", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_MAP_LOCATION} component={FixLocation} options={{ title: "Map Location", headerShown: false }} />

            <Stack.Screen name={RouteKey.FIX_CATEGORY} component={FixCategory} options={{ title: "Category", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_TYPES} component={FixTypes} options={{ title: "Types", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_GROUPS} component={FixGroups} options={{ title: "Groups", headerShown: false }} />


        </Stack.Navigator>
    )
}

function BrandingNavigation() {
    return (
        // <Stack.Navigator initialRouteName={RouteKey.BRANDING_REQUEST_LIST}>
        <Stack.Navigator  >
            <Stack.Screen name={RouteKey.BRANDING_REQUEST_HOME} component={BrandingHome} options={{ title: "Branding home", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_REQUEST_LIST} component={BrandingRequestList} options={{ title: "Branding List", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_STATUS_DETAIL} component={BrandingStatusDetail} options={{ title: "Branding status detail", headerShown: false }} />
            <Stack.Screen name={RouteKey.BOARD_SHOP_REQUEST} component={BoardShopRequest} options={{ title: "Board Shop Request", headerShown: false }} />

            <Stack.Screen name={RouteKey.BRANDING_REQUEST_FORM} component={BrandingRequestForm} options={{ title: "Branding Request Form", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRAND_REQUEST_SUCCESS} component={brandRequestSuccess} options={{ title: "Branding Success", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_REQUEST_DETAIL} component={BrandingRequestDetail} options={{ title: "Branding Detail", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_WARNING} component={BrandingWarning} options={{ title: "Branding Warning", headerShown: false }} />
            <Stack.Screen name={RouteKey.BRANDING_SUCCESS} component={BrandingSuccess} options={{ title: "Branding Success", headerShown: false }} />
            <Stack.Screen name={RouteKey.SHUTTER_PAINT} component={ShutterPaintRequest} options={{ title: "Sutter Paint", headerShown: false }} />
            <Stack.Screen name={RouteKey.COUNTER_PASTING_REQUEST} component={CounterPastingRequest} options={{ title: "Counter Pasting", headerShown: false }} />
        </Stack.Navigator>
    )
}




function FixGuruNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={RouteKey.FIX_GURU_HOME} component={FixGuruHome} options={{ title: "fix guru home", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_GURU_SERVICE_LIST} component={GuruServiceList} options={{ title: "Service List", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_GURU_CHOOSE_SERVICE} component={FixChooseService} options={{ title: "Choose Service", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_GURU_TYPES_CHOOSE_SERVICE} component={GuruServiceTypes} options={{ title: "Choose Types", headerShown: false }} />
            <Stack.Screen name={RouteKey.FIX_GURU_TYPES_MODELS} component={FixGuruModelSelection} options={{ title: "Choose Model", headerShown: false }} />

        </Stack.Navigator>
    )
}




const mapStateToProps = ({ user }) => ({
    data: user
})

const AppStarter = connect(mapStateToProps)(AuthNavigator)
export default Routes = () => {
    return (<AppStarter />)
}


// const DrawerCustom = () => {
//     return (
//         <Router>
//             <Scene>
//                 {/* <Drawer key={RouteKey.DRAWER} drawerIcon={<Icon name="menu" color="orange" style={{ fontSize: 20 }} />}
//                     type="reset" contentComponent={DrawerContent} hideNavBar drawer>

//                     <Scene component={AddNewProfile} key={RouteKey.ADD_NEW_PROFILE} title="New Profile" />


//                     <Scene component={Home} key={RouteKey.HOME} title="Home" />
//                     <Scene component={Login} key={RouteKey.LOGIN} />
//                     <Scene component={CRMCategory} key={RouteKey.CRM_CATEGORY} title="CRM PROFILES" />
//                     <Scene component={ContactUs} key={RouteKey.CONTACT_US} title="Contact us" />
//                     <Scene component={AboutUs} key={RouteKey.ABOUT_US} title="About us" />

//                     <Scene component={QR} key={RouteKey.QR_SCREEN} title="QR Scan" />
//                     <Scene component={MAP} key={RouteKey.MAP} />
//                     <Scene component={SurveyList} key={RouteKey.SURVEY_LIST} title="Profiles" />
//                     <Scene component={SurveyDetail} key={RouteKey.PROFILE_DETAIL} title="Profile Detail" />
//                     <Scene component={SurveySelection} key={RouteKey.SURVEY_SELECTION} title="Survey" />
//                     <Scene component={AddNewProfile} key={RouteKey.ADD_NEW_PROFILE} title="New Profile" />

//                 </Drawer> */}
//             </Scene>

//         </Router>
//     )
// }







// class RoutesLogic extends Component {



//     render() {
//         if (this.props.data.authToken == null) {
//             // if (this.props.data.authToken !== null) {
//             return (
//                 <DrawerCustom />
//             )
//         }
//         return (
//             <Router>
//                 <Scene>
//                     <Scene type="reset" component={Splash} key={RouteKey.SPLASH} hideNavBar />
//                     <Scene type="reset" component={Login} key={RouteKey.LOGIN} hideNavBar />
//                     <Scene type="reset" component={DrawerCustom} key={RouteKey.DRAWER} hideNavBar />
//                     <Scene component={ForgetPassword} key={RouteKey.FORGET_PASSWORD} />
//                 </Scene>

//             </Router>
//         )
//     }
// }

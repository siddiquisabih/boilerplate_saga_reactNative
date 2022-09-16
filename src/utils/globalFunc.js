import { Platform, Alert, Linking, PermissionsAndroid } from "react-native";
import moment from "moment";
import { getUniqueId, getVersion, isEmulator, } from "react-native-device-info";
import DataHandler from "../services/DataHandler";
import {  DISCARD_WARNING } from "./appConstant";
export const TIME1 = "HH:mm";
let newInstance = null;

import Geolocation from "react-native-geolocation-service";
import RNLocation from "react-native-location";
import RNOtpVerify from "react-native-otp-verify";
 

class Util {
  keyExtractor = (item, index) => index.toString();
  isPlatformAndroid() {
    return Platform.OS === "android";
  }
  isValidURL(url) {
    const re = /^(http|https|fttp):\/\/|[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/;
    return re.test(url);
  }
  isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  matchPassword(password) {
    var match = password.match(
      /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~])[\w\d!"#$%&\'()*+,-.\/:;<=>?@[\]^_`{|}~]{8,40}$/
    );
    return match;
  }

  isPasswordValid(password) {
    return password.length > 7;
  }
  isValidName(name) {
    return /^[a-zA-Z '.-]*$/.test(name);
  }
  isValidQuantity(quantity) {
    return quantity > 0;
  }
  getValidImage(image) {
    if (typeof image === "string" && this.isValidURL(image)) {
      return { uri: image };
    }
    // if (typeof image === "string" && !this.isValidURL(image)) {
    //   return require(image);
    // }
    return image;
  }

  DialogAlert(message, title = "Error") {
    Alert.alert(
      title,
      message,
      [
        {
          text: "OK",
          onPress: () =>
            newInstance &&
            newInstance.state &&
            newInstance.state.loading &&
            newInstance.setState({ loading: false })
        }
      ],
      { cancelable: true }
    );
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  isRequiredMessage(field) {
    return `${this.capitalizeFirstLetter(field)} is required`;
  }

  isInvalidMessage(field) {
    return `Invalid ${this.capitalizeFirstLetter(field)}`;
  }

  getFormattedDateTime = (date, format) => {
    if (date) return moment(date).format(format);
    return "";
  };

  getDateObjectFromString = (date, format) => {
    if (date) return moment(date, format).toDate();
    return "";
  };

  showLoader = (instance, loadingFor = "") => {
    if (!instance.state.loading) {
      newInstance = instance;
      instance.setState({
        loading: true,
        loadingFor
      });
    }
  };

  hideLoader = (instance, callback) => {
    if (instance.state.loading) {
      instance.setState(
        {
          loading: false,
          loadingFor: ""
        },
        callback
      );
    }
  };

  getCurrentUserAccessToken() {
    // return "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRlNmNjYTRiMjgzYmI4ZjNlNDIzMDQ2MmMwMjE2YzM3NmE1MTJhMThkMTZiMWI2NTUwZDMwNWRhMDM0MGRmMWU5ODM4NjFmMWU0OWRiYjNmIn0.eyJhdWQiOiIxIiwianRpIjoiNGU2Y2NhNGIyODNiYjhmM2U0MjMwNDYyYzAyMTZjMzc2YTUxMmExOGQxNmIxYjY1NTBkMzA1ZGEwMzQwZGYxZTk4Mzg2MWYxZTQ5ZGJiM2YiLCJpYXQiOjE1NzMwNTcxMTAsIm5iZiI6MTU3MzA1NzExMCwiZXhwIjoxNjA0Njc5NTEwLCJzdWIiOiI3YzdlZmQ2OC0xN2NlLTRmZDYtODk2OC02ZjVkMDQ3ZjcwZmUiLCJzY29wZXMiOltdfQ.p53sUtmAwFF6UwK5IDsK1FK2kIhn9tLYWFqeeMidwU6USkKUgZw38IvTQhK0ST0avQzPnmq6czzVbESP8gHO-NHY4OFebEIF5RJdCBMf42yVNU_rmFOiJSexLjavQ9TYt11cifEZIMwIzVCCM_OQ9H7nkJF46kFDA9j0DFwCAcEWJ93BDGZuvf1dC83M_IO-u15CBHE63MObDjrZHlbkqrakyPVC7WsMXFfEoE6r6tGZzwMGUj64sNceFSv_OqOvqT1SqoCWUX9p3RztZN60HbrHWnnsFgDQnOCx6eBFOnpoFKdoaXQBzH4NXIb4v_zfV1eWCUvd3E6ExUM45dTIXnA8l5Sh16gSBLdVr3lZvTX__IZAdFwwQ7vfNuhU14uuX78rYvFUthLwzpBpIRqCSrGwDJGsrGSelPgkzXaN05WXaGjASCaj8X28GbHJK37XJks83vFavZqh7kB1jse9bI9ucmZuTJu7F06pDLYGweyWt33aIZMz6ErAZH_VLm3bDWwqCkJpG5YTRRGWqBRz1ko0EXY_mq7ruiqsgI5vf_am4x_XzZ6h5r8YQnm5lbAPFNYoYb1LDtk6h-BQSGMFdV6eDEI_Sx3IOz9Slaykr-e5mdO2T09EeUWxyW5SZAkRDUvv3Qg8ViwdNiYXi7oY6nC3zvE0FFbYC1ENJp16hnY";
    return DataHandler.getStore().getState().user.access_token;
  }

  getRefreshToken() {
    return DataHandler.getStore().getState().user.refresh_token;
  }

  userIsServiceProvider() {
    return (
      DataHandler.getStore().getState().user.data.user_type ===
      "service provider"
    );
  }
  getDay(date) {
    var newDate = moment(date);
    return newDate.day();
  }
  getCurrentDate() {
    var currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    var formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : currentDate.getMonth() + 1
      }-${("0" + currentDate.getDate()).slice(-2)}`;
    return formatDate;
  }
  getErrorText(error) {
    if (error instanceof Array) {
      if (error.length > 0) return error[0];
    } else {
      return error;
    }
    return "";
  }

  discardAlert(onYesPress) {
    Alert.alert(
      "Discard?",
      DISCARD_WARNING,
      [{ text: "Yes", onPress: onYesPress }, { text: "No", style: "cancel" }],

      { cancelable: true }
    );
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  openLinkInBrowser(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  generateGetParameter(obj) {
    let final = "?";
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  async getCoordinates() {
    return new Promise(async resolve => {
      try {
        let granted = undefined;
        if (this.isPlatformAndroid()) {
          granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Access Required",
              message: "Crown One needs to Access your location",
              buttonPositive: "Allow"
            }
          );
        } else {
          granted = await Geolocation.requestAuthorization("always");
        }
        console.log(granted, "granted");
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position => {
              const initialPosition = position.coords;
              var { latitude, longitude, accuracy } = initialPosition;
              console.log(latitude, longitude, initialPosition);
              resolve({ isError: false, latitude, longitude, accuracy, message: "Success" });
            },
            error => {
              console.log(error.message, "error.message");
              resolve({ isError: true, message: "Turn on location and try again" });
            },
            { enableHighAccuracy: true, timeout: 50000, maximumAge: 100, distanceFilter: 1 }
          );
        }

        else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          Geolocation.getCurrentPosition(
            position => {
              const initialPosition = position.coords;
              var { latitude, longitude, accuracy } = initialPosition;
              console.log(latitude, longitude, initialPosition);
              resolve({ isError: false, latitude, longitude, accuracy, message: "Success" });
            },
            error => {
              console.log(error.message, "error.message");
              resolve({
                isError: true,
                message: "Turn on location and try again"
              });
            },
            { enableHighAccuracy: true, timeout: 50000, maximumAge: 100, distanceFilter: 1 }
          );
        }
        else {
          resolve({
            isError: true,
            message: "Allow Location in application settings"
          });
        }
      } catch (err) {
        resolve({ isError: true, message: err });
      }
    });

    // try {
    //   // let granted = undefined;
    //   // if (this.isPlatformAndroid()) {
    //   //   granted = await PermissionsAndroid.request(
    //   //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //   //   );
    //   // } else {
    //   //   navigator.geolocation.requestAuthorization();
    //   // }
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
    //     'title': 'Location Access Required',
    //     'message': 'Crown Team needs to Access your location',
    //     'buttonPositive': "Allow"
    //   }
    //   )
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {

    //     Geolocation.getCurrentPosition(
    //       position => {
    //         const initialPosition = position.coords
    //         var { latitude, longitude } = initialPosition
    //         console.log(latitude, longitude)
    //         resolve({ isError: false, latitude, longitude, message: "Success" })
    //       },
    //       error => {
    //         console.log(error.message, 'error.message')
    //         resolve({ isError: true, message: "Turn on location and try again" })
    //       },
    //       { enableHighAccuracy: true, timeout: 50000, maximumAge: 3600000 }
    //     )
    //   } else {
    //     resolve({ isError: true, message: "Allow Location in application settings" })
    //   }
    // } catch (err) {
    //   resolve({ isError: true, message: err })
    // }

    // /* eslint-disable */
    // const self = this;
    // return new Promise(async function (resolve, reject) {
    //   let granted = undefined;
    //   if (self.isPlatformAndroid()) {
    // granted = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    // );
    //   } else {
    //     navigator.geolocation.requestAuthorization();
    //   }

    //   if (
    //     !self.isPlatformAndroid() ||
    //     (self.isPlatformAndroid() &&
    //       granted === PermissionsAndroid.RESULTS.GRANTED)
    //   ) {
    //     navigator.geolocation.getCurrentPosition((geo_success, error) => {
    //       if (geo_success) {
    //         const { latitude, longitude } = geo_success.coords;
    //         alert(latitude)
    //         resolve({ latitude, longitude });
    //       } else {
    //         resolve({ error: "Android permission required" });
    //       }
    //     })
    //   }
    // });

    // /* eslint-enable */
  }

  convertStringToAbbreviation(longName) {
    var initials = longName.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return initials;
  }

  thousandSeprator = x => {
    x += "";
    x = x.split(".");
    var x1 = x[0];
    var x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

  removeThousandSeprator = x => {
    x.toString().match(/,(?=[\d,]*\.\d{2}\b)/);
    return x.replace(/,/g, "");
  };

  addDashInPhoneNumber(number) {
    if (number.length >= 4) {
      var firstHalf = number.slice(0, 4);
      var secondHalf = number.slice(4);
      return firstHalf + "-" + secondHalf;
    }
    return number;
  }

  removeDashFromPhoneNumber(number) {
    var removeDash = number.replace("-", "");
    return removeDash;
  }

  async getDeviceUniqueId() {
    var deviceId = await getUniqueId();
    return deviceId;
  }

  // get filtered data. only working on String data type
  searchingData(data, keyword, propertyName) {
    var filteredData = data.filter(el =>
      el[`${propertyName}`].toLowerCase().includes(keyword)
    );
    return filteredData;
  }

  runsCalculatoSearch(data, keyword, propertyName) {
    var filtered = data.filter(sen => keyword.toLowerCase().split(/\s+/).every(word => sen[propertyName].toLowerCase().indexOf(word) > -1))
    return filtered
  }

  multiSearchingData(data, keyword, propertyName1, propertyName2, propertyName3) {
    var filteredData = data.filter(
      el =>
        el[`${propertyName1}`].toLowerCase().includes(keyword) ||
        el[`${propertyName2}`].toLowerCase().includes(keyword) ||
        el[`${propertyName3}`].toLowerCase().includes(keyword)
    );
    return filteredData;
  }

  getFcmToken() {
    // return new Promise(resolve => {
    //   // var token = "undefined"
    //   // resolve(token)
    //   var token = undefined;
    //   isEmulator().then(async emulator => {
    //     if (emulator) {
    //       return resolve("Undefiend");
    //     } else {
    //       messaging()
    //         .requestPermission()
    //         .then(res => {
    //           token = messaging().getToken();
    //           resolve(token);
    //         })
    //         .catch(err => {
    //           console.log("notification err", err);
    //           resolve(token);
    //         });
    //     }
    //   });
    // });
  }

  getApplicationLocalVersion = () => {
    return getVersion();
  };

  getApplicationDetail = () => {
    // return new Promise(async resolve => {
    //   if (Platform.OS === "android") {
    //     const version = await checkVersion();
    //     console.log("Got version info:", version);
    //     resolve(version);
    //   } else {
    //     resolve({});
    //   }
    // });
  };

  checkMobileNumber = number => {
    if (number.length === 11) {
      if (number.slice(0, 2) == "03" && this.isNumber(number)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  // for back service
  requestBackService = async () => {
    return new Promise(resolve => {
      try {
        RNLocation.requestPermission({
          ios: "always", // or 'whenInUse'
          android: {
            detail: "fine", // or 'coarse'
            rationale: {
              title: "We need to access your location",
              message: "We use your location",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        })
          .then(granted => {
            console.log("granted", granted);
            resolve(granted);
          })
          .catch(() => {
            console.log("not granted");

            resolve(false);
          });
      } catch (e) {
        console.log("location error ", e);
      }
    });
  };

  checkPermissionLocationForBack = async () => {
    RNLocation.getCurrentPermission().then(currentPermission => {
      if (currentPermission === "notDetermined") {
        console.log("bhag bsdk", currentPermission);
        return;
      }

      currentPermission !== "denied" && currentPermission !== "restricted";
    });
  };

  getSmsHash() {
    return new Promise(resolve => {
      isEmulator().then(async emulator => {
        if (emulator) {
          resolve("emulated device");
          return;
        } else {
          RNOtpVerify.getHash().then(res => {
            console.log(res);
            var hash = res?.[0];
            resolve(hash);
          });
        }
      });
    });
  }

 

  makeGroupAsAlphabaticOrder(array, propertyToSort) {
    var detail = [...array];

    var sortedData = detail.sort((a, b) =>
      a.phonebookName < b.phonebookName
        ? -1
        : a.phonebookName > b.phonebookName
          ? 1
          : 0
    );
    console.log(sortedData, "sortedData");

    let data = sortedData.reduce((r, e) => {
      let group = e[propertyToSort][0];
      if (!r[group]) r[group] = { group, children: [e] };
      else r[group].children.push(e);
      return r;
    }, {});
    let result = Object.values(data);
    return result;
  }

  googlePlayAppReview = () => {
    // if (Platform.OS === "android") {
    //   InAppReview.isAvailable();
    //   InAppReview.RequestInAppReview()
    //     .then(hasFlowFinishedSuccessfully => {
    //       console.log("InAppReview in android", hasFlowFinishedSuccessfully);
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // }
  };

  getFileExtention(fileName) {
    return fileName.substr((fileName.lastIndexOf('.')))
  }

  loadAnimation(url = '') {

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        return responseData
      })
      .catch((error) => {
        console.log(error);
      })
  }

  isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }

  GroupByDate(data, propertyName) {
    if (!data) {
      return null
    }

    const groups = data.reduce((groups, obj) => {
      const date = obj[propertyName].split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(obj);
      return groups;
    }, {});

    // Edit: to add it in the array format instead
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        detail: groups[date]
      };
    });

    return groupArrays

  }


  DistinctArray(array, propertyName) {
    if (!array) {
      return null
    }
    var flags = [], output = [], l = array.length, i;
    for (i = 0; i < l; i++) {
      if (flags[array[i][propertyName]]) continue;
      flags[array[i][propertyName]] = true;
      output.push(array[i]);
    }
    return output
  }

  PresentFloatValue(value) {

    if (value != 0) {
      var checkFloat = this.isFloat(value)
      var newValue = checkFloat ? value.toFixed(2) : value
      return newValue
    }
    else {
      return 0
    }
  }

  IsCorrectPassword(password) {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return re.test(password);
  }



  // getFOC(schemeQty, schemeFOC, userInput) {
  //   var foc_QTY = Math.floor(userInput / (schemeQty + schemeFOC)) * schemeFOC
  //   console.log(foc_QTY)
  //   return foc_QTY
  // }


  // GetInvoiceQTY(schemeQty, schemeFOC, userInput) {
  //   var foc_qty = Math.floor(userInput / (schemeQty + schemeFOC)) * schemeFOC
  //   var invoiceQTY = userInput - foc_qty
  //   return invoiceQTY
  // }

  // getInvoiceAmount(userInput, schemeQty, schemeFOC, discount, price) {
  //   var foc_qty = Math.floor(userInput / (schemeQty + schemeFOC)) * schemeFOC
  //   var invoiceQTY = userInput - foc_qty
  //   var invoiceAmout = invoiceQTY * price * ((100 - discount) / 100)
  //   return invoiceAmout
  // }


  checkFilePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'Crown One app needs access to your storage to download files',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Storage Permission Granted.');
          return { isValid: true, }
        } else {
          return { isValid: false, }
        }
      } catch (err) {
        return { isValid: false, }
      }
    }
    else {
      return { isValid: true, }
    }
  };

  async downloadFile(url, token, fileName, callBack) {


    // var { isValid } = await this.checkFilePermission()
    // if (!isValid) {
    //   return { isSuccess: false, message: "Kindly provide permission in order to download file" }
    // }


    // const { config, fs } = RNFetchBlob;
    // let downloadDir = fs.dirs.DownloadDir;

    // let options = {
    //   fileCache: false,
    //   notification: true,
    //   addAndroidDownloads: {
    //     useDownloadManager: true,
    //     notification: true,
    //     path: downloadDir + "/crownOne/" + fileName,
    //     description: 'downloading...',
    //   },
    // }
    // config(options)
    //   .fetch("GET", url,
    //     {
    //       'Authorization': "Bearer " + token,
    //       Accept: "application/json",
    //       "Content-Type": "application/json"
    //     }
    //   )
    //   .then((res) => {
    //     if (callBack) { callBack() }
    //     return res.readFile('base64')
    //   })
    //   .then(async (resp) => {

    //     var file = resp
    //     var base64Data = `data:application/pdf;base64,` + file;
    //     try {
    //       await Share.open({ url: base64Data });
    //       return { isSuccess: true, message: "File successfully downloaded" }
    //     } catch (error) {
    //       return { isSuccess: false, message: "Can't share file at this time" }
    //     }
    //   })
    //   .catch((err) => {
    //     if (callBack) { callBack() }
    //     return { isSuccess: false, message: "Can't Download at this time" }
    //   })
  }




}




export default new Util();

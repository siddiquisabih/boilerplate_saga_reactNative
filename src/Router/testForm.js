import React, { Component } from 'react'
import { Button, View, TextInput, Text, PermissionsAndroid } from 'react-native'
import { TextArea, Radio, CustomButton } from "../containers"
import { Icon, Picker, } from 'native-base'
import axios from "axios"
import ImagePicker from 'react-native-image-picker';
import MultiSelect from '../containers/multiSelect';
import CameraRoll from '@react-native-community/cameraroll';





export default class TestForm extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            formConfig: [
                { value: null, type: 'text', title: "UserName", placeholder: "Enter Here", answerType: 'text' },
                { value: null, type: 'text', title: "Age", placeholder: "Enter Here", answerType: 'number' },
                { value: null, type: 'radio', title: "Gender", listOptions: [{ name: "Male", id: 0 }, { name: "Female", id: 1 }] },
                {
                    value: null, type: 'multiple', title: "Points multiple", listOptions: [
                        { name: "Point 1", id: 0, isActive: false },
                        { name: "Point 2", id: 1, isActive: false },
                        { name: "Point 3", id: 2, isActive: false },
                        { name: "Point 4", id: 3, isActive: false },
                    ]
                },
                {
                    value: null, type: 'single', title: "Points", listOptions: [
                        { name: "Point 1", id: 0 },
                        { name: "Point 2", id: 1 },
                        { name: "Point 3", id: 2 },
                        { name: "Point 4", id: 3 },
                    ]
                },
            ],

            formDetail:
                [
                    {
                        type: "text",
                        name: "question7",
                        title: "sfg",
                        description: "sdfgsdfg",
                        isRequired: true,
                        inputType: "number"
                    },
                    {
                        type: "text",
                        name: "question3",
                        isRequired: true
                    },
                    {
                        type: "comment",
                        name: "question5"
                    },
                    {
                        type: "rating",
                        name: "question4"
                    },
                    {
                        type: "boolean",
                        name: "question2",
                        title: "Part Available",
                        isRequired: true
                    },
                    {
                        type: "radiogroup",
                        name: "question6",
                        title: "Question Radio",
                        isRequired: true,
                        choices: [
                            "item1",
                            "item2",
                            "item3"
                        ]
                    },
                    {
                        type: "checkbox",
                        name: "question1",
                        title: "Question Checkbox",
                        isRequired: true,
                        choices: [
                            {
                                value: "item1",
                                text: "asdf"
                            },
                            {
                                value: "item2",
                                text: "asdf"
                            },
                            {
                                value: "item3",
                                text: "asdf"
                            }
                        ],
                        hasOther: true,
                        otherText: "asdf"
                    }
                ],
            multiData: {},
            showMultiModal: false,
            data: []
        }
    }
 

    async Camera() {
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Permission Explanation',
                    message: 'ReactNativeForYou would like to access your photos!',
                },
            );
            if (result !== 'granted') {
                console.log('Access to pictures was denied');
                return;
            } else {
                CameraRoll.getPhotos({
                    first: 50,
                    assetType: 'Photos',
                })
                    .then((res) => {
                        console.log(res);
                        console.log(res.edges);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        } else {
            CameraRoll.getPhotos({
                first: 50,
                assetType: 'Photos',
            })
                .then((res) => {
                    console.log(res);
                    console.log(res.edges);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    };



    changeRadio(value, i, index) {
        console.log(value, i, index)
        var data = this.state.formConfig
        data[index].value = value
        console.log(data[index])
        this.setState({ formConfig: data })
    }
    changeSingleSelect(value, index) {
        console.log(value, index)
        var data = this.state.formConfig
        data[index].value = value
        console.log(data[index])
        this.setState({ formConfig: data })
    }


    test() {
        // axios.post('https://freenewsapp.herokuapp.com/file/upload/sidd')
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };



        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };


                var formData = new FormData()
                formData.append('file', {
                    uri: response.uri,
                    type: "image/jpeg",
                    name: "imagename.jpg"
                })
                console.log(formData)


                axios.post('https://freenewsapp.herokuapp.com/file/upload/sidd', formData)
                    .then((res) => {
                        console.log(res, 'res')
                    })
                    .catch((err) => {
                        console.log(err, 'err')
                    })
  
                this.setState({
                    avatarSource: source,
                });
            }
        });

    }


    handleSubmit = (event) => {
        console.log("sabih sididqui sahab", event)
    }

    changeText(text, index) {
        // this.state.formConfig[index].name = text
        var data = this.state.formConfig
        data[index].name = text
        this.setState({ formConfig: data })
        console.log(text)
    }

    render() {
        return (
            <View>
                {/* <Form schema={this.state.schema}
                    uiSchema={this.state.uiSchema}
                    submitTitle="submit"

                /> */}



                <View>

                    {this.state.formConfig.map((item, index) => {

                        if (item.type.toLowerCase() === 'text') {
                            return (

                                <TextArea key={index} onChange={(text) => {
                                    this.changeText(text, index)
                                }} title={item.title} placeholder={item.placeholder} type={item.answerType} value={item.name} />
                            )
                        }
                        if (item.type.toLowerCase() === 'radio') {
                            return (
                                <Radio key={index}
                                    listOptions={item.listOptions} title={item.title}
                                    onChange={(valueId, optionIndex) => { this.changeRadio(valueId, optionIndex, index) }}
                                    selectedOption={item.value}
                                />
                            )
                        }
                        if (item.type.toLowerCase() === 'multiple') {
                            return (
                                <Button onPress={() => {
                                    this.setState({ multiData: item, showMultiModal: true })
                                }} title="Select multiple point" />
                            )
                        }
                        if (item.type.toLowerCase() === 'single') {
                            return (
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Select your SIM"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    selectedValue={item.value}
                                    onValueChange={(value) => { this.changeSingleSelect(value, index) }}
                                >
                                    <Picker.Item label="Wallet" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>

                                // <Radio key={index}
                                //     listOptions={item.listOptions} title={item.title}
                                //     onChange={(valueId, optionIndex) => { this.changeRadio(valueId, optionIndex, index) }}
                                //     selectedOption={item.selectedOption}
                                // />
                            )
                        }

                    })}
                    <Button onPress={this.Camera} title="submit" />
                    {
                        this.state.showMultiModal ?
                            <MultiSelect data={this.state.multiData} />
                            : null
                    }
                </View>



                {/* <CustomButton buttonEvent={this.test.bind
                    title="click" style={{ backgroundColor: 'lightgray', padding: 12, textAlign: 'center' }} /> */}
            </View>
        )
    }
}
























// import React, { Component } from 'react'
// import { Button, View, TextInput, Text, } from 'react-native'
// import { TextArea, Radio, CustomButton } from "../containers"
// import { Icon, Picker, } from 'native-base'
// import axios from "axios"
// import ImagePicker from 'react-native-image-picker';
// import MultiSelect from '../containers/multiSelect';

// export default class TestForm extends Component {
//     constructor() {
//         super()
//         this.state = {
//             value: "",
//             formConfig: [
//                 { value: null, type: 'text', title: "UserName", placeholder: "Enter Here", answerType: 'text' },
//                 { value: null, type: 'text', title: "Age", placeholder: "Enter Here", answerType: 'number' },
//                 { value: null, type: 'radio', title: "Gender", listOptions: [{ name: "Male", id: 0 }, { name: "Female", id: 1 }] },
//                 {
//                     value: null, type: 'multiple', title: "Points multiple", listOptions: [
//                         { name: "Point 1", id: 0, isActive: false },
//                         { name: "Point 2", id: 1, isActive: false },
//                         { name: "Point 3", id: 2, isActive: false },
//                         { name: "Point 4", id: 3, isActive: false },
//                     ]
//                 },
//                 {
//                     value: null, type: 'single', title: "Points", listOptions: [
//                         { name: "Point 1", id: 0 },
//                         { name: "Point 2", id: 1 },
//                         { name: "Point 3", id: 2 },
//                         { name: "Point 4", id: 3 },
//                     ]
//                 },
//             ],

//             formDetail:
//                 [
//                     {
//                         type: "text",
//                         name: "question7",
//                         title: "sfg",
//                         description: "sdfgsdfg",
//                         isRequired: true,
//                         inputType: "number"
//                     },
//                     {
//                         type: "text",
//                         name: "question3",
//                         isRequired: true
//                     },
//                     {
//                         type: "comment",
//                         name: "question5"
//                     },
//                     {
//                         type: "rating",
//                         name: "question4"
//                     },
//                     {
//                         type: "boolean",
//                         name: "question2",
//                         title: "Part Available",
//                         isRequired: true
//                     },
//                     {
//                         type: "radiogroup",
//                         name: "question6",
//                         title: "Question Radio",
//                         isRequired: true,
//                         choices: [
//                             "item1",
//                             "item2",
//                             "item3"
//                         ]
//                     },
//                     {
//                         type: "checkbox",
//                         name: "question1",
//                         title: "Question Checkbox",
//                         isRequired: true,
//                         choices: [
//                             {
//                                 value: "item1",
//                                 text: "asdf"
//                             },
//                             {
//                                 value: "item2",
//                                 text: "asdf"
//                             },
//                             {
//                                 value: "item3",
//                                 text: "asdf"
//                             }
//                         ],
//                         hasOther: true,
//                         otherText: "asdf"
//                     }
//                 ],





//             multiData: {},
//             showMultiModal: false
//         }
//     }


//     changeRadio(value, i, index) {
//         console.log(value, i, index)
//         var data = this.state.formConfig
//         data[index].value = value
//         console.log(data[index])
//         this.setState({ formConfig: data })
//     }
//     changeSingleSelect(value, index) {
//         console.log(value, index)
//         var data = this.state.formConfig
//         data[index].value = value
//         console.log(data[index])
//         this.setState({ formConfig: data })
//     }


//     test() {
//         // axios.post('https://freenewsapp.herokuapp.com/file/upload/sidd')
//         const options = {
//             title: 'Select Avatar',
//             customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };



//         ImagePicker.showImagePicker(options, (response) => {
//             console.log('Response = ', response);

//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 const source = { uri: response.uri };

//                 // You can also display the image using data:
//                 // const source = { uri: 'data:image/jpeg;base64,' + response.data };


//                 var formData = new FormData()
//                 formData.append('file', {
//                     uri: response.uri,
//                     type: "image/jpeg",
//                     name: "imagename.jpg"
//                 })
//                 console.log(formData)


//                 axios.post('https://freenewsapp.herokuapp.com/file/upload/sidd', formData)
//                     .then((res) => {
//                         console.log(res, 'res')
//                     })
//                     .catch((err) => {
//                         console.log(err, 'err')
//                     })













//                 this.setState({
//                     avatarSource: source,
//                 });
//             }
//         });

//     }


//     handleSubmit = (event) => {
//         console.log("sabih sididqui sahab", event)
//     }

//     changeText(text, index) {
//         // this.state.formConfig[index].name = text
//         var data = this.state.formConfig
//         data[index].name = text
//         this.setState({ formConfig: data })
//         console.log(text)
//     }

//     render() {
//         return (
//             <View>
//                 {/* <Form schema={this.state.schema}
//                     uiSchema={this.state.uiSchema}
//                     submitTitle="submit"

//                 /> */}



//                 <View>

//                     {this.state.formConfig.map((item, index) => {

//                         if (item.type.toLowerCase() === 'text') {
//                             return (

//                                 <TextArea key={index} onChange={(text) => {
//                                     this.changeText(text, index)
//                                 }} title={item.title} placeholder={item.placeholder} type={item.answerType} value={item.name} />
//                             )
//                         }
//                         if (item.type.toLowerCase() === 'radio') {
//                             return (
//                                 <Radio key={index}
//                                     listOptions={item.listOptions} title={item.title}
//                                     onChange={(valueId, optionIndex) => { this.changeRadio(valueId, optionIndex, index) }}
//                                     selectedOption={item.value}
//                                 />
//                             )
//                         }
//                         if (item.type.toLowerCase() === 'multiple') {
//                             return (
//                                 <Button onPress={() => {
//                                     this.setState({ multiData: item, showMultiModal: true })
//                                 }} title="Select multiple point" />
//                             )
//                         }
//                         if (item.type.toLowerCase() === 'single') {
//                             return (
//                                 <Picker
//                                     mode="dropdown"
//                                     iosHeader="Select your SIM"
//                                     iosIcon={<Icon name="arrow-down" />}
//                                     style={{ width: undefined }}
//                                     selectedValue={item.value}
//                                     onValueChange={(value) => { this.changeSingleSelect(value, index) }}
//                                 >
//                                     <Picker.Item label="Wallet" value="key0" />
//                                     <Picker.Item label="ATM Card" value="key1" />
//                                     <Picker.Item label="Debit Card" value="key2" />
//                                     <Picker.Item label="Credit Card" value="key3" />
//                                     <Picker.Item label="Net Banking" value="key4" />
//                                 </Picker>

//                                 // <Radio key={index}
//                                 //     listOptions={item.listOptions} title={item.title}
//                                 //     onChange={(valueId, optionIndex) => { this.changeRadio(valueId, optionIndex, index) }}
//                                 //     selectedOption={item.selectedOption}
//                                 // />
//                             )
//                         }

//                     })}
//                     <Button onPress={this.handleSubmit} title="submit" />
//                     {
//                         this.state.showMultiModal ?
//                             <MultiSelect data={this.state.multiData} />
//                             : null
//                     }
//                 </View>



//                 {/* <CustomButton buttonEvent={this.test.bind
//                     title="click" style={{ backgroundColor: 'lightgray', padding: 12, textAlign: 'center' }} /> */}
//             </View>
//         )
//     }
// }

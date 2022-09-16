import React, { Component } from 'react'
import { Button, View, TextInput, Text, } from 'react-native'
import { TextBox, Radio, Toggle, MultiSelect, TextArea } from "../containers"
import { Icon, Picker, } from 'native-base'
import axios from "axios"
import ImagePicker from 'react-native-image-picker';
import RouteKey from './routeKeys'

export default class w extends Component {
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

            //value property add krni hogi is mai
            formDetail:
                [
                    {
                        type: "comment",
                        name: "question5",
                        value: null
                    },
                    // {
                    //     type: "rating",
                    //     name: "question4",
                    //     value: null
                    // },


                    {
                        type: "boolean",
                        name: "question2",
                        title: "Part Available",
                        isRequired: true,
                        value: null
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

                        value: null
                    },
                    {
                        type: "radiogroup",
                        name: "question6",
                        title: "Question Radio",
                        isRequired: true,
                        choices: [
                            {
                                value: "item1",
                                text: "item1"
                            },
                            {
                                value: "item2",
                                text: "item2"
                            },
                            {
                                value: "item3",
                                text: "item3"
                            },
                        ],
                        value: null
                    },
                    {
                        type: "text",
                        name: "question7",
                        title: "sfg",
                        description: "sdfgsdfg",
                        isRequired: true,
                        inputType: "number",
                        value: null
                    },
                    {
                        type: "text",
                        name: "question3",
                        isRequired: true,
                        value: null
                    },


                ],





            multiData: {},
            showMultiModal: false
        }
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


    handleSubmit = () => {
        var { formDetail } = this.state
        console.log("sabih sididqui sahab", formDetail)

        var temp = []
        formDetail.map((data, index) => {
            if (data.type === "checkbox") {
                var detail = []
                for (let i = 0; i < data.choices.length; i++) {
                    if (data.choices[i].selected === true) {
                        detail.push(data.choices[i].value)
                    }
                }
                temp.push({ name: data.name, value: detail })
                console.log(detail, "detail")
            }
            else {
                temp.push({ name: data.name, value: data.value })
            }

        })


        console.log(temp)

    }










    //sahi ho gye
    changeText(text, index) {
        // this.state.formConfig[index].value = text
        var data = this.state.formDetail
        data[index].value = text
        this.setState({ formDetail: data })
        console.log(text)
    }

    changeRadio(obj, i, index) {

        var data = this.state.formDetail
        data[index].value = obj.value
        console.log(data[index])
        this.setState({ formDetail: data })
    }

    changeSelectBox(value, optionIndex, index) {
        var data = this.state.formDetail
        if (data[index].choices[optionIndex].selected === true) {
            data[index].choices[optionIndex].selected = false
        }
        else {
            data[index].choices[optionIndex].selected = true
        }
        console.log(data[index])
        // data[index].value.push("item3")
        // console.log(data[index])
        this.setState({ formDetail: data })
    }
    changeToggle(toggleValue, index) {
        var data = this.state.formDetail
        data[index].value = toggleValue
        console.log(data[index])
        this.setState({ formDetail: data })
    }

    render() {
        return (
            <View>
                <Text onPress={() => { this.props.navigation.navigate(RouteKey.FORM_BUILDING) }}>form new</Text>
                <View>

                    {this.state.formDetail.map((item, index) => {

                        if (item.type.toLowerCase() === 'comment') {
                            return (
                                <TextArea key={index} title={item.title} questionName={item.name} isRequired={item.isRequired} value={item.value} onChange={(text) => {
                                    this.changeText(text, index)
                                }} />
                            )
                        }
                        if (item.type.toLowerCase() === 'boolean') {
                            return (
                                <Toggle key={index} title={item.title} questionName={item.name} isRequired={item.isRequired} value={item.value} onChangeToggle={(toggleValue) => { this.changeToggle(toggleValue, index) }} />
                            )
                        }

                        if (item.type.toLowerCase() === 'checkbox') {
                            return (
                                <MultiSelect key={index} listOptions={item.choices} title={item.title} questionName={item.name} value={item.value}
                                    selectCheckbox={(option, optionIndex) => {
                                        this.changeSelectBox(option, optionIndex, index)
                                    }}
                                />
                            )
                        }

                        if (item.type.toLowerCase() === 'text') {
                            return (

                                <TextBox key={index} onChange={(text) => {
                                    this.changeText(text, index)
                                }} title={item.title} questionName={item.name} description={item.description} isRequired={item.isRequired} type={item.inputType} value={item.value} />
                            )
                        }
                        if (item.type.toLowerCase() === 'radiogroup') {
                            return (
                                <Radio key={index}
                                    listOptions={item.choices} title={item.title}
                                    onChange={(value, optionIndex) => { this.changeRadio(value, optionIndex, index) }}
                                    selectedOption={item.value}
                                    questionName={item.name}
                                    isRequired={item.isRequired}
                                />
                            )
                        }

                        // if (item.type.toLowerCase() === 'single') {
                        //     return (
                        //         <Picker
                        //             mode="dropdown"
                        //             iosHeader="Select your SIM"
                        //             iosIcon={<Icon name="arrow-down" />}
                        //             style={{ width: undefined }}
                        //             selectedValue={item.value}
                        //             onValueChange={(value) => { this.changeSingleSelect(value, index) }}
                        //         >
                        //             <Picker.Item label="Wallet" value="key0" />
                        //             <Picker.Item label="ATM Card" value="key1" />
                        //             <Picker.Item label="Debit Card" value="key2" />
                        //             <Picker.Item label="Credit Card" value="key3" />
                        //             <Picker.Item label="Net Banking" value="key4" />
                        //         </Picker>

                        //     )
                        // }

                    })}
                    <Button onPress={this.handleSubmit} title="submit" />

                </View>



                {/* <CustomButton buttonEvent={this.test.bind
                    title="click" style={{ backgroundColor: 'lightgray', padding: 12, textAlign: 'center' }} /> */}
            </View>
        )
    }
}

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import I18next from 'i18next'

export default function NoRecordFound({ title }) {
    return (
        <View style={{ flex: 1 }}>
            <AnimatedLottieView source={require("../assets/animation/orderModule/search.json")} loop autoPlay style={{ height: 250, alignSelf: 'center', alignSelf: 'center' }} />
            <Text style={styles.noRecord}> {title ?? I18next.t('NO_RECORD_FOUND')}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    noRecord: { textAlign: 'center', fontSize: 25, fontWeight: 'bold' },

})
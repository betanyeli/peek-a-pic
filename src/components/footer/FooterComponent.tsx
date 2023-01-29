import { View } from 'react-native'
import React from 'react'
import styles from './FooterComponent.styles'

type FooterComponentProps = {
    children: JSX.Element
}
const FooterComponent = ({ children }: FooterComponentProps) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default FooterComponent
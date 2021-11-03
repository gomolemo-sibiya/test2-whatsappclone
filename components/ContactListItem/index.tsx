import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import styles from "./style";
import { User } from "../../types";
import moment from "moment";//https://momentjs.com/docs/...scroll down to difference
import { useNavigation } from '@react-navigation/core';

export type ContactListItemProps ={
    user: User;
}

const ContactListItem = (props: ContactListItemProps) => {
    const {user} = props;

    const onClick = () => {
        //console.warn(`Clicked on ${user.name}`);
        //Naviagate to chat room with this user
    }

    return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default ContactListItem;
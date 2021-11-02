import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";
import { User } from "../../types";
import moment from "moment";//https://momentjs.com/docs/...scroll down to difference
import { useNavigation } from '@react-navigation/core';

export type ContactListItemProps ={
    user: User;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {user} = props;

    const navigation = useNavigation()

    const user = chatRoom.users[1]

    const onClick = () => {
        //console.warn(`Clicked on ${user.name}`);
        navigation.navigate('ChatRoom', {
            id: chatRoom.id,
            name: user.name,
          })
    }

    return (
    <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar}/>
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default ChatListItem;
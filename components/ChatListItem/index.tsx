import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import { ChatRoom } from "../../types";
import styles from "./styles";

import moment from "moment";//https://momentjs.com/docs/...scroll down to difference
import { useNavigation } from '@react-navigation/core';
export type ChatListItemProps ={
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const {chatRoom} = props;

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
                    <Text numberOfLines={2} ellipsizeMode={"tail"} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>
            </View>
            <Text style={styles.time}>
                {chatRoom.lastMessage && moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default ChatListItem;
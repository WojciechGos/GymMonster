import { View, ScrollView, Image } from "react-native"
import { Text, List } from "react-native-paper"
import styles from "@utils/styles"
import ProgresItem from "./ProgressItem"

const Progress = ({ data }) => {
    console.log(data)
    return (
        <View>
            <Text style={[styles.smallHeader, { marginBottom: 10 }]}>
                Postępy
            </Text>
            <ScrollView>
                {data.map((item) => (
                    <>
                        {console.log(item)}
                        <List.Accordion
                            key={item.date}
                            title={item.date}
                            titleStyle={styles.h2}
                            style={styles.accordion}
                            theme={{ colors: { primary: "#DFDFDF" } }}
                        >
                            {console.log(item)}
                            <ProgresItem item={item} />
                        </List.Accordion>
                    </>
                ))}
            </ScrollView>
        </View>
    )
}

export default Progress

// import React from 'react';
// import { Image, StyleSheet, View , Text} from 'react-native';

// const Progress = ({photoUri}) => {

//     return (
//     <View style={styles.container}>
//       {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     resizeMode: 'cover',
//   },
// });

// export default Progress;

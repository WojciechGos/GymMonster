
import { View, ScrollView, Image } from "react-native"
import { Text, List } from "react-native-paper"
import styles from "@utils/styles"

const Progress = ({ data }) => {

    return (
        <View>
            <Text style={[styles.smallHeader, { marginBottom: 10 }]}>
                Postępy
            </Text>
            <ScrollView>
                {data.map((item) => {
                    return (
                        <List.Accordion
                            key={item.date}
                            title={item.date}
                            titleStyle={styles.h2}
                            style={styles.accordion}
                            theme={{ colors: { primary: "#DFDFDF" } }}
                        >
                            <View style={{ margin: 10, flexDirection: 'row' }}>
                                <View style={{marginRight: 10}}>
                                    <Text style={styles.text}>
                                        Obwod klatki piersiowej: {item.chestGirth}
                                    </Text>
                                    <Text style={styles.text}>
                                        Obwod brzucha: {item.abdominalGirth}
                                    </Text>
                                    <Text style={styles.text}>
                                        Obwod ramienia: {item.armGirth}
                                    </Text>
                                    <Text style={styles.text}>
                                        Obwod przedramienia: {item.forearmGirth}
                                    </Text>
                                    <Text style={styles.text}>
                                        Obwod uda: {item.thighGirth}
                                    </Text>
                                    <Text style={styles.text}>
                                        Obwod lydki: {item.calfGirth}
                                    </Text>
                                </View>
                                <Image
                                    source={require('src/images/progress.jpg')}
                                    style={{ width: 170, height: 133 }}
                                />
                            </View>
                        </List.Accordion>
                    )
                })}
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


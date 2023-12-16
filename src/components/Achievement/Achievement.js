import { Text } from "react-native-paper"
import { View, Image } from "react-native"
import styles from "@utils/styles"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Feather';

const Achievement = ()=>{
    return (
        <View style={styles.containerNoCenter}>
            <View style={styles.avievementWrapper}>
                <AnimatedCircularProgress
                    size={164}
                    width={5}
                    tintColor="yellow"
                    rotation={0}
                    fill={33}
                    backgroundColor="transparent"
                    lineCap="round">
                    {
                        () => <View style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../../../public/icon-thunderbolt.png')}
                                style={styles.image}
                            />
                        </View>
                    }
                </AnimatedCircularProgress>
                <View style={styles.achievementHead}>
                    <Text style={styles.achievementHeadText}>
                        Otworzyłeś 2 z 6 nagród
                    </Text>
                </View>
                <View style={styles.achievementAchievementWrapper}>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            <Icon name='check-square' size={61} color="white" />
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 10000 przysiadów
                            </Text>
                            <View style={{
                                width: 228,
                                borderWidth: 3,
                                borderColor: '#A3F000'
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                1000/1000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            <Icon name='square' size={61} color="white" />
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 10000 pompek
                            </Text>
                            <View style={{
                                width: 114,
                                borderWidth: 3,
                                borderColor: '#F0AD00'
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                5000/10000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            <Icon name='check-square' size={61} color="white" />
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 1000 podciągnięć
                            </Text>
                            <View style={{
                                width: 22.8,
                                borderWidth: 3,
                                borderColor: '#F02B00'
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                100/1000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            <Icon name='square' size={61} color="white" />
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 500 min planki
                            </Text>
                            <View style={{
                                width: 45.6,
                                borderWidth: 3,
                                borderColor: '#F06500'
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                100/500
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            <Icon name='square' size={61} color="white" />
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Trenuj przez 100 dni
                            </Text>
                            <View style={{
                                width: 182,
                                borderWidth: 3,
                                borderColor: '#CFF000'
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                80/100
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Achievement
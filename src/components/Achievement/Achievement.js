import { Text } from "react-native-paper"
import { View, Image } from "react-native"
import styles from "@utils/styles"
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/Feather';

const Achievement = (props) => {
    return (
        <View style={styles.containerNoCenter}>
            <View style={styles.avievementWrapper}>
                <AnimatedCircularProgress
                    size={164}
                    width={5}
                    tintColor={`rgba(${Math.round(255 - (255 * (props.progress / 5)))}, ${Math.round(255 * (props.progress / 5))}, 0, 1)`}
                    rotation={0}
                    fill={props.progress*20}
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
                        Otworzyłeś {props.progress} z 5 nagród
                    </Text>
                </View>
                <View style={styles.achievementAchievementWrapper}>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                            {props.sumSquats < 1000 ? (
                                <Icon name='square' size={61} color="white" />
                            ) : (
                                <Icon name='check-square' size={61} color="white" />
                            )}
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 1000 przysiadów
                            </Text>
                            <View style={{
                                width: props.widthSquats,
                                borderWidth: 3,
                                borderColor: `rgba(${Math.round(255 - (255 * (props.widthSquats / 228)))}, ${Math.round(255 * (props.widthSquats / 228))}, 0, 1)`
                            }} />
                            <Text style={styles.achievementSecondText}>
                                {props.sumSquats}/1000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                        {props.sumPushups < 1000 ? (
                                <Icon name='square' size={61} color="white" />
                            ) : (
                                <Icon name='check-square' size={61} color="white" />
                            )}
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 1000 pompek
                            </Text>
                            <View style={{
                                width: props.widthsPushups,
                                borderWidth: 3,
                                borderColor: `rgba(${Math.round(255 - (255 * (props.widthsPushups / 228)))}, ${Math.round(255 * (props.widthsPushups / 228))}, 0, 1)`
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                {props.sumPushups}/1000
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                        {props.sumPullupsonabar < 1000 ? (
                                <Icon name='square' size={61} color="white" />
                            ) : (
                                <Icon name='check-square' size={61} color="white" />
                            )}
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Zrób 100 podciągnięć
                            </Text>
                            <View style={{
                                width: props.widthPullupsonabar,
                                borderWidth: 3,
                                borderColor: `rgba(${Math.round(255 - (255 * (props.widthPullupsonabar / 228)))}, ${Math.round(255 * (props.widthPullupsonabar / 228))}, 0, 1)`
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                {props.sumPullupsonabar}/100
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                        {props.maxBenchpress < 100 ? (
                                <Icon name='square' size={61} color="white" />
                            ) : (
                                <Icon name='check-square' size={61} color="white" />
                            )}
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Podnieś 100 kg
                            </Text>
                            <View style={{
                                width: props.widthBenchpress,
                                borderWidth: 3,
                                borderColor: `rgba(${Math.round(255 - (255 * (props.widthBenchpress / 228)))}, ${Math.round(255 * (props.widthBenchpress / 228))}, 0, 1)`
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                {props.maxBenchpress}/100
                            </Text>
                        </View>
                    </View>
                    <View style={styles.achievementAchievement}>
                        <View style={styles.achievementIconWrapper}>
                        {props.sumDays < 100 ? (
                                <Icon name='square' size={61} color="white" />
                            ) : (
                                <Icon name='check-square' size={61} color="white" />
                            )}
                        </View>
                        <View style={styles.achievementAchievementStatus}>
                            <Text style={styles.achievementFirstText}>
                                Trenuj przez 100 dni
                            </Text>
                            <View style={{
                                width: props.widthDays,
                                borderWidth: 3,
                                borderColor: `rgba(${Math.round(255 - (255 * (props.widthDays / 228)))}, ${Math.round(255 * (props.widthDays / 228))}, 0, 1)`
                            }}></View>
                            <Text style={styles.achievementSecondText}>
                                {props.sumDays}/100
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Achievement
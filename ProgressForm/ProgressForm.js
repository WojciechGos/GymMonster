import { View} from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { TextInput, Text, Button } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/styles"
import ButtonWithoutMargin from "../ButtonWithoutMargin/ButtonWithoutMargin"
import ButtonWithCam from "../ButtonWithCam/ButtonWithCam";

const ProgressForm = ({goToProgress}) => {
    return (
      
    <View style={styles.container}>
    
        <Text style={styles.smallHeader}>
            Formularz wymiarów
        </Text>

            <View >
                <Text></Text>
              
                <Text style={styles.h4} >
                    Obwód klatki piersiowej                        </Text>
                <TextInput
                    style={styles.textInputForm2}
                    
                    textColor={colors.text}
                    activeUnderlineColor={colors.primary}
                />
            </View>
            <View >
                <Text style={styles.h4} >
                    Obwód brzucha                                       </Text>
                <TextInput
                    style={styles.textInputForm2}
                   
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
            </View>

            <View >
                <Text style={styles.h4} >
                    Obwód ramimenia                                  </Text>
                <TextInput
                    style={styles.textInputForm2}
                   
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
            </View>

            <View >
                <Text style={styles.h4} >
                    Obwód przedramienia                           </Text>
                <TextInput
                    style={styles.textInputForm2}
                   
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
            </View>

            <View >
                <Text style={styles.h4} >
                    Obwód uda                                              </Text>
                <TextInput
                    style={styles.textInputForm2}
                    
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
            </View>

            <View >
                <Text style={styles.h4} >
                    Obwód łydki                                            </Text>
                <TextInput
                    style={styles.textInputForm2}
                    
                    textColor={colors.text}
                    secureTextEntry={true}
                    activeUnderlineColor={colors.primary} />
                    <Text></Text>
            </View>

            <View style={styles.spacing2}>
                <ButtonWithoutMargin name='Zapisz' handler={goToProgress}  />
                <Text>                             </Text>
                <ButtonWithCam handler={goToProgress} />
            </View>

        </View>
    )
}

export default ProgressForm

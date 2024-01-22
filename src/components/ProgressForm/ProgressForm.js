import { View} from "react-native"
import { SimpleLineIcons } from '@expo/vector-icons';
import { TextInput, Text, Button } from "react-native-paper"
import styles from "@utils/styles"
import colors from "@utils/styles"
import ButtonWithoutMargin from "@components/ButtonWithoutMargin/ButtonWithoutMargin"
import ButtonWithCam from "@components/ButtonWithCam/ButtonWithCam";

const ProgressForm = ({goToProgress, goToCamera}) => {
    return (
      
        <View>
        
        <View >
            <Text style={styles.h4} >
                Obwód klatki piersiowej
            </Text>
            <TextInput 
                style={styles.textInputFormProgress}  
                textColor={colors.text} 
                
                keyboardType="numeric"
            />
        </View>


        <View >
            <Text style={styles.h4} >
            Obwód brzucha
            </Text>
            <TextInput 
                style={styles.textInputFormProgress} 
                textColor={colors.text} 
                              
                keyboardType="numeric"
                />
        </View>
        <View >
            <Text style={styles.h4} >
            Obwód ramienia
            </Text>
            <TextInput 
                style={styles.textInputFormProgress} 
                textColor={colors.text}
                keyboardType="numeric"
                />

        </View>
        <View >
            <Text style={styles.h4} >
            Obwód przedramienia
            </Text>
            <TextInput 
                style={styles.textInputFormProgress} 
                textColor={colors.text}
                keyboardType="numeric"
                />
        </View>
        <View >
            <Text style={styles.h4} >
            Obwód uda
            </Text>
            <TextInput 
                style={styles.textInputFormProgress}  
                textColor={colors.text}
                keyboardType="numeric"
                />
        </View>
        <View >
            <Text style={styles.h4} >
            Obwód łydki
            </Text>
            <TextInput 
                style={styles.textInputFormProgress}
                textColor={colors.text} 
                keyboardType="numeric"
                />
        </View>

        <View style={styles.loginForgotPasswordWrapper}>
                <ButtonWithoutMargin name='Zapisz' handler={goToProgress}  /> 
                <ButtonWithCam handler={goToCamera}/>
            </View>
    </View>
    )
    
}

export default ProgressForm

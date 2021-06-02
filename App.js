import React from 'react'
import { View, Text } from 'react-native'
import TabBar from './navigation/TabBar'
import { LogBox } from 'react-native';
import AddButton from './animatedButton/animatedButton';
LogBox.ignoreAllLogs();
const App = () => {
    return (

<View style={{flex:1,backgroundColor:'yellow'}}>
{/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'grey',position:'absolute',top:150,bottom:0,right:0,left:0}}>

    <AddButton/>
</View> */}
<TabBar />

</View>



    )
}

export default App

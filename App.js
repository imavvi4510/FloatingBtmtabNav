import React from 'react'
import { View, Text } from 'react-native'
import TabBar from './navigation/TabBar'
import { LogBox } from 'react-native';
import AddButton from './animatedButton/animatedButton';
LogBox.ignoreAllLogs();
const App = () => {
    return (

<View style={{flex:1}}>
<View style={{alignContent:'center',justifyContent:'center',flex:21,alignItems:'center',top:450,}}>

    <AddButton/>
</View>
<TabBar />

</View>



    )
}

export default App

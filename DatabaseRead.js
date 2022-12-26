import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity,FlatList,TextInput,ListView,Divider } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {addCompany,getCompany} from 'CompaniesAPI';
class DatabaseRead extends Component {
    state = {
        CList: [],
        currentCompany: null,
    }
    onCompanyAdd = (Company) =>{
        // console.log(Company);
        // console.log("Added Company");
        this.setState(prevState => ({
            CList : [...prevState.CList, Company]
        }))
    }
    OnCompanyReceiverd = (CList) =>{
        console.log(CList);
        this.setState(prevState => ({
            CList : prevState.CList = CList
            })
        );
    }
    componentDidMount(){
        getCompany(this.OnCompanyReceiverd);
    }


//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }

  render() {
    return (
      <SafeAreaView>
        <View style={styles.row}>
            <TextInput
                style={styles.input}
                placeholder="Add Company Name"
                value={this.state.currentCompany}
                onChangeText={(text)=>this.setState(prevState => ({
                    currentCompany : prevState.currentCompany = text
                })
                    
                    )}
                />
                <Button
                    title='Submit'
                    style = {styles.button}
                    onPress={()=>addCompany({
                        name : this.state.currentCompany
                    },
                    this.onCompanyAdd
                    )}
                    />
        </View>
        <FlatList 
            data={this.state.CList}
            ItemSeparatorComponent = {()=><Divider style={{ backgroundColor:'black'}}/>}
            keyExtractor = {(item,index)=> index.toString()}
            renderItem={({ item }) => {
                console.log(item);
                return(
                    <ListView
                        title = {item.name}
                        onPress = {()=>{ }}
                    />
                );
            }
        
        }
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
    row : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : 20,
    },
    input : {
        borderWidth : 1,
        borderColor : 'black',
        padding : 10,
        flex : 1,
        marginRight : 10,
    },
    button : {
        padding : 20,
    }
})
export default DatabaseRead;
import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  StatusBar,
  AutoScroll,
  ScrollView,
  FlatList,
  Linking,
  SectionList
} from 'react-native';
import {Appbar} from 'react-native-paper';
export default class Education extends Component {
  render() {
    let pro=[];
    pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://leetcode.com/');
        }}>
        <Text style={{color: 'black'}}>Leed Code</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.skillrack.com/');
        }}>
        <Text style={{color: 'black'}}>Skill Rack</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://codingbat.com/');
        }}>
        <Text style={{color: 'black'}}>Coding Bat</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/');
        }}>
        <Text style={{color: 'black'}}>Javatpoint</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.java.com/en/');
        }}>
        <Text style={{color: 'black'}}>Java Basics</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/c-programming-language-tutorial');
        }}>
        <Text style={{color: 'black'}}>C Programming Basics</Text>
      </TouchableOpacity>);
      pro.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.w3schools.com/cpp/cpp_intro.asp');
        }}>
        <Text style={{color: 'black'}}>C++ Basics</Text>
      </TouchableOpacity>);
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      let data =[];
      data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.geeksforgeeks.org/data-structures/');
        }}>
        <Text style={{color: 'black'}}>DS Basics</Text>
      </TouchableOpacity>);
      data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/data-structure-array');
        }}>
        <Text style={{color: 'black'}}>Arrays</Text>
      </TouchableOpacity>);
      data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.geeksforgeeks.org/stack-data-structure/#:~:text=Stack%20is%20a%20linear%20data,one%20another%20in%20the%20canteen.');
        }}>
        <Text style={{color: 'black'}}>Stack</Text>
      </TouchableOpacity>);
      data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/singly-linked-list');
        }}>
        <Text style={{color: 'black'}}>Linked List</Text>
      </TouchableOpacity>);
      data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/tree');
        }}>
        <Text style={{color: 'black'}}>Tree</Text>
      </TouchableOpacity>);data.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/ds-graph');
        }}>
        <Text style={{color: 'black'}}>Graph</Text>
      </TouchableOpacity>);
/////////////////////////////////////////////////////////////
let react =[];
     react.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.w3schools.com/js/');
        }}>
        <Text style={{color: 'black'}}>Java Script</Text>
      </TouchableOpacity>);
      react.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactjs.org/');
        }}>
        <Text style={{color: 'black'}}>Basic ReactJs setup</Text>
      </TouchableOpacity>);
      react.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactjs.org/');
        }}>
        <Text style={{color: 'black'}}>Concept of React</Text>
      </TouchableOpacity>);
    
/////////////////////////////////////////////////////////////////////////////////
let native =[];
      native.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactnative.dev/docs/environment-setup');
        }}>
        <Text style={{color: 'black'}}>React Native Setup</Text>
      </TouchableOpacity>);
      native.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactnative.dev/docs/environment-setup');
        }}>
        <Text style={{color: 'black'}}>Basics of Native</Text>
      </TouchableOpacity>);
      native.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.youtube.com/playlist?list=PLYxzS__5yYQlHANFLwcsSzt3elIbYTG1h');
        }}>
        <Text style={{color: 'black'}}>Tutorial</Text>
      </TouchableOpacity>);
      
/////////////////////////////////////////////////////////////////////////////////////
let mango =[];
     mango.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_prosp-brand_gic-null_apac-in_ps-all_desktop_eng_lead&utm_term=mongodb%20setup&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=6501677905&adgroup=84316982761&gclid=CjwKCAjw4c-ZBhAEEiwAZ105RX9MKHZRl9tPunZ4LMle1RiwpNK1pxK03rhGiB4faB-WziqRsw49EBoCo4sQAvD_BwE');
        }}>
        <Text style={{color: 'black'}}>Setup MangoDB</Text>
      </TouchableOpacity>);
      mango.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.mongodb.com/basics');
        }}>
        <Text style={{color: 'black'}}>Beginer Basics</Text>
      </TouchableOpacity>);
      mango.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.youtube.com/results?search_query=mango+db+basics');
        }}>
        <Text style={{color: 'black'}}>Tutorial</Text>
      </TouchableOpacity>);
      
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let spring =[];
      spring.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://spring.io/guides/gs/spring-boot/');
        }}>
        <Text style={{color: 'black'}}>Setup Spring boot</Text>
      </TouchableOpacity>);
      spring.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/spring-boot-tutorial');
        }}>
        <Text style={{color: 'black'}}>Basics of Spring Boot</Text>
      </TouchableOpacity>);
      spring.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.youtube.com/results?search_query=spring+boot+tutorial');
        }}>
        <Text style={{color: 'black'}}>Tutorial</Text>
      </TouchableOpacity>);
    

////////////////////////////////////////////////////////////////////////////////////////////////////
let full =[];
      full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactjs.org/');
        }}>
        <Text style={{color: 'black'}}>ReactJS</Text>
      </TouchableOpacity>);
      full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://reactnative.dev/docs/environment-setup');
        }}>
        <Text style={{color: 'black'}}>reactnative</Text>
      </TouchableOpacity>);
      full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.mongodb.com/basics');
        }}>
        <Text style={{color: 'black'}}>MangoDB</Text>
      </TouchableOpacity>);
      full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.javatpoint.com/spring-boot-tutorial');
        }}>
        <Text style={{color: 'black'}}>Spring Boot</Text>
      </TouchableOpacity>);
      full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://expo.dev');
        }}>
        <Text style={{color: 'black'}}>PLUG & PlAY</Text>
      </TouchableOpacity>);
     full.push(<TouchableOpacity
        onPress={() => {
          Linking.openURL('https://expo.dev');
        }}>
        <Text style={{color: 'black'}}>PLUG & PlAY</Text>
      </TouchableOpacity>);
////////////////////////////////////////////////////////////////////////////////////

    return (
      <View>
        <Appbar.Header style={{backgroundColor: 'white'}}>
          <Appbar.Action
            icon={'chevron-left'}
            onPress={() => {
              Alert.alert('BACK TO HOME', ' CONTINUE', [
                {
                  text: 'Ask me later',
                  onPress: () => console.log('Ask me later pressed'),
                },
                {
                  text: 'cancel',
                  onPress: () => {},
                },
                {
                  text: 'ok',
                  onPress: () => {
                    this.props.navigation.navigate('New');
                  },
                },
              ]);
              this.setState();
            }}
          />
          <Appbar.Content
            title="Education"
            style={{alignItems: 'center', justifyContent: 'center'}}
          />
          <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        
        <SectionList
          sections={[
            {title: 'Programming ', data:pro},
            {title: 'DataStructures', data:data},
            {title: 'Recat JS', data:react},
            {title: 'React Native', data:native},
            {title: 'MangoDb', data:mango},
            {title: 'SpringBoot', data:spring},
            {title: 'Full Stack Development', data:full},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'white',
      color:'black'
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      color:'black'
    },
  })
  
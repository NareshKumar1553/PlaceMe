import { Image } from 'react-native';
import React, {useState, useEffect} from 'react';
const Check = () => {
    const [imageUrl, setImageUrl] = useState(undefined);
    useEffect(() => {
        storage()
          .ref('/' + 'FA984B65-38D4-44B1-BF02-4E7EF089773B.jpg') //name in storage in firebase console
          .getDownloadURL()
          .then((url) => {
            setImageUrl(url);
          })
          .catch((e) => console.log('Errors while downloading => ', e));
      }, []);
    
    return (
        <Image style={{height: 200, width: 200}} source={{uri: imageUrl}} />
    );
}
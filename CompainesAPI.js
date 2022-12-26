import firebase from "react-native-firebase"
export function addCompany(Company,addComplete){
    firebase.firestore()
    .collection('Users')
    .add({
        name : Company.name,
        createAt : firebase.firestore.FieldValue.serverTimestamp()
    }).then((snapshot) => snapshot.get())
    .then((CompanyData) => addComplete(CompanyData.data()))
    .catch((err) => console.log(err));
}

export async function getCompany(CompanyReceived){
    var CList = [];
    var snapshot = await firebase.firestore()
    .collection('Users')
    .orderBy('createAt')
    .get()

    snapshot.forEach((docs)=>
    {
        CList.push(doc.data());
    }
    );
    CompanyReceived(CList);
}
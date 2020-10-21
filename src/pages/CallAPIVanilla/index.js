import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, Text, View, Image} from 'react-native';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    id: '',
    createdAt: '',
  });
  useEffect(() => {
    //Call API with GET Method
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //       .then((response) => response.json())
    //       .then((json) => console.log(json));
    //     //Call API with POST Method
    //     const dataForAPI = {
    //       name: 'morpheus',
    //       job: 'leader',
    //     };
    //     console.log('data object: ', dataForAPI);
    //     console.log('data stringify: ', JSON.stringify(dataForAPI));
    //     fetch('https://reqres.in/api/users', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'applicaiton/json',
    //       },
    //       body: JSON.stringify(dataForAPI),
    //     })
    //       .then((response) => response.json())
    //       .then((json) => {
    //         console.log('post response: ', json);
    //       });
  }, []);

  const getData = () => {
    fetch('https://reqres.in/api/users/2')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    //Call API with POST Method
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicaiton/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post response: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Call API Dengan Menggunakan Vanila JS</Text>
      <Button title="Get Data" onPress={getData} />
      <Text>Respone Get Data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>

      <View style={styles.lines} />
      <Button title="Post Data Data" onPress={postData} />
      <Text>Respone Post Data</Text>
      <Text>{dataJob.id}</Text>
      <Text>{dataJob.createdAt}</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  lines: {marginVertical: 24, borderWidth: 4, color: '#424242'},
  avatar: {width: 100, height: 100, borderRadius: 50},
});

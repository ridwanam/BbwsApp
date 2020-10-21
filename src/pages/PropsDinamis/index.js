import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={styles.iconWrapper}
      />
      <Text style={{maxWidth: 50}}>{props.title}</Text>
    </View>
  );
};

const index = () => {
  return (
    <View>
      <Text style={{marginBottom: 24, textAlign: 'center'}}>
        Materi Props Dinamis
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Story
          title="maxWidth 50"
          image="https://image.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg"
        />
        <Story
          title="Item B"
          image="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg"
        />
        <Story
          title="Item C"
          image="https://image.freepik.com/free-vector/people-waving-hand-illustration-concept_52683-29825.jpg"
        />
        <Story
          title="Item D"
          image="https://image.freepik.com/free-vector/business-people-organization-office-freelance-job-character_40876-1291.jpg"
        />
        <Story
          title="Item E"
          image="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg?size=626&ext=jpg"
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
  },
});

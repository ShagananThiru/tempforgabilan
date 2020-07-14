import React from 'react';



import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';


class Loading extends React.Component {
  componentDidMount() {
    //this.animation.play();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Modal visible={isLoading} transparent>
        <View style={[styles.modelContainer, { opacity: this.props.opacity }]}>
          <ActivityIndicator size="large" color="white" />
        </View>
      </Modal>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  modelContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    opacity: 0.9

  },
});

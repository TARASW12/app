import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const SuccessModal = ({successModalVisible, goOnLevelScreenSuccess}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={successModalVisible}
      onRequestClose={goOnLevelScreenSuccess}>
      <View style={styles.centerModalSuccess}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{'Congratulations!!!'}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={goOnLevelScreenSuccess}>
            <Text style={styles.buttonText}>Next level</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerModalSuccess: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center', // vertically center
    alignItems: 'center', // horizontally center
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black for overlay
  },
  modalView: {
    width: '80%', // You can adjust this as needed
    padding: 20,
    backgroundColor: 'black',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextWrong: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
    fontStyle: 'italic',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 2, // for Android shadow
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

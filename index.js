import {NativeModules, Platform} from 'react-native';

const {NotificationSounds} = NativeModules;

export default NotificationSounds;

export const playSampleSound = () => {
  NotificationSounds.playSample();
};

export const stopSampleSound = () => {
  // const sound = Platform.OS === 'ios' ? soundObject.soundID : soundObject.url;
  NotificationSounds.stopSample();
};

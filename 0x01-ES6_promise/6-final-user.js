import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const result = [];
    values.forEach((el) => {
      if (el.status === 'fulfilled') {
        result.push({ status: el.status, value: el.value });
      } else {
        result.push({ status: el.status, value: `${el.reason}` });
      }
    });
    return result;
  });
}

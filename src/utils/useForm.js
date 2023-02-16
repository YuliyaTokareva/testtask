export const validate = (name, value, setErrors, errors, dataForm) => {
  switch (name) {
    case 'name':
      if (value.length <= 2 || value.length >= 6) {
        setErrors({
          ...errors,
          name: 'Username atleast have 3 letters'
        });
      } else {
        let newObj = { ...errors };
        delete newObj.name;
        setErrors(newObj);
      }
      break;

    case 'email':
      if (
        !new RegExp(
          /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/
          // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ).test(value)
      ) {
        setErrors({
          ...errors,
          email: 'Enter a valid email address'
        });
      } else {
        let newObj = { ...errors };
        delete newObj.email;
        setErrors(newObj);
      }
      break;

    case 'phone':
      if (!new RegExp(/(?=.*\+380[0-9]{2}[0-9]{3}[0-9]{4,5}$)/).test(value)) {
        // if (!new RegExp(/^\d{10}$/).test(value)) {
        setErrors({
          ...errors,
          phone: '+380 XXX - XX - XX'
        });
      } else {
        let newObj = { ...errors };
        delete newObj.phone;
        setErrors(newObj);
      }
      break;
    case 'img':
      if (dataForm.img.size > 2097152) {
        setErrors({
          ...errors,
          img: `Your image bigger than 1MB`
        });
      } else {
        let newObj = { ...errors };
        delete newObj.img;
        setErrors(newObj);
      }
      break;

    default:
      break;
  }
};

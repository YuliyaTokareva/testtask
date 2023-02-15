export const validate = (name, value, setErrors, errors, dataForm) => {
  switch (name) {
    case 'name':
      if (value.length <= 2) {
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
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
      if (!new RegExp(/^\d{10}$/).test(value)) {
        setErrors({
          ...errors,
          phone: '+38 (XXX) XXX - XX - XX'
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

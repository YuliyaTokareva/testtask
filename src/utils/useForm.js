export const validate = (event, name, value) => {
  //A function to validate each input values

  switch (name) {
    case 'name':
      if (value.length <= 3) {
        // we will set the error state

        setErrors({
          ...errors,
          name: 'Username atleast have 3 letters'
        });
      } else {
        // set the error state empty or remove the error for username input

        //omit function removes/omits the value from given object and returns a new object
        let newObj = omit(errors, 'name');
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
        let newObj = omit(errors, 'email');
        setErrors(newObj);
      }
      break;

    case 'phone':
      if (!new RegExp(/^\d{10}$/).test(value)) {
        setErrors({
          ...errors,
          phone: 'Phone should contains 10 numbers'
        });
      } else {
        let newObj = omit(errors, 'phone');
        setErrors(newObj);
      }
      break;

    default:
      break;
  }
};

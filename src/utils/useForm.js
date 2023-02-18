export const startFormData = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: ''
};
export const compliteFormData = (dataForm, fileField) => {
  const formData = new FormData();

  formData.append('position_id', dataForm.position_id);
  formData.append('name', dataForm.name);
  formData.append('email', dataForm.email);
  formData.append('phone', dataForm.phone);
  formData.append('photo', fileField.files[0]);
  return formData;
};

document.querySelector(".login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (isFormValid(formData)) {
      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      console.log(formDataObject);
      event.target.reset();
    } else {
      alert('All form fields must be filled in.');
    }
  });
  const isFormValid = (formData) => {
    for (const pair of formData.entries()) {
      if (!pair[1]) {
        return false;
      }
    }
    return true;
  };
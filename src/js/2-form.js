const feedbackForm = document.querySelector(".feedback-form");
let formData = { email: "", message: "" };

// console.log(feedbackForm);

const fillForm = () => {
  try {
    const formDataFormLS = JSON.parse(
      localStorage.getItem("feedback-form-state")
    );

    if (formDataFormLS === null) {
      return;
    }

    formData = formDataFormLS;

    // console.log(formDataFormLS);

    for (const key in formDataFormLS) {
      feedbackForm.elements[key].value = formDataFormLS[key];
    }
  } catch (error) {
    console.log(error);
  }
};

fillForm();

const onFormInput = (event) => {
  const formField = event.target;
  const formValue = formField.value;
  const formNameEl = formField.name;

  formData[formNameEl] = formValue;
  //   console.log(formData);

  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  //   console.log(formNameEl);
  //   console.dir(formValue); //еvent.target - це цільовий елемент це є поле по якому було введення і потім втрачений фокус
};

const feedbackFormSubmite = (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");

    return;
  }

  console.log(formData);

  event.currentTarget.reset();
  localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" };
};

feedbackForm.addEventListener("input", onFormInput);
feedbackForm.addEventListener("submit", feedbackFormSubmite);

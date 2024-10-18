import { Form, Input, useField } from "informed";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";


const IntlPhoneNumber = (props)=>{
    const { render, fieldState, fieldApi, userProps, ref } = useField(props);
    const { setValue, setTouched } = fieldApi;
    const { value, showError, error } = fieldState;
  
    const onChange = (value, countryData, event) => {
        setValue(countryData)
      }

    return(
        <IntlTelInput
        onPhoneNumberChange={onChange}
        required
      />
    )
}


const CustomComponent = () => {

    const onSubmit = ({ values }) => {
        console.log(values);
      };
 
  return (
    <>
      <h2>Informed</h2>
      <Form onSubmit={onSubmit}>
        <Input type="text" name="fname" required />
        <IntlPhoneNumber
        name="phone"
        />
       

        <button type="submit">Submit</button>
      </Form>
    </>
  );
};

export default CustomComponent;

import {Form, Input, TextArea, Button} from 'semantic-ui-react';

export default function Contact () {
    const handleOnSubmit = (e) => {
    {/* --handleOnSubmit method-- */}
    return (
        <div className="App">
            <h1>Contact Us</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field id="form-input-control-first-name" control={Input} label="First name" placeholder="First name"/>
                <Form.Field id="form-input-control-error-email" control={Input} label="Email" placeholder="Email" required icon="exclamation" iconPosition="left"/>
                <Form.Field id="form-textarea-control-opinion" control={TextArea} label="Message" placeholder="Message" required icon="exclamation" iconPosition="left"/>
           <Button type="submit" color="green">Submit</Button>
           </Form>
        </div>


    );
}
}

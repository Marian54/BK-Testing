import React, { useState } from 'react';
import FormInputs from './FormInputs';
import PopupFromButton from './PopupFromButton';

const FormSucces = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    function submitForm2() {
        setIsSubmitted(false);
    }
    return (
        <div>
                {!isSubmitted ? (
                    <FormInputs submitForm={submitForm} />
                ) : (
                    <div>
                        <FormInputs submitForm={submitForm2} />
                        <PopupFromButton />
                        </div>
                )}

        </div>

    );
};

export default FormSucces;
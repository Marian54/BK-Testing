import React from 'react';
import validate from './inputErrors';
import useForm from './useForm';
import '../Css/TextAndInputBox.css';
import '../Css/Button.css';

const FormInputs = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <div>
            <form onSubmit={handleSubmit} noValidate>
                <div className={"textStyle"}>
                    <label className={"textPosition1"}>Name</label>
                    <label className={"textPosition2"}>Address</label>
                    <label className={"textPosition3"}>Floors</label>
                    <label className={"textPosition4"}>Capacity</label>
                </div>

                <div>
                    <input
                        class={"input1 inputBox"}
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p class={"errorTextStyle textPosition1"}>{errors.name}</p>}
                </div>
                <div>
                    <textarea
                        class={"textareaPosition textareaBox"}
                        name='address'
                        id='address'
                        value={values.address}
                        onChange={handleChange}
                    />
                    {errors.address && <p class={"errorTextStyle textPosition2"}>{errors.address}</p>}
                </div>
                <div>
                    <input
                        class={"input2 inputBox"}
                        type='number'
                        name='floors'
                        min={'0'}
                        placeholder='Floors'
                        value={values.floors}
                        onChange={handleChange}
                    />
                    {errors.floors && <p class={"errorTextStyle textPosition3"}>{errors.floors}</p>}
                </div>
                <div>
                    <input
                        class={"input3 inputBox"}
                        type='number'
                        min={'1'}
                        name='capacity'
                        placeholder='Capacity'
                        value={values.capacity}
                        onChange={handleChange}
                    />
                    {errors.capacity && <p class={"errorTextStyle textPosition4"}>{errors.capacity}</p>}
                </div>
                <button className="mainActionButton buttonPosition2" type='submit'>Create lot</button>
            </form>
        </div>
    );
};

export default FormInputs;
import React, { useState } from 'react';
import s from './FormList.module.css';
import List from "../List/List";
import { Formik, Form, Field } from 'formik';

function FormList({hide, tableInfo, onDeleteItem, addNewData}) {

    const [ newData ] = useState(
        [
            {
                name: '',
                username: '',
                email: ''
            }
        ]
    );

    // function resetForm() {
    //     setNewData(
    //         {
    //             name: '',
    //             username: '',
    //             email: ''
    //         }
    //     )
    // }

    function submitHandler(newData) {
        addNewData(newData);
        // resetForm();
    }

    return(
        <Formik initialValues={{newData}} onSubmit={submitHandler}>
                <Form className={s.form__container}>
                    <List tableInfo={tableInfo} onDeleteItem={onDeleteItem}/>
                    <Field className={s.form__input} id='name' name='name' placeholder='name'/>
                    <Field className={s.form__input} id='username' name='username' placeholder='username'/>
                    <Field className={s.form__input} id='email' name='email' placeholder='email'/>
                    <div className={s.btn}>
                        <button type='submit' className={s.btn__form}>Save</button>
                        <button onClick={hide} className={s.btn__form}>Cancel</button>
                    </div>
                </Form>
        </Formik>
    )
}

export default FormList;
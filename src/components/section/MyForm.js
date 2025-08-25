"use client";
import Mybutton from "@/components/ui/Button";
import {Formik,Form,Field,ErrorMessage} from "formik";
import * as Yup from "yup";
import {useState} from "react";


export default function MyForm(){


    const ValidationSchema=Yup.object({
        Date:Yup.string()
            .required("Date Required"),
        Time:Yup.string()
            .required("Time Required"),
        Guests:Yup.number()
            .min(2,"Please Select Two Guests At Least")
            .required("Guest Selection Required"),
        Occassion:Yup.string()
            .required("Please Select One Occassion")


    })
    const initialValues = { Date: "", Time:"",Guests: "", Occassion: "" };

    const handleSubmit = (values) => {
        console.log(values);
        alert("Form submitted! Check console.");
    };





    return(

            <div className="row-start-2 col-start-3 col-end-5 mt-15">
                <Formik
                initialValues={initialValues}
                validationSchema={ValidationSchema}
                onSubmit={handleSubmit}>
                    <Form className="flex flex-col gap-3 text-black">
                        <div>
                            <label htmlFor="Date">Date:</label>
                            <Field type="date"
                            name="Date" className="border p-2 rounded w-full"
                            id="Date"/>
                            <ErrorMessage name="Date" component="div" className="text-red-500 text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="Time">Time:</label>
                            <Field
                                as="select"
                                name="Time"
                                className="border p-2 rounded w-full"
                                id="Time"
                                >
                            <option value="">Select a time</option>
                            <option value="12:00">12:00 PM</option>
                            <option value="13:00">1:00 PM</option>
                            <option value="14:00">2:00 PM</option>
                            <option value="15:00">3:00 PM</option>
                        </Field>
                        <ErrorMessage name="Time" component="div" className="text-red-500 text-sm" />     </div>
                        <div>
                            <label htmlFor="Guests">Number Of Guests:</label>
                            <Field type="number"
                                   name="Guests" className="border p-2 rounded w-full"
                                   id="Guests"/>
                            <ErrorMessage name="Guests" component="div" className="text-red-500 text-sm"/>
                        </div>
                        <div>
                            <label htmlFor="Occassion">Occasion:</label>
                            <Field as="select"
                                   name="Occassion" className="border p-2 rounded w-full"
                                   id="Occassion">
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Field>
                            <ErrorMessage name="Occassion" component="div" className="text-red-500 text-sm"/>
                        </div>
                        <Mybutton type="submit" text="Make Your Reservation" h="h-10" w="" to="/confirmation">

                        </Mybutton>




                    </Form>
                </Formik>
            </div>


    )



}
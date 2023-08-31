import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log('~ e', e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contact"
      className="font-poppins  min-h-screen flex-row items-center justify-center pt-40"
    >
      <div className="flex justify-center  w-full  md:mt-32">
        <p className=" text-3xl md:text-6xl text-yellow">CONTACT ME</p>
      </div>

      {/* FORM */}
      <div className="flex justify-center   md:mt-32">
        <div className="basis-1/2 mt-10 md:mt-0">
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.io/send/b77d8b75-7fdb-4aac-872b-8620f916ea74"
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-black"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 text-black"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    if (!form.email.trim()) tempErrors.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) tempErrors.email = 'Email is invalid.';
    if (!form.message.trim()) tempErrors.message = 'Message is required.';
    return tempErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tempErrors = validate();
    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch('https://formspree.io/f/mblkkjyq', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        });
        if (response.ok) {
          setSubmitted(true);
          setForm({ name: '', email: '', message: '' });
        } else {
          const data = await response.json();
          if (data.errors) {
            setErrors(data.errors.reduce((acc, err) => ({ ...acc, [err.field]: err.message }), {}));
          } else {
            setErrors({ general: 'Something went wrong. Please try again.' });
          }
        }
      } catch (err) {
        setErrors({ general: 'Something went wrong. Please try again.' });
      }
    } else {
      setErrors(tempErrors);
    }
  };


  return (
    <>
      <Head>
        <title>Contact | Ibim Braide</title>
        <meta name="description" content="Contact Ibim Braide" />
      </Head>
      <Layout className="pt-16">
        <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mt-12">
          <h1 className="text-3xl font-bold mb-6 text-black dark:text-light text-center">Contact Me</h1>
          {submitted ? (
            <div className="text-green-600 font-semibold text-center py-6">
              Thank you for reaching out! I will get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-4">
                <label htmlFor="name" className="block text-black dark:text-light font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-black dark:text-light`}
                  autoComplete="off"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-black dark:text-light font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-black dark:text-light`}
                  autoComplete="off"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-black dark:text-light font-medium mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-black dark:text-light`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors shadow-md text-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Contact;

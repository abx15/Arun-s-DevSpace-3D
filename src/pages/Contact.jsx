import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import Alert from '../components/Alert'
import useAlert from '../hooks/useAlert'

const Contact = () => {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const { alert, showAlert, hideAlert } = useAlert()

  // Input change handler
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })


  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setIsLoading(true);
    setCurrentAnimation('hit');

    // EmailJS send function
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,    
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,   
        {
          from_name: form.name,
          to_name: 'Arun Kumar Bind',
          from_email: form.email,
          to_email: 'developerarunwork@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY    
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsLoading(false);
        setCurrentAnimation('idle');
        showAlert({ show: true, text: 'Message sent successfully!', type: 'success' });

        setTimeout(() => {
          hideAlert();
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setIsLoading(false);
        setCurrentAnimation('idle');
        showAlert({ show: true, text: "I didn't receive your message!", type: 'danger' });
      });
  };


  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  return (
    <section className="relative flex flex-col lg:flex-row max-container h-[100vh] gap-10 lg:gap-20 py-16">
      {alert.show && <Alert {...alert} />}

      {/* Contact Form */}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>

        <form ref={formRef} className="w-full flex flex-col gap-7 mt-14" onSubmit={handleSubmit}>
          <label className="text-gray-700 font-semibold flex flex-col">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-700 font-semibold flex flex-col">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-gray-700 font-semibold flex flex-col">
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Write your message..."
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            className="btn"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* 3D Fox Canvas */}
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}>
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact

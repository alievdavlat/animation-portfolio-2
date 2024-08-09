import React from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { FiSend } from 'react-icons/fi'
import { motion } from "framer-motion";


const ContactForm = () => {

  const [formData, setFormData] = React.useState({
    name:"",
    email:'',
    message:""
  })

  const [errors, setErrors] = React.useState({})

  const [isSending, setIsSending] = React.useState(false)

  const handleChange = (e) => {
      const {name, value} = e.target
      setFormData({
        ...formData,
        [name]:value
      })
  }

  const validate = () => {
    let errors = {};
  
    if (!formData.name) {
      errors.name = 'Name is required';
    }
  
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is Invalid';
    }
  
    if (!formData.message) {
      errors.message = 'Message is Required';
    }
  
    return errors;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationeErrors = validate()
    if (Object.keys(validationeErrors).length > 0) {
        setErrors(validationeErrors)
    } else {
      setErrors({})
      setIsSending(true)

      emailjs.send(
        "service_odatpoq",
        "template_5x272fp",
        formData,
        "UlFRTkrh6P1D9SeCE"
      ).then(res =>  {
        toast.success("Message sent successfully")
        setFormData({name:'', email:'', message:''})
      }).catch(err => {
        toast.error("Failed to sent message. Please try again later.")
      }).finally(() => {
        setIsSending(false)
      })
    }
  }


  return (
    <div className='p-4 lg:w-3/4' id='contact'>
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>
        Let's Connect
      </h2>

      <motion.form
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.8, delay:0.7}}
      onSubmit={handleSubmit} className='px-20'>
        <div className='mb-4 '>
          <div className='w-full'>
            <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name} 
            placeholder='Name...' 
            onChange={handleChange} 
            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            />
            {
              errors.name && (
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                className='text-sm text-rose-800'>{errors.name}</motion.p>
              )
            }
          </div>

          <div className='w-full'>
            <input 
            type="text" 
            name="email" 
            id="email" 
            value={formData.email} 
            placeholder='Email...' 
            onChange={handleChange} 
            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            />
            {
              errors.email && (
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                className='text-sm text-rose-800'>{errors.email}</motion.p>
              )
            }
          </div>
            <br />
          <div className='mb-4'>
            <textarea 
            name="message" 
            id="message" 
            value={formData.message} 
            placeholder='Message...' 
            onChange={handleChange} 
            className='mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none'
            rows={6}
            />
            {
              errors.message && (
                <motion.p 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                className='text-sm text-rose-800'>{errors.message}</motion.p>
              )
            }
          </div>
        </div>

        <button type='submit' className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
          isSending ? "cursor-not-allowed opacity-50" : ''
        }`} disabled={isSending}>
          <div className='flex items-center justify-center gap-2'>
            {
              isSending ? 'Sending..' : 'Send'
            }
            <FiSend/>
          </div>
        </button>
      </motion.form>
    </div>
  )
}

export default ContactForm
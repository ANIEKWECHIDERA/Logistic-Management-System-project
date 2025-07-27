import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from "react-router-dom"

type FormValues = {
  company_name: string
  phone_number: number
  password: string
  business_registration_number: string
  business_address: string
  email: string
  agreeToTerms: boolean
  city: string[]
  state: string[]
  confirm_password: string
}

const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data)
  }
  return (
    <div className="flex flex-col w-[90%] lg:w-full space-between space-y-5 lg:px-20 py-10">
      <h1 className="text-5xl font-extrabold md:w-[50%]">Create a Logistics Company Account</h1>
      <p>Sign up to manage your fleet and deliveries with ease. You'll verify your account next</p>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-[70%] mt-8 space-y-4 border p-6 rounded-md mb-21 ">
      
      <div className="grid md:grid-cols-2 md:gap-10 gap-5 w-full h-[90%] ">

        {/* company name */}
        <div>
          <label className="block font-bold text-sm" htmlFor="company_name">Company Name*</label>
          <input
            {...register('company_name', { required: 'Company name is required' })}
            className= {`border p-2 w-full rounded-md ${errors.company_name &&  "border-red-500"}`}
            placeholder="Company Name"
            id="company_name"
          />
          {errors.company_name && <p className="text-red-500 text-[12px]">{errors.company_name.message}</p>}
        </div>

        {/* business registration number */}
        <div>
          <label className="block font-bold text-sm" htmlFor="business_registration_number">Business Registration Number </label>
          <input
            type="number"
            {...register('business_registration_number', { required: false, min: 1 })}
            className="border p-2 w-full rounded-md"
            id="business_registration_number"
          />
          {errors.business_registration_number && <p className="text-red-500 text-[12px]">Please enter a valid business registration number</p>}
        </div>

        {/* email */}
        <div className="space-y-1">
          <label className="block font-bold text-sm" htmlFor="email">Email*</label>
          <input
            type="email"
            {...register('email', { required: true})}
            className="border p-2 w-full rounded-md"
            placeholder="Email"
            id="email"
          />
          {errors.email ? <p className="text-red-500 text-[12px]">Please enter a valid Email Address</p> : <p className="text-[12px]">We'll send a verification code to this email</p>}
        </div>

        {/* business address */}
        <div>
          <label className="block font-bold text-sm" htmlFor="business_address">Business Adddress*</label>
          <input
            type="text"
            {...register('business_address', { required: true, min: 1 })}
            className= {`border p-2 w-full rounded-md ${errors.business_address &&  "border-red-500"}`}
            id="business_address"
          />
          {errors.business_address && <p className="text-red-500 text-[12px]">Please enter a valid address</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block font-bold text-sm" htmlFor="phone_number">Phone Number* </label>
          <input
            type="number"
            {...register('phone_number', { required: true, min: 1 })}
            className={`border p-2 w-full rounded-md ${errors.phone_number &&  "border-red-500"}`}
            id="phone_number"
          />
          {errors.phone_number && <p className="text-red-500 text-[12px]">Please enter a valid Phone Number</p>}
        </div>

        {/* city */}
        <div>
          <label className="block font-bold text-sm" htmlFor="city">City*</label>
          <select {...register('city', { required: true })} className={`border p-2 w-full rounded-md ${errors.city &&  "border-red-500"}`} id="city">
            <option value="">-- Select City --</option>
          </select>
          {errors.city && <p className="text-red-500 text-sm">Please select a city</p>}
        </div>

        {/* Password with Toggle */}
        <div>
            <label className="block font-bold text-sm" htmlFor="password">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: true, minLength: 6 })}
                className={`border p-2 w-full pr-10 ${errors.password &&  "border-red-500"}`}
                placeholder="Enter password"
                id="password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-2 top-3.5 text-gray-600"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-[12px]">Minimum 6 characters required</p>}
        </div>

        {/* state */}
        <div>
          <label className="block font-bold text-sm" htmlFor="state">State*</label>
          <select {...register('state', { required: true })} className={`border p-2 w-full rounded-md ${errors.state &&  "border-red-500"}`}id="state">
            <option value="">-- State --</option>
          </select>
          {errors.state && <p className="text-red-500 text-[12px]">Please select a state</p>}
        </div>

        {/* Confirm Password with Toggle */}
        <div>
            <label className="block font-bold text-sm" htmlFor="confirm_password">Confirm Password*</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                {...register('confirmPassword', { required: true, minLength: 6 })}
                className={`border p-2 w-full pr-10 rounded-md ${errors.confirmPassword &&  "border-red-500"}`}
                placeholder="Re-enter Password"
                htmlFor="confirm_password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="absolute right-2 top-3.5 text-gray-600"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {errors.confrimPassword && <p className="text-red-500">Password does not match</p>}
        </div> 

      </div>

      {/* Agree to Terms */}
      <div className="md:w-[50%] gap-5 space-around flex flex-col text-center">
        <label className=" text-sm" htmlFor="agree_to_terms">
          <input
            type="checkbox"
            {...register('agreeToTerms', { required: true })}
            className="m-[10px] "
            id="agree_to_terms"
          />
          I agree to the terms and conditions
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-[12px]">You must agree before submitting</p>
        )}

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md w-full">
          Create Account
        </button>
        <p>Already have an account? 
        <Link to="/login" className="ml-2 font-bold text-[#1F2A44]">
          Log In
        </Link>
        </p>

      </div>

      </form>
    </div>
  )
}

export default RegistrationPage





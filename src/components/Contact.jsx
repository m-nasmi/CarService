import React from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {FaPhoneAlt} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const Contact = () => {
  return (
    <div><section className="py-6 dark:bg-gray-800 dark:text-gray-50">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
                <FaLocationDot className='w-5 h-5 mr-2 sm:mr-6'/>
					<span>147/A boowelikada leemagahakotuwa</span>
				</p>
				<p className="flex items-center">
                <FaPhoneAlt className='w-5 h-5 mr-2 sm:mr-6'/>
					<span>+94765232442</span>
				</p>
				<p className="flex items-center">
                <IoMdMail className='w-5 h-5 mr-2 sm:mr-6'/>
					<span>mdnsmi2442@gmail.com</span>
				</p>
			</div>
		</div>
		<form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Muhammed Nasmi" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="mdnsmi2442@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
			</label>
		</form>
	</div>
</section></div>
  )
}

export default Contact
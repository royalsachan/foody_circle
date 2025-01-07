import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import Dialog, { DialogContent, DialogHeader, DialogTitle } from '../Ui/Dialog'; // Adjust the path as necessary

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
    helpType: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
    setFormData({
      fullName: '',
      email: '',
      mobile: '',
      message: '',
      helpType: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const helpOptions = [
    "I need help with my online order.",
    "I found incorrect/outdated information on a page.",
    "There is a photo/review that is bothering me and I would like to report it.",
    "The website/app are not working the way they should.",
    "I would like to give feedback"
  ];

  return (
    <>
      {/* Contact Us Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <MessageSquare size={20} />
        Contact Us
      </button>

      {/* Modal Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>We would love to hear from you!</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Help Type Selection */}
            <div className="space-y-2">
              <label className="block text-gray-600">
                How can we help you?<span className="text-red-500">*</span>
              </label>
              <select
                name="helpType"
                value={formData.helpType}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select an option</option>
                {helpOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Full Name */}
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name*"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address*"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number (optional)"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Type your message*"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 px-6 rounded-lg 
                       hover:bg-red-600 transition-colors duration-300 font-medium"
            >
              Submit Feedback
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactForm;
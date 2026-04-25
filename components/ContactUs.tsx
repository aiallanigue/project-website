'use client';

import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    help: '',
    consent: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-[40px] p-8 shadow-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold">Contact Us</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-black focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-black focus:outline-none"
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-black focus:outline-none"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone *"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-black focus:outline-none"
          required
        />
        <textarea
          name="help"
          placeholder="How Can We Help? *"
          value={formData.help}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-black focus:outline-none"
          rows={4}
          required
        />
        <label className="flex items-start gap-3 text-sm leading-6">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-gray-300"
          />
          <span>
            I Consent to Receive SMS Notifications, Alerts & Occasional Marketing Communication from company. Message frequency varies. Message & data rates may apply. Text HELP to (XXX) XXX-XXXX for assistance. You can reply STOP to unsubscribe at any time.
          </span>
        </label>
        <button type="submit" className="w-full rounded-xl bg-[#b12f1c] py-4 text-white font-semibold transition hover:bg-[#a22b1a]">
          Submit
        </button>
      </form>
    </div>
  );
}

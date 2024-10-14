

import React, { useState } from 'react';

const Settings = () => {
   
    const [emailNotifications, setEmailNotifications] = useState(false);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [timezone, setTimezone] = useState('');
    const [language, setLanguage] = useState('');

    const handleSave = () => {
        
        alert('Settings saved!');
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

           
             

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={() => setEmailNotifications(!emailNotifications)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">Email Notifications</label>
                </div>
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={smsNotifications}
                        onChange={() => setSmsNotifications(!smsNotifications)}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-700">SMS Notifications</label>
                </div>
            </div>

          
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Timezone</label>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select your timezone</option>
                        <option value="GMT">GMT</option>
                        <option value="UTC">UTC</option>
                        <option value="CST">CST</option>
                        <option value="EST">EST</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Language</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="block w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">Select your language</option>
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="Mr">Marathi</option>
                    </select>
                </div>
            </div>

            <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Save Changes
            </button>
        </div>
    );
};

export default Settings;

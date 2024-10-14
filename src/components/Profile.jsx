

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        <div className='flex justify-center items-center mt-[60px]'>
            <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md">
                <h2 className="mt-4 text-2xl font-bold text-center">Vaishnavi Thorat</h2>
                <p className="mt-2 text-gray-500 text-center">Passionate about building efficient web applications.</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <a 
                        href="https://www.linkedin.com/in/vaishnavi-thorat05/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-blue-500 hover:text-blue-700"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/vai-sys" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-gray-800 hover:text-gray-600"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-1" />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;

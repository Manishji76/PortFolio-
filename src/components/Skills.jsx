import React from 'react';

const Skills = () => {
  const skills = [
    "Penetration Testing", "Ethical Hacking", "Network Security", "Kali Linux", 
    "Bash Scripting", "Web Development", "MERN Stack", "Python", "PHP"
  ];

  return (
    <div id='skills' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>Skills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((skill, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md text-center'>
            <h2 className='text-xl font-semibold'>{skill}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';

const Tools = () => {
  const tools = [
    "Nmap", "Metasploit", "Burp Suite", "Wireshark", "Kali Linux", 
    "Nessus", "Meterpreter", "Aircrack-ng", "John the Ripper"
  ];

  return (
    <div id='tools' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <h1 className='text-4xl font-bold text-center mb-8'>Tools</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {tools.map((tool, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-md text-center'>
            <h2 className='text-xl font-semibold'>{tool}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
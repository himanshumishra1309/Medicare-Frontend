import React, { useState } from 'react';

function ShowAndPutAlerts({ onClose }) {  // Add onClose prop to handle closing
  const [alertMessage, setAlertMessage] = useState('');

  const handleSendAlert = () => {
    alert(`Alert sent: ${alertMessage}`);
    setAlertMessage('');  // Clear the input after sending the alert
  };

  return (
    <div className='w-1/3 h-4/5 bg-white rounded-lg flex items-center flex-col gap-4 p-6 relative'>
      {/* Cross button to close the popup */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-600 text-xl font-bold"
      >
        &times;
      </button>
    <div className='h-full flex flex-col justify-between'>
      <h3 className="text-xl font-semibold">No Alerts Yet!</h3>
      <div>
      <input
        type="text"
        value={alertMessage}
        onChange={(e) => setAlertMessage(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type your alert message"
        />
      <button
        onClick={handleSendAlert}
        className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
        >
        Send Alert
      </button>
    </div>
    </div>
    </div>
  );
}

export default ShowAndPutAlerts;

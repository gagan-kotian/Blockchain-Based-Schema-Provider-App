import { ethers } from "ethers";
import { useState } from "react";

const Buy = ({ state }) => {
  const [name, setName] = useState("");
  const [usn, setUSN] = useState("");
  const [googleDriveLink, setGoogleDriveLink] = useState("");
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    try {
      const amount = ethers.parseEther("0.000001");
      const transaction = await contract.buyChai(
        name,
        usn,
        googleDriveLink,
        branch,
        subject,
        message,
        { value: amount }
      );
      await transaction.wait();
      console.log("Transaction is done");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 w-1/2">
      <form onSubmit={buyChai} className="space-y-4 bg-gray-800 p-8 rounded-lg">
        <div>
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-300">USN</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={usn}
            onChange={(e) => setUSN(e.target.value)}
            placeholder="Enter Your USN"
          />
        </div>
        <div>
          <label className="block text-gray-300">Google Drive Link</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={googleDriveLink}
            onChange={(e) => setGoogleDriveLink(e.target.value)}
            placeholder="Enter Google Drive Link"
          />
        </div>
        <div>
          <label className="block text-gray-300">Branch</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            placeholder="Enter Your Branch"
          />
        </div>
        <div>
          <label className="block text-gray-300">Subject</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Your Subject"
          />
        </div>
        <div>
          <label className="block text-gray-300">Message</label>
          <input
            type="text"
            className="block w-full mt-1 px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-100 focus:outline-none focus:border-blue-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Your Message"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-blue-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={!state.contract}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default Buy;

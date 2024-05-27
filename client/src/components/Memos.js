import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const fetchMemos = async () => {
      if (contract) {
        const memos = await contract.getMemos();
        setMemos(memos);
      }
    };
    fetchMemos();
  }, [contract]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-8 text-center text-white">
        Messages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memos.map((memo, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md bg-gradient-to-br from-gray-800 to-gray-900 text-white"
          >
            <div className="p-6 h-64 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-2">{memo.name}</h3>
              <p className="text-sm">USN: {memo.usn}</p>
              <p className="text-sm">
                Google Drive Link :
                <a
                  href={memo.message}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  {memo.googleDriveLink}
                </a>
              </p>

              <p className="text-sm">Branch: {memo.branch}</p>
              <p className="text-sm">Subject: {memo.subject}</p>
              <p className="text-sm">Message: {memo.message}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-700 bg-opacity-75 text-sm">
              <p className="truncate">From: {memo.from}</p>
              <p>{new Date(Number(memo.timestamp) * 1000).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memos;

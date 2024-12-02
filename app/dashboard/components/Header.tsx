"use client";
import { MdDownload } from "react-icons/md";

export default function Header() {
  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:3001/api_secret");
      const apiSecret = await response.text();
      console.log("apiSecret", apiSecret);

      const getImageResponse = await fetch("https://testd5-img.azurewebsites.net/api/imgdownload", { mode: 'no-cors' });
      const imageData = await getImageResponse.blob();
      const url = URL.createObjectURL(imageData);
      const link = document.createElement("a");
      link.href = url;
      link.download = "downloaded_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image:", error);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-xl font-bold ml-6">Reports</h2>
      <div className="flex space-x-4">
        <button
          onClick={handleDownload}
          className="px-4 py-2 rounded flex items-center gap-2"
        >
          <MdDownload />
          Download
        </button>
      </div>
    </header>
  );
}

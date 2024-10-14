export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Contact Image */}
      <img
        src="https://th.bing.com/th?id=OIP.8zbz4c9ufm-7_E8XlRXVxQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        alt="Contact Us"
        className="mb-6 h-48 w-48 object-cover rounded-full"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-2">Contact Us</h1>

      {/* Description */}
      <p className="text-lg text-center text-white mb-6 max-w-md">
        Welcome to our simple Next.js application styled with Tailwind CSS. Reach out to us for any inquiries or assistance.
      </p>

      {/* Contact Options */}
      <div className="flex flex-col space-y-4">
        {/* WhatsApp Contact Option */}
        <a
          href="https://web.whatsapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white py-2 px-4 rounded text-center hover:bg-green-600 transition-all transform hover:scale-105"
        >
          Message us on WhatsApp
        </a>

        {/* Email Contact Option */}
        <a
          href="mailto:your-email@example.com?subject=Contact Us&body=Hello, I would like to get in touch."
          className="bg-blue-500 text-white py-2 px-4 rounded text-center hover:bg-blue-600 transition-all transform hover:scale-105"
        >
          Email us
        </a>
      </div>
    </div>
  );
}

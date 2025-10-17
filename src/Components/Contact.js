import { useRef, useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    if (!isOpen) return null;

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatusMessage('');

        // --- IMPORTANT: Replace with your actual IDs from EmailJS ---
        const serviceID = 'service_0pi98kh';
        const templateID = 'template_wa1svvg';
        const publicKey = '-vbYO32wOnk43zcri';

        window.emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatusMessage('Message sent successfully!');
                setIsLoading(false);
                setTimeout(() => {
                    onClose();
                    setStatusMessage('');
                }, 2000);
                 form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatusMessage('Failed to send message. Please try again.');
                setIsLoading(false);
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md m-4 relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-3xl font-light">&times;</button>
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_name">Your Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="from_name" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from_email">Your Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="from_email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32" name="message" required></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-indigo-300" type="submit" disabled={isLoading}>
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                        {statusMessage && <p className={`text-sm ${statusMessage.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{statusMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactModal;
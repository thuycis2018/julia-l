export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-green-5 text-white p-4 text-center mt-20">
            <p>&copy; {currentYear} Julia Le. All rights reserved.</p>
        </footer>
    );
}
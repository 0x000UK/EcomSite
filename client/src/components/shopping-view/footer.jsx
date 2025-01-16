import {Link} from "react-router-dom";
import { HousePlug} from "lucide-react";

function Footer () {
  return (
    <div className="min-h-screen flex flex-col justify-end">
      <footer className="bg-gray-50">
        <div className="px-4 py-6 mx-auto max-w-screen-xl flex justify-between items-center">
            <Link to="/shop/home" className="flex items-center gap-2">
                <HousePlug className="h-6 w-6" />
                <span className="font-bold">Ecommerce</span>
            </Link>
            <ul className="flex space-x-10 justify-end text-gray-600">
                <li>
                    <a className="hover:text-gray-900 hover:underline" href="./home">Home</a>
                </li>
                <li>
                    <a className="hover:text-gray-900 hover:underline" href="./about">About</a>
                </li>
                <li>
                    <a className="hover:text-gray-900 hover:underline" href="./privacyPolicy">Privacy Policy</a>
                </li>
            </ul>
            <div className="text-center text-gray-600 py-4">
                &copy; {new Date().getFullYear()} Ecommerce. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

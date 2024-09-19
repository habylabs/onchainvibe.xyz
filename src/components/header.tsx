import Link from 'next/link';
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center py-4 px-8 bg-purple-100">
      <div className="flex items-center space-x-6">
        <Image src="/logo.svg" alt="logo" width={200} height={76} className="w-32 h-8 text-purple-500" />
        {/*
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/rank" className="text-purple-700 hover:text-purple-900">
                Rank
              </Link>
            </li>
            <li>
              <Link href="/tokenomics" className="text-purple-700 hover:text-purple-900">
                How it works
              </Link>
            </li>
          </ul>
        </nav>
        */}
      </div>
      {/*
      <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
        Connect Wallet
      </button>
      */}
    </header>
  );
};

export default Header;
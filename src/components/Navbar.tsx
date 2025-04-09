import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-4 px-4 md:px-8 border-b border-gray-600 shadow-2xl shadow-gray-400">
                <div className="text-2xl font-bold text-violet-300">One-Go</div>
                <ul className="hidden md:flex items-center space-x-6 text-gray-300 font-semibold">
                    <li><Link href="#about" className="hover:text-violet-300">About</Link></li>
                    <li><Link href="#features" className="hover:text-violet-300">Features</Link></li>
                    <li><Link href="#pricing" className="hover:text-violet-300">Pricing</Link></li>
                    <li><Link href="#contact" className="hover:text-violet-300">Contact</Link></li>
                    <li><button className="text-sm">Login</button></li>
                    <li><button className="text-sm px-4 py-2 rounded-full">Sign Up</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar

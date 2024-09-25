import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="container text-white rounded-4" style={{ background: 'linear-gradient(130deg, #3eadc9, #506bc2)' }}>
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mt-5">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Features</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">About</a></li>
                    </ul>
                    <p className="text-center text-white">© 2024 MuhammadYousaf</p>
                </footer>
            </div>
        </div>
    )
}

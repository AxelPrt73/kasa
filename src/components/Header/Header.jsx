import React from "react"
import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"

export default function Header() {
    return (
        <header className="header">
            <Logo />
            <NavBar />
        </header>
    )
}

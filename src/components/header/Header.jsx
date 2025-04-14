import React from "react";

const Header = ({ text }) => {
    return (
        <section className="h-20 md:h-36 w-full flex items-center" style={{
            backgroundColor: `hsl(50, 80%, 90%, 0.5)`, // Light yellow with 50% opacity
            backgroundImage: `linear-gradient(to right, hsl(var(--pc) / var(--tw-bg-opacity)), hsl(50, 80%, 90%, 0.5))` // Example using primary color and light yellow
        }}>
            <div className="w-full mx-auto px-2 lg:w-9/12 md:px-6 ">
                <h1 className="text-xl md:text-3xl font-bold text-secondary-content">{text}</h1>
            </div>
        </section>
    );
};

export default Header;
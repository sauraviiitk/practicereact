import React from "react";

function Footer() {
    return (
        <>
            <div className="footer w-full h-full   bg-slate-700 text-white flex justify-around p-8">
                {/* Sneakers Section */}
                <div className="sneakers flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Sneakers</h3>
                    <ul className="flex flex-col gap-4 leading-6">
                        <li>Air Force 1</li>
                        <li>Huarache</li>
                        <li>Air Max 90</li>
                        <li>Air Max 95</li>
                    </ul>
                </div>

                {/* Types of Shoes Section */}
                <div className="types-of-shoes flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Types of Shoes</h3>
                    <ul className="flex flex-col gap-4 leading-6">
                        <li>All Shoes</li>
                        <li>Custom Shoes</li>
                        <li>Jordan Shoes</li>
                        <li>Running Shoes</li>
                    </ul>
                </div>

                {/* Clothing Section */}
                <div className="clothing flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Clothing</h3>
                    <ul className="flex flex-col gap-4 leading-6">
                        <li>All Clothing</li>
                        <li>Modest Wear</li>
                        <li>Hoodies</li>
                        <li>Shirts & Tops</li>
                    </ul>
                </div>

                {/* Kids' Section */}
                <div className="kids-section flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Kids' Section</h3>
                    <ul className="flex flex-col gap-4 leading-6">
                        <li>Infant and Toddler</li>
                        <li>Kid's Shoes</li>
                        <li>Kid's Jordan Shoes</li>
                        <li>Kids's Basketball Shoes</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Footer;
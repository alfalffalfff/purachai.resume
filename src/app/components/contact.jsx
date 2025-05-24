'use client';

import React, { useState } from "react";

export default function Contact() {

    const [openpersonal, setOpenpersonal] = useState(false)
    const [openphone, setOpenphone] = useState(false)
    const [openemail, setOpenemail] = useState(false)
    const [openimage, setOpenimage] = useState(false)

    return (
        <div>
            <div className="mt-60 mb-5 justify-center flex w-full">
                <p className="text-3xl font-black">
                    CONTACT
                </p>
            </div>
            <div className="justify-center flex w-full">
                <div className="text-xl flex px-10 gap-x-10 w-90 justify-center 
                rounded-xl shadow-xl">
                    <div className="flex gap-10 m-1">

                        <div className={`${openimage ? " bg-zinc-200 " : ""}  rounded-xl cursor-pointer  hover:bg-zinc-200`}
                            onClick={() => setOpenimage(!openimage)}>
                            <i className="m-2 fa-solid fa-image" />
                        </div>

                        <div className={`${openpersonal ? " bg-zinc-200 " : ""}  rounded-xl cursor-pointer  hover:bg-zinc-200`}
                            onClick={() => setOpenpersonal(!openpersonal)}>
                            <i className="m-2 fa-solid fa-circle-user" />
                        </div>

                        <div className={`${openphone ? " bg-zinc-200 " : ""}  rounded-xl cursor-pointer  hover:bg-zinc-200`}
                            onClick={() => setOpenphone(!openphone)}>
                            <i className="m-2 fa-solid fa-phone" />
                        </div>

                        <div className={`${openemail ? " bg-zinc-200 " : ""}  rounded-xl cursor-pointer  hover:bg-zinc-200`}
                            onClick={() => setOpenemail(!openemail)}>
                            <i className="m-2 fa-solid fa-envelope" />
                        </div>

                        <div className="cursor-pointer  hover:bg-zinc-200 rounded-xl">
                            <a href="https://github.com/alfalffalfff" target="_blank">
                                <i className="m-2 fa-brands fa-github" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            {/*image*/}
            {openimage ? (<div className="justify-center flex w-full mt-5">
                <div className="relative w-90 justify-center rounded-xl shadow-xl p-4">
                    <button className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white rounded-full text-sm flex items-center justify-center w-4 h-4 cursor-pointer"
                        onClick={() => setOpenimage(!openimage)}>
                        X
                    </button>
                    <div className="m-20 flex bg-zinc-700 ">
                        <img src="/suit.png"
                            alt="myself"
                            className="max-w-full h-auto shadow-xl mix-blend-hard-light"
                        />
                    </div>
                </div>
            </div>) : (null)}
            {/* Personal Data Box */}
            {openpersonal ? (<div className="justify-center flex w-full mt-5">
                <div className="relative w-90 justify-center rounded-xl shadow-xl p-4">
                    <button className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white rounded-full text-sm flex items-center justify-center w-4 h-4 cursor-pointer"
                        onClick={() => setOpenpersonal(!openpersonal)}>
                        X
                    </button>
                    <div>
                        <p className="font-bold">Birthday</p>
                        <p>22/12/1996</p>
                        <p className="font-bold">Address</p>
                        <p>Pracharat-sai2 bangsue bangkok 10800</p>
                    </div>
                </div>
            </div>) : (null)}
            {/* Tel Box */}
            {openphone ? (<div className="justify-center flex w-full mt-5">
                <div className="relative w-90 justify-center rounded-xl shadow-xl p-4">
                    <button className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white rounded-full text-sm flex items-center justify-center w-4 h-4 cursor-pointer"
                        onClick={() => setOpenphone(!openphone)}>
                        X
                    </button>
                    <p className="pt-2 pb-2">
                        <i className="fa-solid fa-phone mr-3"
                        />093-1249581
                    </p>
                </div>
            </div>) : (null)}
            {/* Email Box */}
            {openemail ? (<div className="justify-center flex w-full mt-5">
                <div className="relative w-90 justify-center rounded-xl shadow-xl p-4">
                    <button className="absolute top-1 right-1 bg-red-500 hover:bg-red-700 text-white rounded-full text-sm flex items-center justify-center w-4 h-4 cursor-pointer"
                        onClick={() => setOpenemail(!openemail)}>
                        X
                    </button>
                    <p className="pt-2 pb-2">
                        <i className="fa-solid fa-envelope mr-3"
                        />purachai.alf@gmail.com
                    </p>
                </div>
            </div>) : (null)}
        </div>


    );
}


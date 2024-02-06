import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import Button from '@/components/button'

export default function Home() {
    return (
        <main className="px-8 py-12 ">
            <div className="GRID mx-auto grid max-w-[976px] auto-rows-[150px]  grid-cols-2 gap-4 sm:grid-cols-5 md:auto-rows-[200px] ">
                <div className="CARD col-span-2 row-span-2 flex min-h-[150px] flex-col justify-around px-5 py-6 sm:col-span-3 sm:min-h-[250px]">
                    <h1 className=" text-5xl">Hey I'm Ryan</h1>
                    <h2 className="text-2xl">
                        Software Developer from Bellingham Washington
                    </h2>
                    <p>
                        I graduated with a BS in Computer Science from Western
                        Washington University and work on all things technology,
                        including Full-Stack development, software engineering,
                        and game design.
                    </p>
                    <p>Check out some of my work below and reach out</p>
                </div>
                <div className="CARD col-span-2 row-span-2 ">
                    <img
                        src={'/images/prof.JPG'}
                        alt="profile picture of me"
                        className=" object-cover"
                        width="800"
                        height="800"
                    />
                </div>
                <div className="CARD relative col-span-2 row-span-2 px-5 py-6">
                    <svg
                        className="absolute bottom-0 left-0"
                        viewBox="0 0 420 376"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M420 376H0.5C0.5 348.116 24.8808 283.875 88.4041 249.986C167.808 207.623 249.449 225.855 264.547 139.522C276.625 70.4551 347.865 12.2971 420 0.5V376Z"
                            fill="#F4B72C"
                        />
                    </svg>

                    <h2 className="text-2xl">Turner HR Services</h2>
                    <h3>Company Website</h3>
                    <Link
                        className=" absolute bottom-3 left-3 w-12"
                        href={'/projects/turner-hr-services'}
                    >
                        <svg
                            className=" -rotate-45 fill-[#1c1c1e]"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
                                fillRule="nonzero"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="CARD relative col-span-2 bg-[#162316] px-4 py-4 text-[#FFF] ">
                    <svg
                        className="absolute bottom-0 left-0 h-3/4"
                        viewBox="0 0 549 161"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M206 75.6621C148.4 113.262 96 87.6621 56.5 112.662C17 137.662 0.5 160.662 0.5 160.662H431.5H549C549 160.662 509.5 85.5 453 47.5C396.5 9.49999 378 -2.43796 330 1.16204C270 5.66204 278 28.6621 206 75.6621Z"
                            fill="#DD9963"
                        />
                    </svg>

                    <h2 className=" text-2xl">With a Twist</h2>
                    <h3>Mobile Bar Website</h3>
                    <Link
                        className=" absolute bottom-3 left-3 w-12"
                        href={'/projects/with-a-wist'}
                    >
                        <svg
                            className="-rotate-45 fill-[white]"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
                                fillRule="nonzero"
                            />
                        </svg>
                    </Link>
                </div>
                <div className="CARD relative col-span-1 row-span-2">
                    <svg
                        className="absolute -left-5 bottom-0 z-0 h-3/4"
                        viewBox="0 0 293 343"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 343L292.5 343C292.5 317.98 273.988 260.337 229.939 229.927C174.878 191.916 118.265 208.275 107.796 130.809C99.4204 68.8353 50.0204 11.5038 0 0.918335V343Z"
                            fill="#F46137"
                        />
                    </svg>
                    <div className="CONTENT relative z-10 px-4 py-4 text-right">
                        <h2 className="text-2xl">Movie Selector</h2>
                        <h3 className="font-bold">Film Selector Web App</h3>
                        <Image
                            className=" mx-auto mt-4 w-3/4"
                            src={'/images/MovieSelectorIcon.png'}
                            alt="picture"
                            width={500}
                            height={500}
                        ></Image>
                    </div>
                    <Link
                        href={'movie-selector'}
                        className=" absolute bottom-3 left-3 w-12"
                    >
                        <svg
                            className=" -rotate-45"
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
                                fill-rule="nonzero"
                            />
                        </svg>
                    </Link>
                </div>
                <Button
                    backgroundColor=""
                    isExternal={false}
                    href="/"
                    icon={
                        <div className="w-1/2 rounded-full bg-[white] p-4">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z"
                                    fill="#0F0F0F"
                                />
                            </svg>
                        </div>
                    }
                ></Button>

                <Button
                    backgroundColor="bg-[#0d66c2]"
                    isExternal={true}
                    href="https://www.linkedin.com/in/ryan-t-turner/"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-white w-1/3"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    }
                ></Button>

                <div className="col-span-2 grid grid-cols-subgrid grid-rows-subgrid sm:col-span-1 sm:row-span-2">
                    <Button
                        backgroundColor="bg-[#1C1C1E]"
                        isExternal={true}
                        href="https://github.com/turnerr8"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-white w-1/2"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        }
                    ></Button>
                    <Button
                        backgroundColor=""
                        isExternal={false}
                        href="/Resume.pdf"
                        icon={
                            <svg
                                className=" w-1/2"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
                            </svg>
                        }
                    ></Button>
                    <div className="CARD col-span-1 row-span-1">
                        <p>resume</p>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            width="24"
                            height="24"
                        >
                            <g>
                                <path
                                    d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		                            c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"
                                />
                                <path
                                    d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		                            c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"
                                />
                                <path
                                    d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
                                    h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
                                    c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
                                    c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="CARD col-span-2 row-span-2">
                    <h2>More Projects</h2>
                    <h2>More Projects</h2>
                    <h2>More Projects</h2>
                </div>
                <div className="CARD col-span-2">
                    <img
                        src={
                            'https://upload.wikimedia.org/wikipedia/commons/a/a6/Baby_Keem_-_Orange_Soda.png'
                        }
                        alt="song cover art"
                        width={240}
                        height={240}
                    ></img>
                    <h3>ORANGE SODA</h3>
                    <h5>Baby Keem</h5>
                </div>
                <div className="CARD col-span-2">
                    <h2>All of Us Stranger</h2>
                    <div className="RATING"></div>
                    <img
                        src="https://lh3.googleusercontent.com/proxy/y9YMc4dSWJxSqm4EcrJLnIdSSxmHGjSNtvkS5U5qeXWuUbqujdxOGkZb2rNfwIJJEMeYGEslBlR4o3DoIuqXEOoH_Zu3DxXLIwwVBtKXSUTMCQ3I5Q"
                        alt="movie cover"
                    />
                </div>
            </div>
        </main>
    )
}

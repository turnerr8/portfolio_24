import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

interface Props {
    backgroundColor: string
    isExternal: boolean
    href: string
    icon: ReactElement
}
const Button = ({ backgroundColor, isExternal, href, icon }: Props) => {
    return (
        <a
            href={href}
            target={`${isExternal ? '_blank' : '_self'}`}
            className={` CARD relative col-span-1 row-span-1 ${backgroundColor}  flex items-center justify-center `}
        >
            {icon}
            {isExternal && (
                <svg
                    width={24}
                    height={24}
                    className=" fill-white absolute bottom-4 left-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                >
                    <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
                </svg>
            )}
        </a>
    )
}

export default Button

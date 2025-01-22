import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import React from 'react'

const Footer = ( { user, type = 'desktop' }: FooterProps) => {
    const handleLogOut = async () => {
        await logoutAccount();
    }
  return (
    <footer className='footer text-black-1'>
        <div className={type === "mobile" ? 'footer_name-mobile' : "footer_name"}>
            <p className='text-xl text-bold text-gray-700'>
                {user?.name[0]}
            </p>
        </div>

        <div className={type === "mobile" ? 'footer_email-mobile' : "footer_email"}>
            <h1 className="text-14 truncate font-semibold text-gray-700">
                {user?.name}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
                {user?.email}
            </p>
        </div>
        <div className="footer_image" onClick={handleLogOut}>
            <Image src="icons/logout.svg" fill alt="logout" />
        </div>
    </footer>
  )
}

export default Footer
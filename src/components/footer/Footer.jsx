import React from 'react'
import { FooterLink, FooterRights, FooterNotes } from '@/exports'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 px-5 lg:px-10 py-5 items-center justify-center bg-scheme-grey'>
      <FooterLink />
      <FooterNotes />
      <FooterRights />
    </footer>
  )
}

export default Footer
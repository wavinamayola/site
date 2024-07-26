'use client'

import EmailIcon from "@/svg/EmaiIIcon"
import GithubIcon from "@/svg/GithubIcon"
import InstagramIcon from "@/svg/InstagramIcon"
import LinkedInIcon from "@/svg/LinkedIn"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Footer() {
  const { theme } = useTheme()
  const [fontColor, setFontColor] = useState('#1f2937')

  useEffect(() => {
    setFontColor(theme === 'dark' ? 'white' : '#1f2937')
   }, [theme])

  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col justify-center text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li className="">
          <a
            rel="noopener noreferrer"
            href="mailto:waybemayols@gmail.com"
          >
            <EmailIcon color={fontColor} />
          </a>
        </li>
        <li className="pl-20">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/wavinamayola"
          >
            <GithubIcon color={fontColor} />
          </a>
        </li>
        <li className="pl-20">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/wavina-mayola/"
          >
            <LinkedInIcon color={fontColor} />
          </a>
        </li>
        <li className="pl-20">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/__rndm.jpg/"
          >
            <InstagramIcon color={fontColor} />
          </a>
        </li>
      </ul>
      <p className="mt-12 text-sm text-neutral-400 dark:text-neutral-300 text-center">
        © Wavina Mayola {new Date().getFullYear()}
      </p>
    </footer>
  )
}

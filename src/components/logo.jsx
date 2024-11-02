'use client'
import Image from 'next/image'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import vbalanceLogo from "../assets/images/logos/Logo not background_Монтажна область 1.png"

export function Logo({ className }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut',
  }

  return (
    <Image src={vbalanceLogo} className='w-36 sm:w-72' alt="logo">
    </Image>
  )
}

export function Mark({ className }) {
  return (
    <h1>logo text</h1>
  )
}

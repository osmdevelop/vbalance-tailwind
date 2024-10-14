'use client';

import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

import { useParams } from 'next/navigation'; // Import useParams to get the dynamic language
import en from '../app/[lang]/dictionaries/en.json'; // English translations
import uk from '../app/[lang]/dictionaries/uk.json'; // Ukrainian translations

function SitemapLinks({ children }) {
  return <ul className="mt-2 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-[hover]:text-gray-950/75"
      />
    </li>
  )
}

function Sitemap() {
  const params = useParams();
  const lang = params?.lang || 'en';  // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  return (
    <>
      <div>
        <SitemapLinks>
          <SitemapLink href="#about">{dict.footer.sitemap.about}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="#services">{dict.footer.sitemap.services}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="#testimonials">{dict.footer.sitemap.testimonials}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="#blog">{dict.footer.sitemap.blog}</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="#contact">{dict.footer.sitemap.contact}</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  );
}

// function SocialIconX(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
//       <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
//     </svg>
//   )
// }

// function SocialIconFacebook(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
//       />
//     </svg>
//   )
// }

// function SocialIconLinkedIn(props) {
//   return (
//     <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
//       <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
//     </svg>
//   )
// }
function SocialIconInstagram(props) {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  )
}
function SocialIconFacebook(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
    </svg>
  )
}
function SocialIconYoutube(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M16.23 7.102c-2.002-.136-6.462-.135-8.461 0-2.165.148-2.419 1.456-2.436 4.898.017 3.436.27 4.75 2.437 4.898 1.999.135 6.459.136 8.461 0 2.165-.148 2.42-1.457 2.437-4.898-.018-3.436-.271-4.75-2.438-4.898zm-6.23 7.12v-4.444l4.778 2.218-4.778 2.226zm2-12.222c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />
    </svg>
  )
}



function SocialLinks() {
  const params = useParams();
  const lang = params?.lang || 'en';  // Default to 'en' if lang is not provided

  // Select the appropriate dictionary based on the language
  const dict = lang === 'uk' ? uk : en;

  return (
    <div className='flex gap-4 m-auto sm:pl-4'>
      <Link
        href="https://www.facebook.com/BoichukVira"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://www.instagram.com/dr.vira_inspiration/"
        target="_blank"
        aria-label="Visit my IG page"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconInstagram className="size-4" />
      </Link>
      <Link
        href="https://www.youtube.com/@dr.vira_inspiration"
        target="_blank"
        aria-label="Visit my IG page"
        className="text-gray-950 data-[hover]:text-gray-950/75"
      >
        <SocialIconYoutube className="size-4" />
      </Link>
    </div>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} VBalance.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Gradient className="relative">
        <div className="absolute inset-2 rounded-4xl bg-white/80" />
        <Container>
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-2 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-4">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}

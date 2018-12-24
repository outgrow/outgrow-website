import React from "react"
import Link from "next/link"

const links = [
  { href: "/training", label: "Developer Training" },
  { href: "/consulting", label: "Technical Consulting" },
  { href: "/clients", label: "Our Clients" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact Us" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav

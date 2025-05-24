import React from 'react'
import { Breadcrumb } from '@/components/molecules/Breadcrumb'
import { IBreadcrumbLink } from '@/types'

const ContactPage = () => {
     const breadcrumbLinks: IBreadcrumbLink[] = [
    {
      title: "Contact",
      url: "/contact",
    },
  ]
  return (
    <>
      <Breadcrumb breadcrumbLinks={breadcrumbLinks} />

      {/* Main Layout Contact */}
    </>
  )
}

export default ContactPage
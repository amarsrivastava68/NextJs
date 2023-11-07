import React from 'react'
import Link from 'next/link'
import { Fragment } from 'react'

const index = () => {
  return (
    <Fragment>
    <div><Link href = "/aboutUs/1">Yash</Link></div>
    <div><Link href = "/aboutUs/2">Vaibhav</Link></div>
    <div><Link href = "/aboutUs/3">Suresh</Link></div>
    </Fragment>
  )
}

export default index
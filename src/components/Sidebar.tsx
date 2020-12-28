import React from 'react'
import Link from 'next/link'
import { Box } from './Box'

export const AboutCard = () => {
  return (
    <Box>
      <div className="p-5">
        <p className="mb-3 text-sm">
          一个不知道怎么描述的社区，在不同的节点讨论各种你感兴趣的主题。
        </p>
        <Link href="/new-topic">
          <a className="bg-blue-500 rounded-lg px-3 h-10 inline-flex items-center justify-center w-full text-white">
            发表主题
          </a>
        </Link>
      </div>
    </Box>
  )
}

export const Sidebar = () => {
  return (
    <div className="space-y-3">
      <AboutCard />
    </div>
  )
}

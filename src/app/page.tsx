'use client'

import { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Card } from '~/components/ui/card'
import FileExplorer from '~/components/file-explorer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <FileExplorer />
    </main>
  )
}

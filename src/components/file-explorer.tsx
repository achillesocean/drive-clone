'use client'

import { useState } from 'react'
import { ChevronRight, Upload, Search, Home } from 'lucide-react'
import { Button } from '~/components/ui/button'
import FileList from './file-list'
import { mockData } from '~/lib/mock-data'

export default function FileExplorer() {
  const [currentPath, setCurrentPath] = useState<string[]>([])

  const getCurrentFolder = () => {
    let folder = mockData
    for (const pathItem of currentPath) {
      const nextFolder = folder.items?.find(
        (item) => item.id === pathItem && item.type === 'folder'
      )
      if (nextFolder && nextFolder.type === 'folder') {
        folder = nextFolder
      }
    }
    return folder
  }

  const handleFolderOpen = (folderId: string) => {
    setCurrentPath([...currentPath, folderId])
  }

  const handleNavigate = (index: number) => {
    setCurrentPath(currentPath.slice(0, index))
  }

  const handleHome = () => {
    setCurrentPath([])
  }

  const currentFolder = getCurrentFolder()

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-semibold text-foreground">Google Drive</h1>
            <Button
              size="sm"
              className="gap-2"
              onClick={() => alert('Upload functionality would be implemented here')}
            >
              <Upload className="w-4 h-4" />
              Upload
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 w-4 h-4 text-muted-foreground transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search in Drive"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-border bg-muted text-foreground placeholder-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="px-6 pb-3 flex items-center gap-1 text-sm border-t border-border">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 h-8 px-2 whitespace-nowrap"
            onClick={handleHome}
          >
            <Home className="w-4 h-4" />
            <span>My Drive</span>
          </Button>

          {currentPath.map((pathId, index) => {
            const currentItem = mockData.items?.find((item) => item.id === pathId)
            return (
              <div key={pathId} className="flex items-center gap-1">
                <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2 whitespace-nowrap"
                  onClick={() => handleNavigate(index)}
                >
                  {currentItem?.name}
                </Button>
              </div>
            )
          })}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <FileList
          items={currentFolder.items || []}
          onFolderOpen={handleFolderOpen}
        />
      </div>
    </div>
  )
}

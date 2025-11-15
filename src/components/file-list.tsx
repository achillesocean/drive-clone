'use client'

import { Folder, FileText, Sheet, ImageIcon } from 'lucide-react'

interface FileItem {
  id: string
  name: string
  type: 'file' | 'folder'
  icon?: string
  url?: string
  modified?: string
  items?: FileItem[]
}

interface FileListProps {
  items: FileItem[]
  onFolderOpen: (folderId: string) => void
}

export default function FileList({ items, onFolderOpen }: FileListProps) {
  const getFileIcon = (item: FileItem) => {
    if (item.type === 'folder') {
      return <Folder className="w-5 h-5 text-blue-400" />
    }

    if (item.name.endsWith('.pdf')) {
      return <FileText className="w-5 h-5 text-red-400" />
    }
    if (item.name.endsWith('.xlsx') || item.name.endsWith('.csv')) {
      return <Sheet className="w-5 h-5 text-green-400" />
    }
    if (
      item.name.endsWith('.png') ||
      item.name.endsWith('.jpg') ||
      item.name.endsWith('.jpeg')
    ) {
      return <ImageIcon className="w-5 h-5 text-purple-400" />
    }

    return <FileText className="w-5 h-5 text-muted-foreground" />
  }

  const handleItemClick = (item: FileItem) => {
    if (item.type === 'folder') {
      onFolderOpen(item.id)
    } else if (item.url) {
      window.open(item.url, '_blank')
    }
  }

  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 text-muted-foreground">
        <p>No files or folders</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-3 px-6 py-3 border-b border-border hover:bg-accent cursor-pointer transition-colors"
          onClick={() => handleItemClick(item)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleItemClick(item)
            }
          }}
        >
          <div className="flex-shrink-0">{getFileIcon(item)}</div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate">{item.name}</h3>
          </div>
          {item.modified && (
            <div className="text-sm text-muted-foreground flex-shrink-0 whitespace-nowrap">
              {item.modified}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

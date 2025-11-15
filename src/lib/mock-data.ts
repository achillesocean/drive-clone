export const mockData = {
  id: 'root',
  name: 'My Drive',
  type: 'folder' as const,
  items: [
    {
      id: 'folder-1',
      name: 'Projects',
      type: 'folder' as const,
      modified: 'yesterday',
      items: [
        {
          id: 'file-1',
          name: 'Project Proposal.pdf',
          type: 'file' as const,
          url: 'https://example.com/project-proposal.pdf',
          modified: '2 hours ago',
        },
        {
          id: 'file-2',
          name: 'Budget Spreadsheet.xlsx',
          type: 'file' as const,
          url: 'https://example.com/budget.xlsx',
          modified: '1 day ago',
        },
        {
          id: 'subfolder-1',
          name: 'Q4 Planning',
          type: 'folder' as const,
          modified: '3 days ago',
          items: [
            {
              id: 'file-3',
              name: 'Timeline.pdf',
              type: 'file' as const,
              url: 'https://example.com/timeline.pdf',
              modified: '2 days ago',
            },
            {
              id: 'file-4',
              name: 'Resources.xlsx',
              type: 'file' as const,
              url: 'https://example.com/resources.xlsx',
              modified: '3 days ago',
            },
          ],
        },
      ],
    },
    {
      id: 'folder-2',
      name: 'Team Documents',
      type: 'folder' as const,
      modified: '2 days ago',
      items: [
        {
          id: 'file-5',
          name: 'Meeting Notes.pdf',
          type: 'file' as const,
          url: 'https://example.com/meeting-notes.pdf',
          modified: '1 hour ago',
        },
        {
          id: 'file-6',
          name: 'Team Goals.xlsx',
          type: 'file' as const,
          url: 'https://example.com/team-goals.xlsx',
          modified: '5 days ago',
        },
      ],
    },
    {
      id: 'file-7',
      name: 'Annual Report.pdf',
      type: 'file' as const,
      url: 'https://example.com/annual-report.pdf',
      modified: '1 week ago',
    },
    {
      id: 'folder-3',
      name: 'Design Assets',
      type: 'folder' as const,
      modified: '3 days ago',
      items: [
        {
          id: 'file-8',
          name: 'Logo Design.png',
          type: 'file' as const,
          url: 'https://example.com/logo.png',
          modified: '1 week ago',
        },
        {
          id: 'file-9',
          name: 'Mockup.jpg',
          type: 'file' as const,
          url: 'https://example.com/mockup.jpg',
          modified: '2 weeks ago',
        },
      ],
    },
    {
      id: 'file-10',
      name: 'Presentation.pdf',
      type: 'file' as const,
      url: 'https://example.com/presentation.pdf',
      modified: '3 days ago',
    },
  ],
}

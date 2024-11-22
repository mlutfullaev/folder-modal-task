import type { IFolder } from '@/entities/folder/types'

export const mockFolders: IFolder[] = [
  {
    id: 1,
    name: 'Folder 1',
    folders: [
      {
        id: 2,
        name: 'Folder 2',
        folders: [
          {
            id: 3,
            name: 'Folder 3',
            folders: [
              {
                id: 4,
                name: 'Folder 4',
                folders: [],
                files: [
                  {
                    id: 1,
                    name: 'file',
                    source: 'https://google.com'
                  },
                  {
                    id: 2,
                    name: 'file',
                    source: 'https://google.com'
                  },
                ]
              }],
            files: [
              {
                id: 1,
                name: 'file',
                source: 'https://google.com'
              },
              {
                id: 2,
                name: 'file',
                source: 'https://google.com'
              },
            ]
          },
        ],
        files: [
          {
            id: 1,
            name: 'file',
            source: 'https://google.com'
          },
          {
            id: 2,
            name: 'file',
            source: 'https://google.com'
          },
        ]
      },
    ],
    files: [
      {
        id: 5,
        name: 'file',
        source: 'https://google.com'
      },
      {
        id: 6,
        name: 'file',
        source: 'https://google.com'
      },
    ]
  },
  {
    id: 5,
    name: 'Folder 1',
    folders: [
      {
        id: 6,
        name: 'Folder 2',
        folders: [
          {
            id: 7,
            name: 'Folder 3',
            folders: [
              {
                id: 8,
                name: 'Folder 4',
                folders: [],
                files: [
                  {
                    id: 9,
                    name: 'file',
                    source: 'https://google.com'
                  },
                  {
                    id: 10,
                    name: 'file',
                    source: 'https://google.com'
                  },
                ]
              }],
            files: [
              {
                id: 1,
                name: 'file',
                source: 'https://google.com'
              },
              {
                id: 2,
                name: 'file',
                source: 'https://google.com'
              },
            ]
          },
          {
            id: 12,
            name: 'Folder 2',
            folders: [
              {
                id: 13,
                name: 'Folder 3',
                folders: [
                  {
                    id: 14,
                    name: 'Folder 4',
                    folders: [
                      {
                        id: 15,
                        name: 'Folder 5',
                        folders: [],
                        files: [
                          {
                            id: 1,
                            name: 'file',
                            source: 'https://google.com'
                          },
                          {
                            id: 2,
                            name: 'file',
                            source: 'https://google.com'
                          },
                        ]
                      }],
                    files: [
                      {
                        id: 1,
                        name: 'file',
                        source: 'https://google.com'
                      },
                      {
                        id: 2,
                        name: 'file',
                        source: 'https://google.com'
                      },
                    ]
                  },
                ],
                files: [
                  {
                    id: 1,
                    name: 'file',
                    source: 'https://google.com'
                  },
                  {
                    id: 2,
                    name: 'file',
                    source: 'https://google.com'
                  },
                ]
              },
            ],
            files: [
              {
                id: 1,
                name: 'file',
                source: 'https://google.com'
              },
              {
                id: 2,
                name: 'file',
                source: 'https://google.com'
              },
            ]
          },
        ],
        files: [
          {
            id: 1,
            name: 'file',
            source: 'https://google.com'
          },
          {
            id: 2,
            name: 'file',
            source: 'https://google.com'
          },
        ]
      },
    ],
    files: [
      {
        id: 1,
        name: 'file',
        source: 'https://google.com'
      },
      {
        id: 2,
        name: 'file',
        source: 'https://google.com'
      },
    ]
  },
  {
    id: 16,
    name: 'Folder 1',
    folders: [
      {
        id: 17,
        name: 'Folder 2',
        folders: [
          {
            id: 18,
            name: 'Folder 3',
            folders: [
              {
                id: 19,
                name: 'Folder 4',
                folders: [],
                files: [
                  {
                    id: 1,
                    name: 'file',
                    source: 'https://google.com'
                  },
                  {
                    id: 2,
                    name: 'file',
                    source: 'https://google.com'
                  },
                ]
              }],
            files: [
              {
                id: 1,
                name: 'file',
                source: 'https://google.com'
              },
              {
                id: 2,
                name: 'file',
                source: 'https://google.com'
              },
            ]
          },
        ],
        files: [
          {
            id: 1,
            name: 'file',
            source: 'https://google.com'
          },
          {
            id: 2,
            name: 'file',
            source: 'https://google.com'
          },
        ]
      },
    ],
    files: [
      {
        id: 1,
        name: 'file',
        source: 'https://google.com'
      },
      {
        id: 2,
        name: 'file',
        source: 'https://google.com'
      },
    ]
  },
]

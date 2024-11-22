export interface IFolder {
  id: number;
  name: string;
  folders: IFolder[];
  files: IFile[];
}

export interface IFile {
  id: number;
  name: string;
  source: string;
}

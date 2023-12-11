declare module "get-file-object-from-local-path" {
  class LocalFileData {
    constructor(path: string);
    name: string;
    type: number;
  }
  export { LocalFileData };
}

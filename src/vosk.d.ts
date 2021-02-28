declare module "vosk-wasm" {
  export class Model {
    constructor(path: string);
  }

  export class KaldiRecognizer {
    constructor(model: Model, sampleRate: number);
    public AcceptWaveform(address: number, length: number): boolean;
    public Result(): string;
    public PartialResult(): string;
  }
  export interface Vosk {
    FS: {
      mkdir: (dirName: string) => void;
      mount: (fs: any, opts: any, path: string) => void;
    };
    MEMFS: Record<string, any>;
    IDBFS: Record<string, any>;
    WORKERFS: Record<string, any>;
    HEAPF32: any;
    downloadAndExtract: (url: string, localPath: string) => void;
    syncFilesystem: (fromPersistent: boolean) => void;
    Model;
    KaldiRecognizer;
    _malloc: (size: number) => number;
    _free: (buffer: number) => void;
  }
  export default function LoadVosk(): Promise<Vosk>;
}
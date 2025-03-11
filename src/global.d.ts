export {};

declare global {
  interface Window {
    electronAPI: {
      sendFormData: (data: any) => void;
    };
  }
}
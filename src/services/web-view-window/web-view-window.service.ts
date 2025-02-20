import { Injectable } from '@angular/core';
import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

@Injectable({
  providedIn: 'root'
})
export class WebViewWindowService {

  constructor() { }

  createWebviewWindow(label: string, url: string, title: string, width: number, height: number, resizable: boolean): WebviewWindow {
    const webViewWindow = new WebviewWindow(label, {
      url: url, // Load the same Angular app or a specific route
      title: title,
      width: width,
      height: height,
      resizable: resizable
    });

    webViewWindow.once('tauri://created', function () {
      console.log('New window created successfully');
    });

    webViewWindow.once('tauri://error', function (e) {
      console.error('Error creating window', e);
    });

    return webViewWindow;
  }
}

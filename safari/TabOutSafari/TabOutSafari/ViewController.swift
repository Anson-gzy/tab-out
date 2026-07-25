//
//  ViewController.swift
//  TabOutSafari
//
//  Created by Gu Ziyang on 4/29/26.
//

import Cocoa
import SafariServices
import WebKit

let extensionBundleIdentifier = "com.guziyang.tabout.Extension"

class ViewController: NSViewController, WKNavigationDelegate, WKScriptMessageHandler {

    @IBOutlet var webView: WKWebView!
    private var didOpenSafariSettings = false

    override func viewDidLoad() {
        super.viewDidLoad()

        self.webView.navigationDelegate = self

        self.webView.configuration.userContentController.add(self, name: "controller")

        self.webView.loadFileURL(Bundle.main.url(forResource: "Main", withExtension: "html")!, allowingReadAccessTo: Bundle.main.resourceURL!)
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        SFSafariExtensionManager.getStateOfSafariExtension(withIdentifier: extensionBundleIdentifier) { (state, error) in
            guard let state = state, error == nil else {
                DispatchQueue.main.async {
                    if #available(macOS 13, *) {
                        webView.evaluateJavaScript("show(undefined, true)")
                    } else {
                        webView.evaluateJavaScript("show(undefined, false)")
                    }
                    self.openSafariSettings()
                }
                return
            }

            DispatchQueue.main.async {
                if #available(macOS 13, *) {
                    webView.evaluateJavaScript("show(\(state.isEnabled), true)")
                } else {
                    webView.evaluateJavaScript("show(\(state.isEnabled), false)")
                }

                if !state.isEnabled {
                    self.openSafariSettings()
                }
            }
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if (message.body as! String != "open-preferences") {
            return;
        }

        openSafariSettings()
    }

    private func openSafariSettings() {
        guard !didOpenSafariSettings else { return }
        didOpenSafariSettings = true

        SFSafariApplication.showPreferencesForExtension(withIdentifier: extensionBundleIdentifier) { error in
            DispatchQueue.main.async {
                self.didOpenSafariSettings = false
            }
        }
    }

}

# nyt-cooking

Hacky paywall avoidance extension for [NYT cooking](https://cooking.nytimes.com/)

## Firefox

There's a couple options for developing in FF.

### Temporary installation

[Follow these instructions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing)

### Self-distributed

- Create a [Mozilla profile/add-on key](https://addons.mozilla.org/developers/addon/api/key/)
- Create an .env file
- Populate `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` values from key generated above
- Run the sign and build commands:

```cli
$ yarn sign:android && build:android
```

- [Install in browser](https://extensionworkshop.com/documentation/publish/distribute-sideloading/)

## Chrome

- Unpack extensions in [extensions settings](chrome://extensions/)
- Alternatively, follow [these instructions](https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest)

## Safari

You can use a [safari-web-extension-converter](https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari) to build the extension.

I would recommend updating the bundle identifier to something of your fancy.

```cli
$ xcrun safari-web-extension-converter . --app-name nytCookingPaywallBreaker --bundle-identifier com.[YOUR NAME HERE].nytCookingPaywallBreaker
```



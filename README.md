# nyt-cooking

Firefox extension for [NYT cooking](https://cooking.nytimes.com/)

## Installation

### Temporary

[Follow these instructions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing)

### Self-distributed

- Create Mozilla profile/add-on key (https://addons.mozilla.org/developers/addon/api/key/)
- Run [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) build command

```
$ npx web-ext sign --api-key=$AMO_JWT_ISSUER --api-secret=$AMO_JWT_SECRET
```

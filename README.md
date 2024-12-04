![rn-remixicon](https://gs-rumana.com/rn-home.png)
# RN-RemixIcon

A React Native library that provides seamless integration of the Remix Icon icon set for Android, iOS, Web, Expo, Windows, and macOS. With this library, you can easily use Remix Icons across your cross-platform mobile and web applications.

## Features
- **Cross-platform**: Works on Android, iOS, Web, Expo, Windows, and macOS.
- **Customizable**: Supports icon size, color, and other props.
- **Lightweight**: Small bundle size.
- **Up-to-date**: Uses the latest Remix Icon version.

## Installation

This library depends on `react-native-svg` to render icons. Make sure to install it before installing this library.

#### NPM
```bash
npm install rn-remixicon react-native-svg
```

#### Yarn
```bash
yarn add rn-remixicon react-native-svg
```

#### Expo

```bash
npx expo install rn-remixicon react-native-svg
```

## Usage

Import the `RemixIcon` component and use it in your application.

```jsx
import RemixIcon from 'rn-remixicon';

<RemixIcon name="macbook-line" size={24} color="#000" />
```

## Props
| Name | Type | Default | Required | Description |
| ---- | ---- | ------- | -------- | ----------- |
| name | string | - | true | The name of the Remix icon (e.g., “home-line”) |
| size | number | 24 | false | The size of the icon |
| color | string | #000 | false | The color of the icon |
| ... | any | - | false | Additional styles to apply to the icon |

## Supported Platforms

| Platform | Supported |
| -------- | --------- |
| Android | ✅ |
| iOS | ✅ |
| Web | ✅ |
| Expo | ✅ |
| Windows | ✅ |
| macOS | ✅ |

## Icon List

You can find the list of all available icons on the [Remix Icon website](https://remixicon.com/).

## License

`rn-remixicon` is licensed under the MIT License.

## Author

Made with ❤️ by [GS Rumana](https://gs-rumana.com/)

Enjoy using `rn-remixicon`? Please give us a ⭐ on [GitHub](https://github.com/gs-rumana/react-native-remixicon) to show your support!

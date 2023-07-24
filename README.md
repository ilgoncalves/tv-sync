# TvSync

TvSync is a React Native application that allows users to browse, search, and keep track of their favorite TV series. The application uses the TVMaze API to fetch series data.

The application is built using React Native and MVVM (Model-View-ViewModel) architecture for better separation of concerns and easier code maintainability. Zustand is used for state management, providing a lightweight and simpler solution for handling global state. For designing an expressive UI, the Magnus UI library is utilized, which offers a set of well-designed, customizable components. 


## Features

- [x] Browse all series from the TVMaze API
- [x] Search series by name
- [x] View detailed information about a series and its episodes
- [x] Set a series as a favorite
- [x] Remove series from favorites
- [x] Browse favorite series and view detailed information about them
- [x] Search for people involved in a series
- [x] View detailed information about the person searched and series they have participated in
- [x] Display next scheduled shows
- [x] Subcategorize series per genre
- [x] Support for multiple languages with i18n
- [x] Cool animations for a better user experience
- [x] Browse favorite series in alphabetical order
- [x] Search for people involved in a series
- [ ] View detailed information about person Searched and Series they have participated
- [ ] Secure the application with a PIN number or fingerprint authentication (for supported phones)

## Getting Started

> **Note**: Make sure you have completed the [React Native - [ ] Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

### Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# OR using Yarn
yarn android
```

#### For iOS

```bash
# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Prototype

Check the [Figma](https://www.figma.com/file/9suzZU0Ua9oGhaKkJHyq2C/TVSync?type=design&node-id=1:23&mode=design&t=klcIIp11l7kfrw8s-1) prototype.

## APK
The .apk file for the application can be found in this [Google Drive link](https://drive.google.com/drive/folders/1UsGqintxu76VmaGzFfmSe-HV-MLWTY8P?usp=drive_link).

## Testing

To run the unit tests, use the command: `npm test`

## Contributing

If you want to contribute to this project, please create a new issue or open a pull request.

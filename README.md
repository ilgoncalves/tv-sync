# TvSync

TvSync is a React Native application that allows users to browse, search, and keep track of their favorite TV series. The application uses the TVMaze API to fetch series data and Firebase to handle offline data.

## Features

- [ ] Browse all series from the TVMaze API
- [ ] Search series by name
- [ ] View detailed information about a series and its episodes
- [ ] Set a series as a favorite
- [ ] Browse favorite series in alphabetical order
- [ ] Search for people involved in a series
- [ ] View detailed information about person Searched and Series they have participated
- [ ] Secure the application with a PIN number or fingerprint authentication (for supported phones)
- [ ] Support for multiple languages with i18n
- [ ] Integration to see Tomatoe score (from [Rotten Tomatoes](https://www.rottentomatoes.com/))

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

## Testing

To run the unit tests, use the command: `npm test`

## Contributing

If you want to contribute to this project, please create a new issue or open a pull request.

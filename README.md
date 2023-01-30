<p align="center">
<img src="https://betanyeli-images.s3.amazonaws.com/camera+svg+1.png" alt="Peek a pic App Camera Logo" width="100" />
</p>


# Peek A Pic 📸

Capture every moment with ✨Peek a Pic✨. Experience fast and user-friendly interface and shareable moments in an instant.

## Screenshots 📲

<img src="https://betanyeli-images.s3.amazonaws.com/home-screen.jpeg" width="200" alt="Home Screen" /> <img src="https://betanyeli-images.s3.amazonaws.com/result-screen.jpeg" width="200" alt="Result Screen" /> <img src="https://betanyeli-images.s3.amazonaws.com/error.png" width="200" alt="Error Screen" />

## Features 💎

- Camera access in iOS && Android devices
- Previews
- Choose images from your gallery

## Tech Stack 🔭

- React Native CLI
- TypeScript
- Lottie animations
- `react-native-image-picker` ** Check issues with iOS Native module **original requirement** 👀 [here](https://github.com/betanyeli/peek-a-pic/issues/2)
- `react-native-testing-library` 
- Jest
- Figma

## Functional requirements👩🏻‍💻

- Should render a Home Screen with a "photo" button :white_check_mark:
- Should render a Result Screen :white_check_mark:
- Should render a Retake button :white_check_mark:
- Should render a Use photo or Share Screen options :white_check_mark:

## Non - Functional requirements✨

- Should implement iOS Native module camera :soon:
- Should have an Splash Screen iOS :white_check_mark:
- Should have an Splash Screen Android :soon:
- Should have an Screen error :white_check_mark:


## Roadmap 📈
📅[Github project](https://github.com/users/betanyeli/projects/1/views/1)
🐛[Issues](https://github.com/betanyeli/peek-a-pic/issues?q=is%3Aissue+is%3Aclosed)

- iOS Native Camera Module integration 
- Android splash screen
- Add more integrations

## Run Locally 🧬

Clone the project

```bash
    git clone https://github.com/betanyeli/peek-a-pic.git
    cd peek-a-pic
    yarn install
    yarn start
```

## Running Tests 🧪

To run tests, run the following command

```bash
  yarn test
```

Or run linter

```bash
  yarn lint
```


## Deployment 🚀

To generate APK of this project run

```bash
  npx react-native bundle --platform android --dev false \
  --entry-file index.js \
  --bundle-output android/app/src/main/assets/index.android.bundle \
  --assets-dest android/app/src/main/res/
```
and then

```bash
  cd android && ./gradlew assembleRelease
```

## Author 👩🏻‍💻

- Develop with love by [@Beta](https://www.github.com/betanyeli)

## Feedback✨

If you have any feedback, please reach out to me at [LinkedIn](https://www.linkedin.com/in/betanyeli-bravo/)


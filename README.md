# cats-app

 ### Clone This Repo 

- Open the termianl And : 

``` yarn ```

``` cd ios ```

``` pod install```

``` cd ..```

``` react-native run-ios```

### To Run the tests 

- Make sure you are running iPhone 11 before running the following commands , or change it from .detoxrc.json in the root file 

# ios : 
``` detox build --c ios ```

``` detox test --c ios```

# Android : 

- The Test was done on ```Nexus_5X_API_28_x86``` if you have any other emulators, please change it to the emulator name you have in the .detoxrc.json in the root file

``` cd android ```

``` ./gradlew assembleAndroidTest ```

``` cd .. ```

``` detox build --c android ```

``` detox test --c android```

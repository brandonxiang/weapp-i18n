# weapp-i18n
It is a i18n package for weapp, which can help us to switch languages.

It is inspired by [Leaflet.i18n](https://github.com/yohanboniface/Leaflet.i18n), and it is designed in es6, because weapp is compatible with es6.

## Usage

Config translation words in the json format.

```
export default {
    "en": {
        "Weather": "Weather"
    },
    "zh-Hans": {
        "Weather": "天气"
    }
}
```

#### registerLocale

To set translation words.

#### setLocale

To set current language.

#### _

To get word you want.

#### Demo

You can check it on [weapp-weatherfine](https://github.com/brandonxiang/weapp-weatherfine). I placed the wxapp-i18n.js into [utils folder](https://github.com/brandonxiang/weapp-weatherfine/tree/master/utils).

## License

[MIT](LICENSE)






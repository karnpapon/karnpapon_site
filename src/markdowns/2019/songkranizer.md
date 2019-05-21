![home](../../assets/images/songkranizer/01.jpg)
![home](../../assets/images/songkranizer/02.png)



# What.
Chrome’s Extension to simulate Songkran festival through sight and sound without any VR’s equipment needed!, for those who wanted to *feels*  like participating in one of the most famous festival in Thailand, where people prompt to pour water on each others, 


![home](../../assets/images/songkranizer/03.jpg)
<small>credit: https://thethaiger.com/thai-life/songkran-survival-guide-top-10-tips</small>

the period where the heat’s at its peak of the year and embedded-sub-woofer-car-sound-system’s culture are commonly heard.

------

# Why.

when wanted to feels like participating in the festival but not to get wet.

------

# How.
using vedaJS as webGL.
web audio as audio processing.

------
# Learn.

- [veda.js](https://veda.gl/vedajs/) as a GLSL framework.
- [Chrome Extension API](https://developer.chrome.com/extensions/api_index#stable_apis), exploring Chrome API.
- [WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), handle audio manipulation (filtering, feedback delay).


------
# Caveats.

audio capturing is not stop when refreshing, only stop when close the tab.

------
# Notes.

my initial idea is to capturing audio from non-active tab and render webGL to current active tab, eg. sound from YouTube and visual from Pinterest. but afaik non-active tab can’t be captured due to security restriction, sadly currently have no workaround.
<br>
inspired from Amagi Takayosi’s work.

---

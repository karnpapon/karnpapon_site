![home](../../assets/images/seeq/01.jpg)
![home](../../assets/images/seeq/02.png)
![home](../../assets/images/seeq/04.gif)



# What

a custom sequencer, draw an inspiration from String’s description
> "String is  traditionally <br> a sequence of letters”.

to play with it, just put any words, sentences, just like searching from Google or any search engine. Seeq will manage to find the descriptions for that keywords and use it as a step sequencer (using API from WikiPedia).
a “trigger” is simply assigned by typing any words/letters in provided input, Regex is also available. and hits run. 
currently support only sending MIDI out.
usage can be found <a href="https://github.com/karnpapon/seeq#usage" target="_blank">here</a>


<iframe width="420" height="315"
src="https://www.youtube.com/embed/DGaakhSvYOg">
</iframe>

<!-- > <b>watch in action</b> -->

### Diagram

<img src="../../assets/images/seeq/diagram.svg?sanitize=true">

------

# Why

sequencer/sequencing is common in electronic music scene.
most of music making process were constructed from rhythm — to be more precise, it’s periodic sets of interval. thus, fundamental is inevitable.
DOM manipulation is fundamental for every web development process.
this draw me back to fundamentally understanding and face it squarely, without any UI library or anything apart from Electron. 
since I started learning JavaScript via React,  this is a kind of the demystified-JavaScript’s learning process.

------

# How

 Seeq is powered by Electron, JavaScript’s framework for cross-platform application. wrote with object-oriented paradigm.

------
# Learn


- [Electron.js](https://electronjs.org/), since it has such a huge overhead. that being said, only “Hello world” your application’s size can ridiculously takes around ~100mb.
- raw DOM manipulation.
- OOP (Object-Oriented Programming) in JavaScript.
- MIDIAccess in WebAPI.

------
# Caveats
 Seeq relied on external DAW/software to send MIDI to, 
 it’d be great to have it’s own internal synth
 also it’s still unstable, and buggy.

------
# Notes

bigs up for an [Orca](https://hundredrabbits.itch.io/orca), live coding environment, for inspirations.

---


### Useful Links
- [Electron.js](https://electronjs.org/)
- [MIDIAccess](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess)
- [OOP in JavaScript](https://medium.freecodecamp.org/an-introduction-to-object-oriented-programming-in-javascript-8900124e316a)


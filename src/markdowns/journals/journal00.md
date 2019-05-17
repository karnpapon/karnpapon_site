
# What.

implementation on SJT ( Steinhaus-Johnson-Trotter's) algorithm for thai characters as a musical pattern sequencer. since letter contains an array of properties, one of the property is "Phonetic", in short, Phonetic of each individual letter determines how to produce a sound. thus, phonetic is picked up and using to determine an "envelope" for each particular synth voice. <br> 

eg. letter "p" has percussive sound, then `attack = 0.01` ( in terms of tone.js ) letter "y" has a smooth attack,so ` attack = 0.5` and so on.


---


### Useful Links
- [Demo](https://vue-markdown-blog.netlify.com)


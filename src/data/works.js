const dataWorks = [
  {
    name: 'Seeq',
    slug: 'seeq',
    theme: 'work',
    year: '2019',
    thumbnail: require( '../assets/images/seeq/thumb-000.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '001',
    workType: 'collaboration',
    description1:'Custom sequencer',
    description2:'and live-coding environment.',
    links: [
      { title: "-", url: "-", type: "website"},
      { title: "/Seeq", url: "https://github.com/karnpapon/Seeq", type: "github"}
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Developer' },
    ]
  },
  {
    name: 'ect-etc-tec',
    slug: 'ect-etc-tec',
    theme: 'work',
    year: '2019',
    thumbnail: require( '../assets/images/ect-etc-tec/thumb-000.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '002',
    workType: 'personal project',
    description1:'SJT algorithm for letters',
    description2:'as a musical pattern',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "/ect-etc-tec", url: "https://github.com/karnpapon/ect-etc-tec", type: "github" }
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Developer' },
    ]
  },
  {
    name: 'Songkranizer',
    slug: 'songkranizer',
    theme: 'work',
    year: '2019',
    thumbnail: require( '../assets/images/songkranizer/thumb-000.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '003',
    workType: 'personal project',
    description1:'Songkran festival simulator ',
    description2:'for Chrome\'s extension.',
    links: [
      { title: "theblack.codes", url: "https://theblack.codes", type: "website" },
      { title: "/songkranizer", url: "https://github.com/karnpapon/songkranizer", type: "github" }
    ],
    categories: [
      { title: 'Developer' },
    ]
  },
  {
    name: 'I (jig)saw Russolo.',
    slug: 'the-blacksmith',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/the-blacksmith/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Noise(y) puzzle',
    description2:'first product from The Blacksmith.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "-", url: "-", type: "github" }
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Art Director' },
    ]
  },
  {
    name: 'The Black Codes (website)',
    slug: 'the-black-codes-web',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/the-black-codes-web/thumb-00.jpg' ),
    img: "",
    key: '004',
    workType: 'Graphic Design / Branding / Development / Music',
    description1:'Website for The ███████',
    description2:'musical act from Bangkok, Thailand',
    links: [
      { title: "theblack.codes", url: "https://theblack.codes", type: "website" },
      { title: "-", url: "-", type: "github" }
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Developer' },
      { title: 'Art Director' },
    ],
  },
  {
    name: 'The Black Codes (promo)',
    slug: 'the-black-codes-aw',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/the-black-codes-aw/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Process for The Black Codes ',
    description2:'musical project.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "/TBC_coverArtwork", url: "https://github.com/karnpapon/TBC_coverArtwork", type: "github" }
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Developer' },
      { title: 'Art Director' },
    ]
  },
  {
    name: 'Audiotrimmer',
    slug: 'audiotrimmer-scripts',
    theme: 'work',
    year: 'Lab',
    thumbnail: "https://images.unsplash.com/photo-1528724977141-d90af338860c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80.jpg",
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Free time fun coding',
    description2:'while searching for audio trimmer tool.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "/audiotrimmer_scripts", url: "https://github.com/karnpapon/audiotrimmer_scripts", type: "github" }
    ],
    categories: [
      { title: 'Developer' },
    ]
  },
  {
    name: 'Livecode Fest.',
    slug: 'livecodefest',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/livecodefest/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Livecode Festival, London ',
    description2:'re-design for Livecode Fest.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "/livecodefest", url: "https://github.com/karnpapon/livecodefest", type: "github" }
    ],
    categories: [
      { title: 'Developer' },
    ]
  },
  {
    name: 'Illustrations',
    slug: 'illustrations',
    theme: 'work',
    year: 'Late',
    thumbnail: require( '../assets/images/illustrations/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'illustration',
    description1:'Illustrations collection  ',
    description2:'around 2016 ~ 2017.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "-", url: "-", type: "github" }
    ],
    categories: [
      { title: 'Illustrator' },
    ]
  },
  {
    name: 'Bangkok Through Poster',
    slug: 'bkk-through-poster',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/bkk-thru-poster/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Live-coding performance',
    description2:'at Kinjai Gallery.',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "-", url: "-", type: "github" }
    ],
    categories: [
      { title: 'Performer' },
    ]
  },
  {
    name: 'as far as i can tell',
    slug: 'as-far-as',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/as-far-as/thumb-00.jpg' ),
    key: '004',
    workType: 'personal project',
    description1:'DVD cover design for a Short-film ',
    description2:'directed by Jirat Sompakdee',
    links: [
      { title: "-", url: "-", type: "website" },
      { title: "-", url: "-", type: "github" }
    ],
    categories: [
      { title: 'Designer' },
      { title: 'Art Director' },
    ]
  },
  {
    name: 'Bangkok Design Week',
    slug: 'bkk-design-week',
    theme: 'work',
    year: '2018',
    thumbnail: require( '../assets/images/bkk-design-week/thumb-00.jpg' ),
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'Live-coding performance',
    description2:'in Bangkok Design Week\'18 event.',
    links: [
      { title: "theblack.codes", url: "https://theblack.codes", type: "website" },
      { title: "/karnpapon", url: "https://github.com/karnpapon", type: "github" }
    ],
    categories: [
      { title: 'Performer' },
    ]
  },
  {
    name: 'TidalCycles daily studies',
    slug: 'td-dailystd',
    theme: 'work',
    year: 'Lab',
    thumbnail: "https://images.unsplash.com/photo-1528724977141-d90af338860c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1085&q=80.jpg",
    img: "../assets/images/tbc10_cover_artwork.jpg",
    key: '004',
    workType: 'personal project',
    description1:'learning a new way to approach music via coding',
    description2:'as part of Daily Studies.',
    links: [
      { title: "theblack.codes", url: "https://theblack.codes", type: "website" },
      { title: "/karnpapon", url: "https://github.com/karnpapon", type: "github" }
    ],
    categories: [
      { title: 'Graphic Design' },
      { title: 'Web Development' },
      { title: 'Illustration' },
    ]
  }
];


var workListsByYear = [];
const getYears = []
let worksLists
let sortedWorks = []

dataWorks.forEach((data)=>{
  if(getYears.indexOf(data.year) === -1){
    getYears.push(data.year)
  }
});

getYears.forEach(_year => {
  sortedWorks = dataWorks.filter( dataWorkItem => dataWorkItem.year === _year)
  worksLists = {
    year: _year,
    works: sortedWorks
  }
  workListsByYear.push(worksLists)
})

  
  
export { workListsByYear, dataWorks }
  
const dataWorks = [
    {
      name: 'Seeq',
      slug: 'seeq',
      theme: 'work',
      year: '2019',
      img: "../assets/images/tbc10_cover_artwork.jpg",
      key: '001',
      workType: 'collaboration',
      description1:'custom sequencer',
      description2:'live-coding environment',
      contents: `
        Each letter of the alphabet is an operation, 
        lowercase letters operate on bang, uppercase letters operate each frame.
        Orca is designed to control other applications, 
        create procedural sequencers, and to experiment with livecoding. 
        See the documentation and installation instructions here, 
        or have a look at a tutorial video.
        If you need help, visit the chatroom and forum.
      `,
      contentImages: [
        { img: "https://images.unsplash.com/photo-1555902209-f5940d54c83e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1050&q=80.jpg"},
        { img: "https://images.unsplash.com/photo-1555767743-9548bfaa6ab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg"}
      ]
    },
    {
      name: 'ect-etc-tec',
      slug: 'ect-etc-tec',
      theme: 'work',
      year: '2019',
      img: "../assets/images/tbc10_cover_artwork.jpg",
      key: '002',
      workType: 'personal project',
      description1:'SJT ( Steinhaus-Johnson-Trotter\'s) algorithm for letters',
      description2:'as a musical pattern ( currently support only Thai letters)',
      contents: 
        [
          { type: 'image', img: 'Artwork-page00.gif' },
          { type: 'image', img: 'Artwork-page01.jpg' },
          { type: 'image', img: 'Artwork-page02.jpg' },
        ]
    },
    {
      name: 'Songkranizer',
      slug: 'songkranizer',
      theme: 'work',
      year: '2019',
      img: "../assets/images/tbc10_cover_artwork.jpg",
      key: '003',
      workType: 'personal project',
      description1:'Songkran festival simulator ',
      description2:'for Chrome\'s extension.',
      contents: 
        [
          { type: 'image', img: 'Artwork-page00.gif' },
          { type: 'image', img: 'Artwork-page01.jpg' },
          { type: 'image', img: 'Artwork-page02.jpg' },
        ]
    },
    {
      name: 'The Blacksmith.',
      slug: 'theblacksmith',
      theme: 'work',
      year: '2019',
      img: "../assets/images/tbc10_cover_artwork.jpg",
      key: '004',
      workType: 'personal project',
      description1:'Songkran festival simulator ',
      description2:'for Chrome\'s extension.',
      contents: 
        [
          { type: 'image', img: 'Artwork-page00.gif' },
          { type: 'image', img: 'Artwork-page01.jpg' },
          { type: 'image', img: 'Artwork-page02.jpg' },
        ]
    },
  ];
  
    let dataTrackName = [];
    dataWorks.forEach((item)=>{
      // if can not find item in dataCategories then push it into.
      if ( dataTrackName.indexOf(item.name) === -1 ) {
        dataTrackName.push(item.name);
      }
    });
    
  
  
export { dataTrackName, dataWorks }
  
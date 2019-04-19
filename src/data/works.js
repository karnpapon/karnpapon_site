const dataWorks = [
    {
      name: 'seeq',
      slug: 'seeq',
      year: '2019',
      img: "../assets/images/tbc10_cover_artwork.jpg",
      key: '001',
      workType: 'collaboration',
      description1:'custom sequencer',
      description2:'live-coding environment',
      contents: 
        [
          { type: 'image', img: 'Artwork-page00.gif' },
          { type: 'image', img: 'Artwork-page01.jpg' },
          { type: 'image', img: 'Artwork-page02.jpg' },
        ]
    },
    {
      name: 'ect-ect-ect',
      slug: 'ect-ect-ect',
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
  ];
  
    let dataTrackName = [];
    dataWorks.forEach((item)=>{
      // if can not find item in dataCategories then push it into.
      if ( dataTrackName.indexOf(item.name) === -1 ) {
        dataTrackName.push(item.name);
      }
    });
    
  
  
export { dataTrackName, dataWorks }
  
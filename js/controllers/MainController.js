app.controller('MainController',['$scope', function($scope){
 
  $scope.portfolios = 
    [     
      { 
      	code: 'ciel',
        name: 'CIEL SBM ITB', 
        category: 'CMS of the company profile website',
        desc: 'CIEL SBM ITB is CMS of the company profile website. I remake the oldschool website with wordpress technology',
        link: 'http://cielsbm.org/'
      }, 
      { 
      	code: 'tresco',
        name: 'Tresco', 
        category: 'A CMS for real estate information with custom design wesbitse',
        desc: 'A CMS for real estate information with custom design wesbitse',
        link:  'http://tresco.id/'
      }, 
      { 
      	code: 'icdc',
        name: 'ICDC Indonesia', 
        category: 'A website for community development',
        desc: 'ICDC Indonesia is a website for community development. By using wordpress technology, i made it in short time',
        link: 'http://icdcindonesia.or.id/'  
      },
      { 
      	code: 'kuisioner',
        name: 'Online Kuisioner', 
        category: 'Online mitigation risk questionnaire',
        desc: 'An Online mitigation risk questionnaire website. I do the front end for this website and a little bit back end. This site is build by Code Igniter',
        link:  'classified'
      }, 
      { 
      	code: 'sipencatar',
        name: 'SIPENCATAR', 
        category: 'Online registration and integrated Computer Based Test for selection of Calon Taruna by BPSDM Kemenhub',
        desc: 'SIPENCATAR is an online registration and integrated Computer Assisted Test for selection of Calon Taruna by BPSDM Kemenhub. My role in this project is a Project Manager / Scrum Master and System Analyst',
        link: 'classified'
      },
      { 
      	code: 'socentra',
        name: 'Socentra Institute', 
        category: 'A Website for Information about Social Entrepreneur',
        desc: 'Socentra Institute is a Website for Information about Social Entrepreneur. Build it by using wordpress for the CMS',
        link:  'http://socentrainstitute.com/'
      }, 

      
      // { 
      // 	code: 'bws',
      //   name: 'BWS Papua Barat', 
      //   category: 'Web for Papua Ministry of Public Works', 
      //   desc: 'Web for Papua Ministry of Public Works',
      //   link: 'classified'
      // }, 
      // { 
      // 	code: '9',
      //   name: 'SKHA Consulting Company Profile', 
      //   category: 'CMS company profile with custom design', 
      //   img: '625' 
      // }, 
      // { 
      // 	code: '10',
      //   name: 'spiro+', 
      //   category: 'Model of integrated hydroponics farm with automatic control system', 
      //   img: '534' 
      // }, 
      { 
      	code: 'sirex',
        name: 'SIREX', 
        category: 'Database Management and Scheduling System', 
        desc: 'Database Management and Scheduling System for Rexa Edu. This is my first work as Front End Web Developer',
        link: ''
      }, 
      { 
      	code: 'inagro',
        name: 'Inagro', 
        category: 'One stop marketplace for agroindustrial products', 
        desc: 'One stop marketplace for agroindustrial products. We get the first place in Agroindustry IT Challenge (AITC) National Championship held by IPB by making this product prototype',
        link: '' 
      },  
      { 
      	code: 'cryotech',
        name: 'Cryotech', 
        category: 'Crytotech Company Profile Webite', 
        desc: 'Crytotech Company Profile Webite',
        link: '' 
      }, 
    
    ]
	
}]);
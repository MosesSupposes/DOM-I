const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// elements to operate on 
function getNavItems() {
  return {
    nav: document.querySelector('nav'),
    logoImg: document.querySelector('#logo-img')
  }
}

function getCTAItems() {
  const cta = document.querySelector('.cta')

  return {
    cta,
    ctaHeader: cta.querySelector('h1'),
    ctaButton: cta.querySelector('button'),
    ctaImg: cta.querySelector('img')
  }
}

function getMainContent() {
    const mainContent = document.querySelector('.main-content')
    
    return {
      mainContent,
      topContent: mainContent.querySelector('.top-content'),
      bottomContent: mainContent.querySelector('.bottom-content')
    }
}

function getContactItems() {
  const contact = document.querySelector('.contact')

  return {
    contact,
    contactHeader: contact.querySelector('h4'),
    contactP1: contact.querySelector('p:nth-child(1)'),
    contactP2: contact.querySelector('p:nth-child(2)'),
    contactP3: contact.querySelector('p:nth-child(3)')
  }
}


function getFooterItems() {
  const footer = document.querySelector('footer')

  return {
    footer,
    copyright: footer.querySelector('p')
  }
}


/*===========================
          Main
===========================*/

populateNavigation()
populateCta()
populateMainContent()

/*===========================
          Helpers
===========================*/

function populateNavigation() {
  const { nav, logoImg } = getNavItems()
  const navItems = Object.values(siteContent.nav)

  ;[...nav.querySelectorAll('a')].forEach((anchor, i) => {
    anchor.textContent = navItems[i]
  })

  logoImg.src = siteContent.nav['img-src']
}

function populateCta() {
  const { cta, ctaHeader, ctaButton, ctaImg } = getCTAItems() 
  const { h1: h1Content, button: buttonContent } = siteContent.cta
  const imgSrc = siteContent.cta['img-src']

  // doesn't quite work, hmm... (bookmark)
  // ctaHeader.innerHTML = h1Content.split(' ').join(document.createElement('br'))

  const [ dom, is, awesome ] = h1Content.split(' ')

  ctaHeader.innerHTML = dom
  ctaHeader.appendChild(lineBreak())
  ctaHeader.innerHTML += is 
  ctaHeader.appendChild(lineBreak())
  ctaHeader.innerHTML += awesome 
  
  ctaImg.src = imgSrc
  ctaButton.textContent = buttonContent
}

function populateMainContent() {
  populateTopContent()
  populateBottomContent()
  populateImgMiddle()
}

function populateBottomContent() {
  const { bottomContent } = getMainContent()
  bottomContentH4s = bottomContent.querySelectorAll('h4')
  bottomContentH4s[0].textContent = siteContent["main-content"]["services-h4"]
  bottomContentH4s[1].textContent = siteContent["main-content"]["product-h4"]
  bottomContentH4s[2].textContent = siteContent["main-content"]["vision-h4"]

  bottomContentPs = bottomContent.querySelectorAll('p')
  bottomContentPs[0].textContent = siteContent["main-content"]["services-content"]
  bottomContentPs[1].textContent = siteContent["main-content"]["product-content"]
  bottomContentPs[2].textContent = siteContent["main-content"]["vision-content"]
}


function populateTopContent() {
  const { topContent } = getMainContent()
  topContentH4s = topContent.querySelectorAll('h4')
  topContentH4s[0].textContent = siteContent["main-content"]["features-h4"]
  topContentH4s[1].textContent = siteContent["main-content"]["about-h4"]

  topContentPs = topContent.querySelectorAll('p')
  topContentPs[0].textContent = siteContent["main-content"]["features-content"]
  topContentPs[1].textContent = siteContent["main-content"]["about-content"]
}


function populateImgMiddle() {
  imgMiddle = document.getElementById('middle-img')
  imgMiddle.src = siteContent["main-content"]["middle-img-src"]
}

function lineBreak() {
  return document.createElement('br')
}
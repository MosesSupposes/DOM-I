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
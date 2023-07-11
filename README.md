The objective of this project is to create a PWA that is deployable by finance providers and brokers.

The index.html file loads a PWA in about 30KB of data in addition to this the index file has an initial table of data to be rendered as the First Contentful Paint, this table is about 14-15KB for a minimal dataset of the UK Bridging Market. With the 15KB uk dataset the PWA served from GitHub as a page attains consistently 90% or better in the main Google Lighthouse measurments managing to attain 98% in performance.

The dataset delivered as table will likely quadruple or octdruple in the number of html nodes at 3 columns and ~60 lines pplus the other html elements the number of nodes is comfortable below 10k, when it approaches 10k or suffers enough performance degredation some changes will be made to the app to deliver a first contentful paint above the fold.

The PWA files can be deployed to anything that can serve up some web pages (travel router / anyoldserver.com) and will behave as a SPA or static pages with SPA's.

The simplicity of no directory hireachy allows the application to be deployed to the same filespace as the web interface on an OpenWRT system (with the exception of the index.html file, the app is then asscessed via a app-main.html page in this usecase).

Keeping the dataset on the index/start page small.
--------------------------------------------------
The initial data load is the Tbody section of a table as plain html. This is to reduce the number of nodes per record, not rely on time-expensive calls to other resources (API calls etc or loeding anything unnecessary before a first paint).


Drawing in further data from Google Sheets
------------------------------------------
The project is to be developed to allow finance professionals to generate their own data that the app can ingest. A viable entry point is Google Sheets as a published dataset in a spreadsheet can act as a data source.

The application is to render the HTML in the index file then on page load or on interaction load a full interface and extensive dataset the base application used google Sheets as a datasource to reduce the technical requirements to entry.



Deploy to GitHub?
-----------------
The hope in publishing to GitHub is manyfold:

1) To allow inspection of code.
2) CI.
3) To allow finance professionals to clone the repo to their own GH page for testing or to allow the code to be downloaded to be deployed where chosen.



Included Libraries
------------------
csv.min.js          https://code-boxx.com/ MIT
sorta.css           https://code-boxx.com/ MIT
sorta.js            https://code-boxx.com/ MIT
workbox-sw.js       Google                 MIT



Heper files are included (as opposed to being served from a CDN) to ensure all files are served from the same origin.

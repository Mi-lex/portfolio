import pageHeader from './blocks/page-header.html';
import promo from './blocks/promo.html';
import about from './blocks/about.html';
import projects from './blocks/projects.html';
import contact from './blocks/contact.html';
import pageFooter from './blocks/page-footer.html';


export default function (templateParams) {
  const html = 
    `<html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title></title>
          <link rel="stylesheet" href="./app.css">
          <script>
              // Picture element HTML5 shiv
              document.createElement( "picture" );
          </script>
          <script src="./static/picturefill.min.js" async></script>
        </head>
          <body>
              ${pageHeader}
              <main>
                  ${promo}
                  ${about}
                  ${projects}
                  ${contact}
              </main>
              ${pageFooter}
          </body>
    </html>`

  return html;
};
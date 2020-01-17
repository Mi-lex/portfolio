import pageHeader from './blocks/page-header.html';
import promo from './blocks/promo.html';
import about from './blocks/about.html';
import projects from './blocks/projects.html';
import contact from './blocks/contact.html';
import pageFooter from './blocks/page-footer.html';

const title = `Milex`;
const description = `Here you can find the list and brief descriptions of the projects I have recently completed.`;
const keyWords = [
	'developer',
	'web developer',
	'fullstack',
	'frontend',
	'backend',
	'javascript developer',
	'Milex',
	'Mishin Alexey',
];
const author = `Mishin Alexey`;


export default function() {
	const html = `<html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,  shrink-to-fit=no">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${title}</title>
          <meta name="description" content="${description}">
          <meta name"keywords" content="${keyWords.join(', ')}">
          <meta name="author" content="${author}">
          <link rel="icon" type="image/ico" href="./img/favicon.ico"/>
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
    </html>`;

	return html;
}

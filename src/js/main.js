import './assets/svg-icons';
import './assets/imgs';

// modules
import "./static/picturefill.min";
import "svgxuse";
import customPolyfills from './assets/custom-polyfils';
import menuToggler from './assets/menuToggler';
import projectInfo from './assets/projectInfo';
import nav from './assets/nav';
import formInputs from './assets/form-inputs';

customPolyfills();
menuToggler();
projectInfo();
nav();
formInputs();
// @Import js
import { navigationMenu } from './shared/js/navigation';
import { header } from './components/header/header';
import { content } from './components/content/content';
import { footer } from './components/footer/footer';

// @Import css
import './main.scss';

// @Events
document.addEventListener('DOMContentLoaded', () => {
  if (process.env.NODE_ENV !== 'production') {
    navigationMenu();
  }
  // @Start call function
  header();
  content();
  footer();
  // @End call function
});

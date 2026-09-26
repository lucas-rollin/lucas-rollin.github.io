import Alpine from 'alpinejs';
import modal from './modal.js';
import theme from './theme.js';
import navbar from './navbar.js';

window.Alpine = Alpine;

Alpine.data('modal', modal);
Alpine.data('theme', theme);
Alpine.data('navbar', navbar);

Alpine.start();

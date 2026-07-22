const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

function createClassList(initial = []) {
  const set = new Set(initial);
  return {
    add(...names) {
      names.forEach((name) => set.add(name));
    },
    remove(...names) {
      names.forEach((name) => set.delete(name));
    },
    toggle(name, force) {
      if (force === undefined) {
        if (set.has(name)) {
          set.delete(name);
          return false;
        }
        set.add(name);
        return true;
      }
      if (force) {
        set.add(name);
        return true;
      }
      set.delete(name);
      return false;
    },
    contains(name) {
      return set.has(name);
    },
    toString() {
      return Array.from(set).join(' ');
    }
  };
}

function createElement(name = 'div') {
  const listeners = {};
  const children = [];
  return {
    tagName: name.toUpperCase(),
    classList: createClassList(),
    style: {},
    textContent: '',
    innerHTML: '',
    value: '',
    dataset: {},
    attributes: {},
    children,
    addEventListener(type, handler) {
      listeners[type] = listeners[type] || [];
      listeners[type].push(handler);
    },
    dispatchEvent(type, event = {}) {
      (listeners[type] || []).forEach((handler) => handler(event));
    },
    querySelector(selector) {
      if (selector === 'img') return null;
      if (selector === '.faq-question') return null;
      if (selector === 'input, textarea, select') return null;
      if (selector === 'button') return null;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === 'img') return [];
      if (selector === 'a') return [];
      if (selector === '.faq-question') return [];
      if (selector === '.filter-btn') return [];
      if (selector === '.reveal') return [];
      if (selector === '.counter') return [];
      if (selector === 'form') return [];
      return [];
    },
    getAttribute(name) {
      return this.attributes[name] || null;
    },
    setAttribute(name, value) {
      this.attributes[name] = value;
    },
    focus() {}
  };
}

function createDocument() {
  const body = createElement('body');
  const themeToggle = createElement('button');
  const navToggle = createElement('button');
  const navLinks = createElement('div');
  const courseSearch = createElement('form');
  const courseGrid = createElement('div');
  const galleryGrid = createElement('div');
  const testimonialCard = createElement('div');
  const placementCompanies = createElement('div');
  const loadingScreen = createElement('div');
  const lightbox = createElement('div');
  const lightboxImg = createElement('img');
  const progressBar = createElement('div');
  const backToTop = createElement('a');
  const faqItem = createElement('div');
  const faqQuestion = createElement('button');
  faqItem.querySelector = () => faqQuestion;
  const document = {
    body,
    documentElement: createElement('html'),
    getElementById(id) {
      const map = {
        'course-grid': courseGrid,
        'gallery-grid': galleryGrid,
        'testimonial-card': testimonialCard,
        'placement-companies': placementCompanies,
        'loading-screen': loadingScreen,
        'lightbox': lightbox,
        'search-input': createElement('input')
      };
      return map[id] || null;
    },
    querySelector(selector) {
      if (selector === '.theme-toggle') return themeToggle;
      if (selector === '.nav-toggle') return navToggle;
      if (selector === '.nav-links') return navLinks;
      if (selector === '.course-search') return courseSearch;
      if (selector === '.scroll-progress') return progressBar;
      if (selector === '.back-to-top') return backToTop;
      if (selector === '.filter-btn.active') return null;
      if (selector === '.filter-btn') return null;
      if (selector === '.faq-item') return faqItem;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '.filter-btn') return [];
      if (selector === '.faq-item') return [faqItem];
      if (selector === '.reveal') return [];
      if (selector === '.counter') return [];
      if (selector === 'form') return [courseSearch];
      if (selector === 'main section[id]') return [];
      if (selector === '.nav-links a') return [];
      return [];
    },
    addEventListener() {}
  };
  backToTop.classList.add('visible');
  lightbox.querySelector = () => lightboxImg;
  lightbox.querySelectorAll = () => [];
  return document;
}

function createWindow(document) {
  const listeners = {};
  return {
    document,
    addEventListener(type, handler) {
      listeners[type] = listeners[type] || [];
      listeners[type].push(handler);
    },
    dispatch(type, event = {}) {
      (listeners[type] || []).forEach((handler) => handler(event));
    },
    matchMedia() {
      return {
        matches: false,
        addEventListener() {}
      };
    },
    setTimeout(handler) {
      handler();
      return 1;
    },
    clearTimeout() {},
    setInterval(handler) {
      return 1;
    },
    clearInterval() {}
  };
}

function runScript() {
  const document = createDocument();
  const window = createWindow(document);
  const localStorage = {
    store: {},
    getItem(key) { return this.store[key] || null; },
    setItem(key, value) { this.store[key] = String(value); }
  };
  const context = {
    document,
    window,
    localStorage,
    console,
    performance: { now: () => 0 },
    requestAnimationFrame: (cb) => cb(0),
    cancelAnimationFrame: () => {},
    IntersectionObserver: class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
    HTMLElement: class {},
    Node: class {}
  };
  context.global = context;
  context.globalThis = context;
  context.window.window = window;
  context.window.document = document;
  context.window.localStorage = localStorage;
  context.window.matchMedia = window.matchMedia;
  context.window.performance = context.performance;
  context.window.requestAnimationFrame = context.requestAnimationFrame;
  context.window.cancelAnimationFrame = context.cancelAnimationFrame;
  context.window.IntersectionObserver = context.IntersectionObserver;
  context.window.HTMLElement = context.HTMLElement;
  context.window.Node = context.Node;
  const scriptPath = path.join(__dirname, '..', 'script.js');
  const script = fs.readFileSync(scriptPath, 'utf8');
  vm.createContext(context);
  vm.runInContext(script, context, { filename: scriptPath });
  window.dispatch('DOMContentLoaded');
  return { context, document, window, localStorage };
}

function testThemeToggle() {
  const { context, document, localStorage } = runScript();
  const themeToggle = context.document.querySelector('.theme-toggle');
  assert.strictEqual(document.body.classList.contains('light'), true, 'should default to light theme');
  themeToggle.dispatchEvent('click');
  assert.strictEqual(document.body.classList.contains('light'), false, 'should switch away from light theme');
  assert.strictEqual(document.body.classList.contains('dark'), true, 'should apply dark theme class');
  assert.strictEqual(localStorage.getItem('academy-theme'), 'dark', 'should persist dark theme');
}

testThemeToggle();
console.log('theme regression test passed');

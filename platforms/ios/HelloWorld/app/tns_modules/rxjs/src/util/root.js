"use strict";
/**
 * window: browser in DOM main thread
 * self: browser in WebWorker
 * global: Node.js/other
 */
exports.root = (typeof window == 'object' && window.window === window && window
    || typeof self == 'object' && self.self === self && self
    || typeof global == 'object' && global.global === global && global);
if (!exports.root) {
    throw new Error('RxJS could not find any global context (window, self, global)');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVNBOzs7O0dBSUc7QUFDVSxRQUFBLElBQUksR0FBUSxDQUNwQixPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTTtPQUMvRCxPQUFPLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSTtPQUNyRCxPQUFPLE1BQU0sSUFBSSxRQUFRLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxDQUNuRSxDQUFDO0FBRUYsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQywrREFBK0QsQ0FBQyxDQUFDO0FBQ25GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGxldCBnbG9iYWw6IE5vZGVKUy5HbG9iYWw7XG5cbmRlY2xhcmUgbW9kdWxlIE5vZGVKUyB7XG4gIGludGVyZmFjZSBHbG9iYWwge1xuICAgIHdpbmRvdzogYW55O1xuICAgIGdsb2JhbDogYW55O1xuICB9XG59XG5cbi8qKlxuICogd2luZG93OiBicm93c2VyIGluIERPTSBtYWluIHRocmVhZFxuICogc2VsZjogYnJvd3NlciBpbiBXZWJXb3JrZXJcbiAqIGdsb2JhbDogTm9kZS5qcy9vdGhlclxuICovXG5leHBvcnQgY29uc3Qgcm9vdDogYW55ID0gKFxuICAgICB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdy53aW5kb3cgPT09IHdpbmRvdyAmJiB3aW5kb3dcbiAgfHwgdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZi5zZWxmID09PSBzZWxmICYmIHNlbGZcbiAgfHwgdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwuZ2xvYmFsID09PSBnbG9iYWwgJiYgZ2xvYmFsXG4pO1xuXG5pZiAoIXJvb3QpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdSeEpTIGNvdWxkIG5vdCBmaW5kIGFueSBnbG9iYWwgY29udGV4dCAod2luZG93LCBzZWxmLCBnbG9iYWwpJyk7XG59XG4iXX0=
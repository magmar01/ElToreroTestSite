# Editing the El Torero Menu

The website is intentionally built so that **menu content is separated from the page layout**.

## The only file you normally need to edit

Edit **`menu.js`**.

Do not edit `index.html`, `menu-renderer.js`, or `styles.css` just to change a menu item.

## Menu section format

Each section follows this pattern:

```js
{
  title: 'Section Name',
  note: 'Optional note shown under the section heading',
  items: [
    { name: 'ITEM NAME', price: '12.50', description: 'ITEM DESCRIPTION' },
    { name: 'ITEM WITHOUT DESCRIPTION', price: '5.00' }
  ]
}
```

`note` is optional. `description` is optional.

## Add a menu item

Add another object inside the section's `items` array:

```js
{ name: 'NEW ITEM', price: '9.95', description: 'DESCRIPTION OF THE NEW ITEM' },
```

For an item without a description:

```js
{ name: 'NEW ITEM', price: '9.95' },
```

## Change an item

Change only the value you need:

```js
{ name: 'OLD NAME', price: '10.50', description: 'OLD DESCRIPTION' }
```

For example, changing the price only:

```js
{ name: 'OLD NAME', price: '11.50', description: 'OLD DESCRIPTION' }
```

## Remove an item

Delete the entire item object, including its comma where appropriate.

## Add a section

Add a new section object to the `MENU` array:

```js
{
  title: 'New Section',
  items: [
    { name: 'ITEM ONE', price: '8.50' },
    { name: 'ITEM TWO', price: '9.50', description: 'DESCRIPTION' }
  ]
}
```

The website automatically:

- creates the section heading;
- renders every item and price;
- renders descriptions when present;
- assigns the section a navigation target;
- adds the section to the hamburger Menu category list.

You do **not** need to create HTML for a new section.

## Important

Keep menu content in `menu.js` as plain JavaScript data. Do not put HTML markup inside item names or descriptions.

The renderer uses safe DOM text insertion, so ordinary text changes do not require touching the page structure.

## What each file does

| File | Purpose |
| --- | --- |
| `menu.js` | **Menu content — normally the only file you edit** |
| `menu-renderer.js` | Converts menu data into page HTML |
| `site.js` | Navigation, hamburger menu, category links, restaurant structured data |
| `styles.css` | Visual design and responsive layout |
| `index.html` | Overall page structure |

## Recommended workflow

1. Edit `menu.js`.
2. Commit the change to `main`.
3. Let GitHub Pages deploy the Test Site.
4. Check the menu visually on the phone and desktop.
5. If the change looks correct, it can later be promoted to the production repository.

This separation is intentional: **content changes should not require layout/code changes.**

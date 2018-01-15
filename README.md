# popform

Autopopulate and submit web forms

## Usage

```sh
npm install --save popform
```

```js
import popform from 'popform';

const config = [
  {
    delay: 10000, // wait for the page to load
    fields: { // fields to populate
      username: {
        value: 'some-username'
      },
      password: 'some-password' // string assumed to be value
    },
    elements: [ // elements to modify
      {
        query: '.box',
        style: {
          backgroundColor: 'blue'
        }
      }
    ],
    submit: '#submit' // location of submit button
  },
  {
    // Autopopulate second form after first form is submitted
  }
];
  
popform(config).then(() => {
  console.log('Form autopopulated and submitted');
});
```

## Red Ventures - Luan Bitar

Customizing a car
Available at: <https://redventures-luan.bitar.now.sh/>

### Installing
 
``
npm i && npm start
``

### Built With

- [React JS](https://reactjs.org/) - Framework
- [Recompose](https://github.com/acdlite/recompose) - React utility belt
- [SCSS](https://sass-lang.com/) - Style pre-processor

### Description

I did not used the BEM CSS methodology, because I took advantage of `:local()` use, which provides classes generated with hashes, making available scoped styles. When a whatched [this talk](https://www.youtube.com/watch?v=DTI5ojWBrW0&t=19965s) about [recompose](https://github.com/acdlite/recompose), presented by Milson Junior, I started to learning and use this approach with 5 layers of logic, which had very positive return in terms of code structure, readability and maintenance.

http://bit.ly/palestra-react-arquitetura-brjs18

[Repo 5 layers architecture by Milson Jr](https://github.com/mjnr/react-5-layer-architecture/tree/react-five-layers-architecture)

### Comments

Some images do not have exact pixel placement, causing a slight distortion when state changes. A back button would be an improvement of UX. Color of navbar text doesn't have sufficient contrast with background on disabled items.

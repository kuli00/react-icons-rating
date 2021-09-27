React Rating Stars
=======================================

Simple react component to display rating in any svg icon you want.

* * *

### List of features

*   Custom number of stars
*   Custom Fill/Stroke/Background color
*   Floating point rating
*   Custom icons
*   Working in both directions (horizontal & vertical)

### Code Demo

```typescript jsx We will use markdown for the Syntax Highlighting

<RatingStars
    numOfStars={5}
    rating={4.63}
    fillColor="#f00"
    strokeWidth={0}
    size={50}
    starPadding={5}
    direction="row"
    customIcon={{
        path: heartPath,
        viewBox: '0 0 35 28'
    }}
    backgroundColor="#d3d3d3"
/>

```

### Download & Installation

```shell 
npm i react-rating-stars
```

```typescript
import RatingStars from 'react-rating-stars';
```

### Props
|NAME|TYPE|DEFAULT|DESCRIPTION|
|----|----|-------|-----------|
|`numOfStars`|`Number`|-|Number of icons to be displayed|
|`rating`|`Number`|-|How much stars should be colored|
|`starPadding`|`Number`|`10`|Distance between stars in pixels|
|`size`|`Number`|`20`|Star size in pixels|
|`fillColor`|`String`|`#FF0000`|Color of a filled star in HEX|
|`backgroundColor`|`String`|`#FFFFFF`|Color of an unfilled star in HEX
|`stokeColor`|`String`|same as `fillColor`|Color of a star border in HEX|
|`strokeWidth`|`Number`|`2`|Stroke width in pixels|
|`direction`|`row` / `column`|`row`|Direction of stars|
|`customIcon`|`Object`|see below|Custom object of path and viewbox of SVG icon|

To pass a custom icon, create an object with two keys:
```typescript
{
  path: string;
  viewBox: string;
}
```
i.e.
```typescript
const customIcon = {
  path: 'M25.808 0A9.186 9.186 0 0017.5 5.3 9.18 9.18 0 000 9.27C0 22.421 17.5 28 17.5 28S35 22.421 35 9.27A9.231 9.231 0 0025.808 0',
  viewBox: '0 0 35 28',
};
```

### License

This project is licensed under the MIT License

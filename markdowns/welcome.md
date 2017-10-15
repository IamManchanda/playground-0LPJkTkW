# Part 3 - Flex Items (Flex Grow, Flex Shrink and Flex Basis)

This article is **Part 3** for the series **“Flexbox and CSS Grid”.**

In previous article, we learned on how to globally lay out all the flex items within a flex container by adding flexbox property values to that container. The flexible box layout specification provides several additional properties applicable directly to flex items. With these flex item–specific properties, we can more precisely control the layout of individual flex containers’ non-anonymous flex items. 

> The children of the flex container are called flex items, be they DOM nodes, non-empty text nodes, or generated content. When it comes to text-node children of flex containers, if the text node is not empty (containing content other than whitespace) it will be wrapped in an anonymous flex item, behaving like its flex item siblings. While these anonymous flex items do inherit all the flex properties set by the flex container, just like their DOM node siblings, they are not directly targetable with CSS. Thus, we can’t directly set any of the flex item–specific properties on them. 

The margins of flex items do not collapse. The `float` and `clear` properties don’t have an effect on flex items, and do not take a flex item out of flow. Additionally, `vertical-align` has no effect on a flex item. However, the `float` property can still affect box generation by influencing the `display` property’s computed value. 

**Flex Items: Absolute Positioning**

While a value of float: left or float: right on the child of a flex container does not float the item—as the child is a flex item and the floatis ignored—setting position: absolute is a different story. The absolutely-positioned children of flex containers, just like any other absolutely-positioned element, are taken out of the flow of the document. They do not get converted to flex items. They are not in the document flow. They do not participate in flex layout. 

However, they can be impacted by the properties set on the flex container, just like a childcan be impacted by a parent element that isn’t a flex container. In addition to inheriting inheritable properties as they would had the parent not been a flex container, the parent’s properties impact the origin of the positioning. The absolutely positioned child of a flex container is impacted by both the justify-content value of the parent flex container and its own align-self value, if there is one. 

For example, if you set `align-content: center;` on the absolutely positioned child, it will by default be centered on the flex container parent’s cross-axis. The order property may not impact where the absolutely-positioned flex container child is drawn, but it does impact the order of when it is drawn in relation to its siblings.

## Flex Grow

The `flex-grow` property defines whether a flex item is allowed to grow or not based on available space, and, if it is allowed to grow and there is available space, how much will it grow proportionally relative to the growth of other flex item siblings.

If the flex items are been laid out within the flex line such that they *don’t* take up the entire space on that line, then you can “expand” the flex items in such a way that they will fill up the entire line. The amount of available space on the line can be distributed among the flex items following a specific proportion that you can specify using the `flex-grow` property. The higher the `flex-grow` value, the more the item will be allowed to grow relative to the other items.

Negative numbers are not allowed. Float values, as long as they are greater than 0, are valid. The value specifies the growth factor, which determines how much the flex item will grow relative to the rest of the flex item siblings as the flex container’s free space is distributed. If there is any available space within the flex container, the space will be distributed proportionally among the children with a nonzero positive growth factor based on the various values of those growth factors.

@[Flex Grow]({"stubs": ["flex-grow.scss", "flex-grow.html"], "command": "/bin/bash /project/target/run.sh flex-grow"})

Codepen also [available](https://codepen.io/IamManchanda/pen/BwWQPz)

## Flex Shrink

The `flex-shrink` property specifies the shrink factor. The shrink factor determines how much a flex item will shrink relative to the rest of the flex item siblings when there isn’t enough space for them all to fit as defined by their content, basis, and other CSS properties. Basically, the shrink factor defines how the *negative space* is distributed, or how flex items should become narrower or shorter, when the flex container parent isn’t allowed to otherwise grow or wrap.

If the sum of the main sizes of all the flex items is greater than the main size of the flex container, then you can specify how much you want to “shrink” the flex items. The amount by which the flex items’ main sizes exceed the container’s main size is the negative space. Using the `flex-shrink` property, you can distribute this negative space over the flex items. The negative space is distributed in proportion to `[flex-basis](https://tympanus.net/codrops/css_reference/flexbox/#section_flex-basis)` multiplied by the `flex-shrink` ratio, where the flex basis is the initial main size of the flex item, before free space is distributed according to the flex factors.

@[Flex Shrink]({"stubs": ["flex-shrink.scss", "flex-shrink.html"], "command": "/bin/bash /project/target/run.sh flex-shrink"})

Codepen also [available](https://codepen.io/IamManchanda/pen/zEZoMJ)

## Flex Basis

```scss
flex-basis: auto | <'width'>
```

The `**flex-basis**` property specifies the flex basis which is the initial **main size** of a flex item, before free space is distributed according to other flex factors ( `flex-shrink` and `flex-grow`) This property determines the size of the content-box unless specified otherwise using `box-sizing`.

Except for `auto`, `flex-basis` is resolved the same way as `width` in horizontal writing modes: percentage values for the `flex-basis` property are set relative to the flex container’s inner main size. If the specified `flex-basis` is `auto`, the used flex basis is the value of the flex item’s main size property. This can itself be the keyword `auto`, which sizes the flex item based on its contents.

```scss
/* Specify <'width'> */
flex-basis: 10em;      
flex-basis: 3px;
flex-basis: auto;

/* Intrinsic sizing keywords */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* Automatically size based on the flex item’s content */
flex-basis: content;

/* Global values */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

Codepen also [available](https://codepen.io/IamManchanda/pen/BwWpBW)

You can learn more about Flex Basis [here](https://chriswrightdesign.com/experiments/flexbox-adventures/).

## Shorthand - Flex 

The `flex` property is a shorthand property for setting the `flex-grow`, `flex-shrink`, and `flex-basis` properties. The initial value is `0 1 auto`. The `flex-grow` and `flex-shrink` properties are optional and can be omitted from the `flex` declaration.

```scss
/* Basic values */
flex: auto;
flex: initial;
flex: none;
flex: 2;

/* One value, unitless number: flex-grow */
flex: 2;

/* One value, width/height: flex-basis */
flex: 10em;
flex: 30px;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;

/* Global values */
flex: inherit;
flex: initial;
flex: unset;
```  

For most purposes, authors should set `flex` to one of the following values: `auto`, `initial`, `none`, or a positive unitless number. According to [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

**Auto**

> The item is sized according to its `width` and `height` properties, but grows to absorb any extra free space in the flex container, and shrinks to its minimum size to fit the container. This is equivalent to setting "`flex: 1 1 auto`".

**Initial**

> **This is the default value.** The item is sized according to its `width` and `height` properties. It shrinks to its minimum size to fit the container, but does not grow to absorb any extra free space in the flex container. This is equivalent to setting "`flex: 0 1 auto`".

**None**

> The item is sized according to its `width` and `height` properties. It is fully inflexible: it neither shrinks nor grows in relation to the flex container. This is equivalent to "`flex: 0 0 auto`".

`<positive-number>`

> The item is given the specified proportion of the free space in the container. This is equivalent to setting "`flex: <positive-number> 1 0`".

To see the effect of these values, try resizing the flex containers from the example below ( codepen originally forked from [MDN](https://mdn.mozillademos.org/en-US/docs/Web/CSS/flex$samples/flex)):

@[Flex (Grow, Shrink, Basis)]({"stubs": ["flex.scss", "flex.html"], "command": "/bin/bash /project/target/run.sh flex"})

Codepen also [available](https://codepen.io/IamManchanda/pen/mBWRrr)

## To be Continued…

Thanks for following along. Next up is **Part 4,** where we will cover **Flexible Box Model**.

## References
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
- https://tympanus.net/codrops/css_reference/flexbox/


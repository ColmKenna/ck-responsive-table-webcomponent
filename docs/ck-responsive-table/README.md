
# ck-responsive-table

`ck-responsive-table` is a custom element that provides a responsive HTML table. It renders a standard `<table>` on desktop screens and transforms into a stacked, card-like layout on mobile devices. It uses custom child elements for a declarative and accessible authoring experience.

## Quick Start

```html
<script type="module" src="/src/components/ck-responsive-table/ck-responsive-table.ts"></script>

<ck-responsive-table class="table">
  <ck-responsive-thead>
    <ck-responsive-col-head>Name</ck-responsive-col-head>
    <ck-responsive-col-head>Email</ck-responsive-col-head>
  </ck-responsive-thead>
  <ck-responsive-tbody>
    <ck-responsive-row>
      <ck-responsive-col>John Doe</ck-responsive-col>
      <ck-responsive-col>john.doe@example.com</ck-responsive-col>
    </ck-responsive-row>
  </ck-responsive-tbody>
</ck-responsive-table>
```

## Installation

Simply import the component's JavaScript file in your HTML page:

```html
<script type="module" src="/src/components/ck-responsive-table/ck-responsive-table.ts"></script>
```

## API Documentation

### `ck-responsive-table`

The main container for the responsive table.

**Attributes**

| Attribute           | Type   | Default | Description                                                                 |
| ------------------- | ------ | ------- | --------------------------------------------------------------------------- |
| `mobile-breakpoint` | string | `600px` | The viewport width at which the table switches to the mobile layout.        |

Any other standard `<table>` attributes (e.g., `class`, `id`) will be passed through to the rendered `<table>` element.

### `ck-responsive-col-head`

Defines a column in the table header.

**Attributes**

| Attribute         | Type                        | Default | Description                                                              |
| ----------------- | --------------------------- | ------- | ------------------------------------------------------------------------ |
| `align`           | `'left'` `'center'` `'right'` | `left`  | Horizontal alignment for the header text (and cells in its column).      |
| `mobile-align`    | `'left'` `'center'` `'right'` | `left`  | Horizontal alignment for the cell content in mobile view.                |
| `mobile-no-label` | `'true'` `'false'`          | `false` | If `true`, the column header will not be used as a label in mobile view. |

### `ck-responsive-col`

Defines a cell in a table row.

**Attributes**

| Attribute          | Type                                                                                             | Default    | Description                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------ |
| `mobile-direction` | `'row'` `'column'` `'row-reverse'` `'column-reverse'`                                              | `column`   | Sets the `flex-direction` of the cell in mobile view.                    |
| `mobile-justify`   | `'flex-start'` `'center'` `'flex-end'` `'space-between'` `'space-around'` `'space-evenly'` | `flex-start` | Sets the `justify-content` of the cell in mobile view.                   |

## Theming

The component can be styled using CSS custom properties. It inherits a `--colour-border` variable for the border in the mobile view.

```css
:root {
  --colour-border: #CCCCCC;
}
```

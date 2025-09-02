
# ck-responsive-table: Formal Specification

## 1. Component Purpose

The `ck-responsive-table` component provides a method for displaying tabular data that is accessible and readable across a wide range of viewport sizes. It transforms a semantic, custom element-based structure into a standard HTML `<table>` that adapts its layout on smaller screens.

## 2. Functional Requirements

- **FR1**: The component MUST render as a standard `<table>` element in the DOM.
- **FR2**: The component MUST replace its own custom element tag (`<ck-responsive-table>`) with the generated `<table>`.
- **FR3**: The component MUST parse `<ck-responsive-thead>` and `<ck-responsive-tbody>` into `<thead>` and `<tbody>` elements.
- **FR4**: The component MUST parse `<ck-responsive-row>` and `<ck-responsive-col>` elements into `<tr>` and `<td>` elements.
- **FR5**: On viewports narrower than a specified breakpoint, the table layout MUST change to a stacked, card-like format where each row is visually separated.
- **FR6**: In the mobile layout, each cell (`<td>`) MUST be prepended with a label derived from its corresponding header (`<th>`), unless explicitly disabled.

## 3. API Specification

### `ck-responsive-table`

- **Tag Name**: `ck-responsive-table`
- **Attributes**:
  - `mobile-breakpoint` (string): Defines the max-width for the mobile layout (e.g., `768px`). Defaults to `600px`.

### `ck-responsive-col-head`

- **Tag Name**: `ck-responsive-col-head`
- **Attributes**:
  - `align` (string): `'left' | 'center' | 'right'`. Controls text alignment in the header and corresponding column cells.
  - `mobile-align` (string): `'left' | 'center' | 'right'`. Controls text alignment in the cell in mobile view.
  - `mobile-no-label` (string): `'true' | 'false'`. If `true`, hides the prepended label in mobile view.

### `ck-responsive-col`

- **Tag Name**: `ck-responsive-col`
- **Attributes**:
  - `mobile-direction` (string): `'row' | 'column' | 'row-reverse' | 'column-reverse'`. Controls `flex-direction` in mobile view.
  - `mobile-justify` (string): `'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'`. Controls `justify-content` in mobile view.

## 4. Accessibility Requirements

- **AR1**: The final rendered output MUST be a semantic HTML `<table>` to ensure screen reader compatibility.
- **AR2**: In the mobile view, the prepended header labels provide context for each cell value, maintaining accessibility when the visual header row is hidden.

## 5. Performance Requirements

- **PR1**: The DOM transformation logic MUST execute only once per component instance.
- **PR2**: The component should be performant enough to handle dozens of instances on a single page without significant blocking of the main thread.

## 6. Non-Goals

- The component will not use Shadow DOM for encapsulation.
- The component will not provide advanced features like sorting, filtering, or pagination. It is strictly for responsive display.
- The component will not manage its own data; it only transforms the DOM structure provided by the user.
